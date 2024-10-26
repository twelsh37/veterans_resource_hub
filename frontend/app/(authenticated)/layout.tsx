import { Sidebar } from "@/components/Sidebar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex md:flex-col md:w-64 md:bg-white md:border-r">
        <div className="flex-1 py-4 px-3">
          <Sidebar />
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b md:hidden">
          <div className="px-4 py-3">
            <Sidebar />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
