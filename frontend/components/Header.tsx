'use client'

import { Button } from "@/components/ui/button"
import { useAuth, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";
import { AuthSection } from "./AuthSection";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-[100px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/flag-sky-background.jpg")' }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      
      {/* Header content */}
      <div className="relative container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          {/* Space for logo or other left-aligned content */}
        </div>
        <nav className="flex items-center">
          <AuthSection />
        </nav>
      </div>
    </header>
  )
}
