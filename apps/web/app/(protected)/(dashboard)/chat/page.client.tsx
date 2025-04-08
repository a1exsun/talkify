'use client';
import Chat from '@app-launch-kit/modules/chat/components/Chat';
import ScenarioChat from '@app-launch-kit/modules/chat/components/ScenarioChat';
import VideoChat from '@app-launch-kit/modules/chat/components/VideoChat';
import { useChatContext } from '@app-launch-kit/modules/chat/context/ChatContext';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const ChatPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  const { lastChatType, lastChatId, setLastChat } = useChatContext();
  const [isRTCStarted, setIsRTCStarted] = useState(false);
  
  // 当通过URL参数进入时，更新全局状态
  useEffect(() => {
    if (type === 'scenario' && id) {
      setLastChat('scenario', id);
    } else if (type === 'video' && id) {
      setLastChat('video', id);
    }
  }, [type, id, setLastChat]);

  // 定义startRTC函数
  const startRTC = () => {
    console.log('启动RTC连接');
    setIsRTCStarted(true);
    // 这里可以添加实际的RTC连接逻辑
  };

  // 定义closeRTC函数
  const closeRTC = () => {
    console.log('关闭RTC连接');
    setIsRTCStarted(false);
    // 这里可以添加实际的RTC关闭逻辑
  };

  // 优先使用URL参数，其次使用全局状态
  if (type === 'scenario' && id) {
    return <ScenarioChat id={id} startRTC={startRTC} closeRTC={closeRTC} isRTCStarted={isRTCStarted} />;
  }

  if (type === 'video' && id) {
    return <VideoChat id={id} startRTC={startRTC} closeRTC={closeRTC} isRTCStarted={isRTCStarted} />;
  }

  // 如果URL没有参数但有全局状态，使用全局状态
  if (lastChatType === 'scenario' && lastChatId) {
    return <ScenarioChat id={lastChatId} startRTC={startRTC} closeRTC={closeRTC} isRTCStarted={isRTCStarted} />;
  }

  if (lastChatType === 'video' && lastChatId) {
    return <VideoChat id={lastChatId} startRTC={startRTC} closeRTC={closeRTC} isRTCStarted={isRTCStarted} />;
  }

  return <Chat startRTC={startRTC} closeRTC={closeRTC} isRTCStarted={isRTCStarted} />;
};
  
export default ChatPage; 