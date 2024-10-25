"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RouteProtection({ children }: { children: React.ReactNode }) {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoaded && user) {
      if (pathname === '/') {
        router.push('/welcome');
      }
    } else if (isLoaded && !userId && pathname !== '/') {
      router.push('/');
    }
  }, [isLoaded, userId, user, router, pathname]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
