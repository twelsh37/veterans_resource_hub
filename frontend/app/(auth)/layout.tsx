'use client';

import Sidebar from '@/components/Sidebar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1 p-8">
          <div className="bg-grey-100 rounded-xl p-6 min-h-[calc(100vh-4rem)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 