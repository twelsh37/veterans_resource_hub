'use client';

import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Image from 'next/image';

export default function Header() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-[100px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/flag-sky-background.jpg")' }}>
      {/* Background Images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-grey-500/50 to-grey-600/50" />
      </div>

      {/* Header Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo/Title */}
          <div className="flex items-center space-x-4">
          </div>

          {/* Auth Buttons */}
          <div>
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="bg-[#0067b8] text-white px-6 py-2 rounded-full 
                  hover:bg-[#005da6] transition-colors duration-200 shadow-md">
                  Sign In
                </button>
              </SignInButton>
            ) : (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonAvatarBox: "w-10 h-10 rounded-full border-2 border-white"
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}