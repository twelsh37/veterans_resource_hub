"use client";

import { useEffect } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SSOCallback() {
  const { isLoaded, signIn } = useSignIn();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && signIn) {
      signIn.attemptFirstFactor({
        strategy: "oauth_callback",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/welcome",
      }).then((result) => {
        if (result.status === "complete") {
          router.push("/welcome");
        }
      }).catch((err) => {
        console.error("Error during sign in:", err);
        router.push("/");
      });
    }
  }, [isLoaded, signIn, router]);

  return <div>Loading...</div>;
}
