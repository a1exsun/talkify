// 不需要'use client'指令，这是一个服务器组件
import dynamic from 'next/dynamic';

// 动态导入客户端组件
const ChatPageClient = dynamic(() => import('./page.client'), { ssr: false });

export default function ChatPage({ searchParams }: { searchParams: { type?: string; id?: string } }) {
  return <ChatPageClient />;
}
