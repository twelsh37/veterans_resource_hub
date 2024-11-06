'use client'

import { Button } from "@/components/ui/button"
import { useAuth, UserButton } from "@clerk/nextjs";
import { useClerk } from "@clerk/clerk-react";

export function AuthSection() {
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();

  return (
    <div className="ml-auto flex items-center">
      {isSignedIn ? (
        <UserButton 
          afterSignOutUrl="/" 
          appearance={{
            elements: {
              avatarBox: "w-10 h-10"
            }
          }}
        />
      ) : (
        <Button 
          variant="outline" 
          className="mr-2 bg-white bg-opacity-80 hover:bg-opacity-100"
          onClick={() => openSignIn()}
        >
          Login
        </Button>
      )}
    </div>
  );
} 