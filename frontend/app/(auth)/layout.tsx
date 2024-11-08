'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-grey-50">
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1 p-8">
          <div className="bg-grey-500 rounded-xl p-6 min-h-[calc(100vh-4rem)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
} 