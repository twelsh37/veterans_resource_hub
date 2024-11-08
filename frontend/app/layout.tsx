import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ClerkProvider dynamic={true}>
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
} 
