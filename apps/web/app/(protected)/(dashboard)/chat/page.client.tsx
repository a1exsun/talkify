'use client';
import Chat from '@app-launch-kit/modules/chat/components/Chat';
import ScenarioChat from '@app-launch-kit/modules/chat/components/ScenarioChat';
import VideoChat from '@app-launch-kit/modules/chat/components/VideoChat';
import { useChatContext } from '@app-launch-kit/modules/chat/context/ChatContext';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const ChatPage = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  const { lastChatType, lastChatId, setLastChat } = useChatContext();
  
  // 当通过URL参数进入时，更新全局状态
  useEffect(() => {
    if (type === 'scenario' && id) {
      setLastChat('scenario', id);
    } else if (type === 'video' && id) {
      setLastChat('video', id);
    }
  }, [type, id, setLastChat]);

  // 优先使用URL参数，其次使用全局状态
  if (type === 'scenario' && id) {
    return <ScenarioChat id={id} />;
  }

  if (type === 'video' && id) {
    return <VideoChat id={id} />;
  }

  // 如果URL没有参数但有全局状态，使用全局状态
  if (lastChatType === 'scenario' && lastChatId) {
    return <ScenarioChat id={lastChatId} />;
  }

  if (lastChatType === 'video' && lastChatId) {
    return <VideoChat id={lastChatId} />;
  }

  return <Chat />;
};
  
export default ChatPage; 