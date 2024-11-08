"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="w-64 bg-white shadow-lg h-screen fixed left-0">
      <nav className="flex flex-col gap-4 p-6 mt-8">
        <Link 
          href="/dashboard"
          className={`p-2 rounded transition-all duration-300 transform hover:scale-104 
            ${pathname === '/dashboard' 
              ? 'text-[#0A3161]' 
              : 'hover:text-[#0A3161]'
            }`}
        >
          Dashboard
        </Link>
        <Link 
          href="/profile"
          className={`p-2 rounded transition-all duration-300 transform hover:scale-104 
            ${pathname === '/profile' 
              ? 'text-[#0A3161]' 
              : 'hover:text-[#0A3161]'
            }`}
        >
          Profile
        </Link>
        <Link 
          href="/settings"
          className={`p-2 rounded transition-all duration-300 transform hover:scale-104 
            ${pathname === '/settings' 
              ? 'text-[#0A3161]' 
              : 'hover:text-[#0A3161]'
            }`}
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
