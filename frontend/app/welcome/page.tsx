import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomePage() {
  const user = await currentUser();
  
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto pt-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Hello, {user?.firstName}!</h1>
        <p className="text-xl">This is page is displayed for LOGGED IN visitors.</p>
      </main>
    </div>
  );
}