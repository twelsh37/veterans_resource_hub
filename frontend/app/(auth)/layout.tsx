'use client';

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

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
          {children}
        </main>
      </div>
    </div>
  );
} 