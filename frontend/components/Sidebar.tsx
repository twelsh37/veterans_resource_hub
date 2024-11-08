"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="w-64 bg-white shadow-lg h-screen fixed left-0">
      <nav className="flex flex-col gap-4 p-6 mt-8">
        <Link 
          href="/welcome"
          className={`p-2 rounded ${pathname === '/welcome' ? 'bg-gray-100' : ''}`}
        >
          Welcome
        </Link>
        <Link 
          href="/profile"
          className={`p-2 rounded ${pathname === '/profile' ? 'bg-gray-100' : ''}`}
        >
          Profile
        </Link>
        {/* other navigation items */}
      </nav>
    </aside>
  );
}
