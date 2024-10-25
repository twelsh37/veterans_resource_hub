'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading placeholder
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/flag-sky-background.jpg")' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
        </div>
        <nav className="flex items-center">
          <div className="ml-auto flex items-center">
            {isSignedIn ? (
              <UserButton 
                afterSignOutUrl="/" 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10" // Adjust size as needed
                  }
                }}
              />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button 
                    variant="outline" 
                    className="mr-2 bg-white bg-opacity-80 hover:bg-opacity-100"
                  >
                    Login
                  </Button>
                </SignInButton>
                <Button 
                  onClick={() => router.push('/sign-up')}
                  className="bg-white text-blue-600 hover:bg-opacity-90"
                >
                  Sign up
                </Button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
