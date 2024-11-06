"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, User, Settings, FileText } from "lucide-react";


/**
 * Array of sidebar navigation items
 * Each item has a name, href (link), and an icon component
 */
const sidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Forms', href: '/forms', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

/**
 * Sidebar component
 * 
 * This component renders a responsive sidebar navigation menu.
 * On mobile devices, it appears as a slide-out sheet.
 * 
 * @returns {JSX.Element} The Sidebar component
 */
export function Sidebar() {
  // Get the current pathname for active link styling
  const pathname = usePathname();

  return (
    <Sheet>
      {/* Mobile menu trigger button */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </SheetTrigger>
      {/* Sidebar content */}
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-2 text-lg p-2 rounded-md transition-colors",
                pathname === item.href 
                  ? "bg-gray-200 text-gray-900" 
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
