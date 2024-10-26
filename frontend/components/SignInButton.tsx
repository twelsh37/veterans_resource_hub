"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignInButton() {
  const { signIn } = useSignIn();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
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
