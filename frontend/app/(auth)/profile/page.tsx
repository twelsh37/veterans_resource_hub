'use client';

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('Profile page mounted', { user, isLoaded });
    
    // If user is not authenticated after loading, redirect to sign-in
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return null; // We'll handle this in the useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="space-y-4">
          <div>
            <label className="font-semibold">Email:</label>
            <p>{user.primaryEmailAddress?.emailAddress}</p>
          </div>
          <div>
            <label className="font-semibold">Name:</label>
            <p>{user.firstName} {user.lastName}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 