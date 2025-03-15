'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Box } from "@app-launch-kit/components/primitives/box";
import { VStack } from "@app-launch-kit/components/primitives/vstack";
import { Pressable } from "@app-launch-kit/components/primitives/pressable";
import { Text } from "@app-launch-kit/components/primitives/text";
import { ScrollView } from "@app-launch-kit/components/primitives/scroll-view";
import { Icon } from "@app-launch-kit/components/primitives/icon";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";
import { View, Platform } from "react-native";
import { MicIcon } from "lucide-react-native";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// WebSocket工作器URL
const WORKER_URL = "wss://talkifynoauth.lab7.workers.dev";

// 根据环境确定 WebSocket URL
const getWorkerUrl = () => {
  return WORKER_URL;
};

const ChatMessage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); 
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const webSocketRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<View>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  // 滚动到最新消息
  const scrollToBottom = () => {
    if (messagesEndRef.current && isWeb) {
      (messagesEndRef.current as any).scrollIntoView?.({ behavior: 'smooth' });
    }
  };
  
  // 消息更新时滚动到底部
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 初始化媒体录制
  const initMediaRecorder = async () => {
    if (!isWeb) {
      setError('音频录制仅在Web环境下可用');
      return false;
    }
    
    try {
      // 请求音频录制权限
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // 创建MediaRecorder实例
      mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      
      // 设置数据处理事件
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      // 设置录制停止事件
      mediaRecorderRef.current.onstop = async () => {
        // 将录制的音频块合并为一个blob
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        
        // 将音频数据发送到WebSocket
        sendAudioToWebSocket(audioBlob);
        
        // 清空音频块数组
        audioChunksRef.current = [];
      };
      
      return true;
    } catch (error) {
      console.error('初始化媒体录制错误:', error);
      setError('无法访问麦克风，请检查权限设置');
      return false;
    }
  };
  
  // 发送音频数据到WebSocket
  const sendAudioToWebSocket = async (audioBlob: Blob) => {
    if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
      try {
        console.log('发送音频数据到WebSocket');
        
        // 将音频Blob转换为ArrayBuffer
        const arrayBuffer = await audioBlob.arrayBuffer();
        const audioData = new Uint8Array(arrayBuffer);
        
        // 构建符合Gemini Multimodal Live API的请求
        const requestPayload = {
          media_chunks: [
            audioData
          ],
          end_of_turn: true
        };
        
        // 发送音频数据
        webSocketRef.current.send(JSON.stringify(requestPayload));
        
        // 添加用户消息占位符
        const userMessage: Message = {
          id: 'user-' + Date.now(),
          text: "🎤 [已发送语音]",
          sender: 'user',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, userMessage]);
        
      } catch (error) {
        console.error('发送音频到WebSocket错误:', error);
        setError('发送音频数据失败');
      }
    } else {
      setError('未连接到服务器，无法发送音频');
    }
  };
  
  // 开始录音
  const startRecording = async () => {
    if (!mediaRecorderRef.current && !(await initMediaRecorder())) {
      return;
    }
    
    try {
      // 开始录音
      mediaRecorderRef.current?.start();
      setIsRecording(true);
      setError(null);
    } catch (error) {
      console.error('启动录音错误:', error);
      setError('启动录音失败');
    }
  };
  
  // 停止录音
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (error) {
        console.error('停止录音错误:', error);
      }
    }
    setIsRecording(false);
  };
  
  // 初始化WebSocket连接
  const initializeWebSocket = async () => {
    try {
      // 如果已经有连接，则不再创建新连接
      if (webSocketRef.current && webSocketRef.current.readyState === WebSocket.OPEN) {
        return;
      }
      
      setIsConnecting(true);
      setError(null);
      
      // 创建WebSocket连接
      const wsUrl = `${getWorkerUrl()}/v1beta/models/gemini-pro:streamGenerateContent`;
      console.log('正在连接到WebSocket:', wsUrl);
      
      // 直接创建WebSocket连接，无需鉴权
      webSocketRef.current = new WebSocket(wsUrl);
      
      // 设置WebSocket事件处理程序
      webSocketRef.current.onopen = () => {
        console.log('WebSocket连接已建立');
        setIsConnecting(false);
        setIsConnected(true);
        
        // 发送初始化消息
        if (webSocketRef.current) {
          try {
            const setupPayload = {
              model: "models/gemini-pro",
              bidi_generate_content_setup: {
                generation_config: {
                  temperature: 0.7,
                  topK: 40,
                  topP: 0.95,
                  maxOutputTokens: 1024,
                },
                response_modalities: ["TEXT"]
              }
            };
            webSocketRef.current.send(JSON.stringify(setupPayload));
            console.log('发送初始化消息:', setupPayload);
          } catch (error) {
            console.error('发送初始化消息错误:', error);
          }
        }
        
        // 添加欢迎消息
        if (messages.length === 0) {
          const welcomeMessage: Message = {
            id: 'welcome',
            text: "你好！我是你的AI助手。点击麦克风按钮可以开始录音。",
            sender: 'ai',
            timestamp: new Date()
          };
          setMessages([welcomeMessage]);
        }
      };
      
      // 处理接收到的消息
      webSocketRef.current.onmessage = (event) => {
        try {
          console.log('收到WebSocket消息:', event.data);
          const data = JSON.parse(event.data);
          console.log('解析后的数据:', data);
          
          // 处理Gemini API的响应
          if (data.bidi_generate_content_server_content && data.bidi_generate_content_server_content.model_turn) {
            const content = data.bidi_generate_content_server_content.model_turn;
            if (content.parts && content.parts.length > 0) {
              const text = content.parts[0].text;
              console.log('提取的文本:', text);
              
              // 将AI响应添加到消息列表
              const newMessage: Message = {
                id: Date.now().toString(),
                text: text,
                sender: 'ai',
                timestamp: new Date()
              };
              
              setMessages(prev => [...prev, newMessage]);
            } else {
              console.log('找不到有效的content.parts结构');
            }
          } else if (data.bidi_generate_content_setup_complete) {
            console.log('Gemini设置完成，可以开始发送音频数据');
          } else {
            console.log('收到未识别的消息格式');
          }
        } catch (error) {
          console.error('解析WebSocket消息错误:', error, '原始数据:', event.data);
        }
      };
      
      // 处理错误
      webSocketRef.current.onerror = (err) => {
        console.error('WebSocket错误:', err);
        setError('与服务器通信出错，请稍后再试');
        setIsConnecting(false);
        setIsConnected(false);
      };
      
      // 处理连接关闭
      webSocketRef.current.onclose = (event) => {
        console.log('WebSocket连接已关闭:', event.code, event.reason);
        if (event.code !== 1000) {
          // 非正常关闭
          setError('连接已断开，请重试');
        }
        setIsConnecting(false);
        setIsConnected(false);
      };
      
    } catch (error) {
      console.error('初始化WebSocket错误:', error);
      setError('连接服务器失败，请检查网络连接');
      setIsConnecting(false);
      setIsConnected(false);
    }
  };
  
  // 关闭WebSocket连接
  const closeWebSocket = () => {
    // 停止录音
    if (isRecording) {
      stopRecording();
    }
    
    if (webSocketRef.current) {
      webSocketRef.current.close(1000, "用户主动关闭连接");
      setIsConnected(false);
      
      // 添加关闭消息
      const closeMessage: Message = {
        id: 'close-' + Date.now(),
        text: "连接已关闭。点击麦克风按钮可以重新连接。",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, closeMessage]);
    }
  };
  
  // 组件卸载时关闭连接
  useEffect(() => {
    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
      
      if (mediaRecorderRef.current) {
        const tracks = mediaRecorderRef.current.stream?.getTracks();
        tracks?.forEach(track => track.stop());
      }
    };
  }, []);
  
  // 处理麦克风按钮点击事件
  const handleMicButtonClick = () => {
    if (!isConnected) {
      // 如果未连接，则建立连接
      initializeWebSocket();
      return;
    }
    
    if (isRecording) {
      // 如果正在录音，则停止录音
      stopRecording();
    } else {
      // 如果已连接且未录音，则开始录音
      startRecording();
    }
  };
  
  return (
    <VStack className="w-full h-full relative">
      {isConnecting && (
        <Box className="absolute top-0 left-0 right-0 bg-blue-500 py-2 z-10">
          <Text className="text-white text-center">正在连接服务器...</Text>
        </Box>
      )}
      
      {error && (
        <Box className="absolute top-0 left-0 right-0 bg-red-500 py-2 z-10">
          <Text className="text-white text-center">{error}</Text>
        </Box>
      )}
      
      {isRecording && (
        <Box className="absolute top-0 left-0 right-0 bg-green-500 py-2 z-10">
          <Text className="text-white text-center">正在录音...</Text>
        </Box>
      )}
      
      {/* 显示消息列表 */}
      {messages.length > 0 && (
        <Box className="flex-1 overflow-auto p-4 mb-4">
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space="md">
              {messages.map((message) => (
                <Box 
                  key={message.id} 
                  className={`p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-blue-100 self-end ml-auto max-w-3/4' 
                      : 'bg-gray-100 self-start mr-auto max-w-3/4'
                  }`}
                >
                  <Text>{message.text}</Text>
                  <Text className="text-xs text-gray-500 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </Text>
                </Box>
              ))}
              <Box ref={messagesEndRef as any} />
            </VStack>
          </ScrollView>
        </Box>
      )}
      
      {/* 麦克风按钮 */}
      <Pressable 
        onPress={handleMicButtonClick}
        className="w-full flex items-center justify-center py-6"
      >
        <Box 
          className={`rounded-full flex items-center justify-center ${
            isRecording 
              ? 'bg-red-500' 
              : isConnected 
                ? 'bg-green-500' 
                : 'bg-gray-300'
          }`}
          style={{ width: 50, height: 50 }}
        >
          <Icon as={MicIcon as any} size="md" color="white" />
        </Box>
        <Text className="mt-2 text-gray-600">
          {isRecording 
            ? '点击停止录音' 
            : isConnected 
              ? '点击开始录音' 
              : '点击开始对话'}
        </Text>
      </Pressable>
    </VStack>
  );
};

export const Chat = ({ id }: { id?: string }) => {
  return (
    <Box className="flex-1 bg-background-0 justify-center items-center">
      <ChatMessage />
    </Box>
  );
};

export default Chat;