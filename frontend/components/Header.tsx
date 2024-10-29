'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
// import Image from 'next/image'
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useClerk } from "@clerk/clerk-react";

/**
 * Header component
 * 
 * This component renders the site header with authentication controls.
 * It uses Clerk for authentication management.
 * 
 * @returns {JSX.Element | null} The Header component or null during server-side rendering
 */

// The Header component uses several hooks:
// useState to manage the isClient state
// useAuth from Clerk to check if the user is signed in
// useClerk to access the openSignIn function

export default function Header() {
  // State to track if the component is being rendered on the client side
  const [isClient, setIsClient] = useState(false);
  // Hook to check if the user is signed in
  const { isSignedIn } = useAuth();
  // Hook to access Clerk's sign-in functionality
  const { openSignIn } = useClerk();

  
  // Effect to set isClient to true after initial render. 
  // Ensuring the component only renders on the client-side.
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null during server-side rendering to prevent hydration errors
  if (!isClient) {
    return null;
  }

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
          <div className="ml-auto flex items-center">
            {isSignedIn ? (
              // Show user button if signed in
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10"
                  }
                }}
              />
            ) : (
              // Show login button if not signed in
              <Button 
                variant="outline" 
                className="mr-2 bg-white bg-opacity-80 hover:bg-opacity-100"
                onClick={() => openSignIn()}
              >
                Login
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
