import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Veterans Resource Hub",
  description: "VA Resources",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider dynamic={true}>
          <Header />
          {children}
          <Footer />  
        </ClerkProvider>
      </body>
    </html>
  )
} 
