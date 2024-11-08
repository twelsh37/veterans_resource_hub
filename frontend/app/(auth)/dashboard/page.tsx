'use client';

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('Dashboard mounted', { user, isLoaded });
    
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Welcome {user.firstName}</h2>
          <p>This is your dashboard</p>
        </div>
      </div>
    </div>
  );
} 