import Header from '@/components/Header'
import ClientHeader from '@/components/ClientHeader'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

// Remove or comment out the LandingPage function
// export default function LandingPage() {
//     return (
//       <div className="min-h-screen bg-gray-100">
//         <Header />
//         <main className="container mx-auto pt-20 px-4">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Our Site</h1>
//           <p className="text-xl">This is the landing page for new visitors.</p>
//         </main>
//       </div>
//     )
// }

export default async function LoggedInPage() {
  const user = await currentUser();

  if (!user) {
    redirect('/')
  }

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.firstName}!</h1>
      {/* Rest of your logged-in page content */}
    </div>
  )
}
