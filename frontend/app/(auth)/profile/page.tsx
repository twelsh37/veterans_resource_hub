'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfilePage() {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Permanent Sidebar */}
      <aside className="w-64 bg-white shadow-lg h-screen fixed left-0">
        <nav className="flex flex-col gap-4 p-6 mt-8">
          <Link 
            href="/dashboard" 
            className={`text-lg hover:text-gray-600 ${pathname === '/dashboard' ? 'font-bold' : ''}`}
          >
            Dashboard
          </Link>
          <Link 
            href="/profile" 
            className={`text-lg hover:text-gray-600 ${pathname === '/profile' ? 'font-bold' : ''}`}
          >
            Profile
          </Link>
          <Link 
            href="/settings" 
            className={`text-lg hover:text-gray-600 ${pathname === '/settings' ? 'font-bold' : ''}`}
          >
            Settings
          </Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
        <p className="text-xl">Here is your profile!</p>
      </main>
    </div>
  );
} 