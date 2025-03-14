'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ChatType = 'default' | 'scenario' | 'video';

interface ChatContextType {
  lastChatType: ChatType;
  lastChatId: string | null;
  setLastChat: (type: ChatType, id: string | null) => void;
  resetLastChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [lastChatType, setLastChatType] = useState<ChatType>('default');
  const [lastChatId, setLastChatId] = useState<string | null>(null);

  const setLastChat = (type: ChatType, id: string | null) => {
    setLastChatType(type);
    setLastChatId(id);
  };

  const resetLastChat = () => {
    setLastChatType('default');
    setLastChatId(null);
  };

  return (
    <ChatContext.Provider value={{ lastChatType, lastChatId, setLastChat, resetLastChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}; 