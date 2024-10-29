"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

/**
 * SignInButton component
 * 
 * This component renders a button that initiates the sign-in process
 * using Clerk's OAuth with Google.
 * 
 * @returns {JSX.Element} A button component that triggers the sign-in process
 */
export default function SignInButton() {
  // Hook to access Clerk's sign-in functionality
  const { signIn } = useSignIn();
  // Hook to access Next.js router
  const router = useRouter();

  /**
   * Handles the sign-in process when the button is clicked
   */
  const handleSignIn = async () => {
    try {
      // Attempt to create a sign-in session with Clerk
      await signIn.create({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/welcome",
      });
    } catch (err) {
      console.error("Error during sign in:", err);
    }
  };

  return (
    <Button onClick={handleSignIn}>
      Sign In
    </Button>
  );
}
