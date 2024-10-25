"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRouteProtection() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      if (userId) {
        // User is logged in
        // You might want to add a check here to see if it's the user's first login
        router.push("/welcome");
      } else {
        // User is not logged in
        router.push("/");
      }
    }
  }, [isLoaded, userId, router]);

  return { isLoaded, userId };
}
