import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomePage() {
  const user = await currentUser();
  
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Permanent Sidebar */}
      <aside className="w-64 bg-white shadow-lg h-screen fixed left-0">
        <nav className="flex flex-col gap-4 p-6 mt-8">
          <h1 className="text-2xl font-bold mb-4">Resources</h1>
          <a href="/dashboard" className="text-lg hover:text-gray-600">Dashboard</a>
          <a href="/profile" className="text-lg hover:text-gray-600">Profile</a>
          <a href="/settings" className="text-lg hover:text-gray-600">Settings</a>
        </nav>
      </aside>
      
      {/* Main Content - with margin to account for sidebar */}
      <main className="ml-64 flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Hello, {user?.firstName || user?.username || 'Guest'}!</h1>
        <p className="text-xl">This is page is displayed for LOGGED IN visitors.</p>
      </main>
    </div>
  );
}