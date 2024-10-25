import Header from '@/components/Header'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto pt-20 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-xl">This is the landing page for new visitors.</p>
      </main>
    </div>
  )
}
