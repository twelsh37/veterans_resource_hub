"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Welcome() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Application!</h1>
      <p className="mb-4">We're glad you've joined us. Here are some things you can do:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Explore our features</li>
        <li>Set up your profile</li>
        <li>Connect with other users</li>
      </ul>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
}
