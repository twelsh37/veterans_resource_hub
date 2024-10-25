import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useRouteProtection } from "./routes";
import RouteProtection from "./RouteProtection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
      <ClerkProvider appearance={{ baseTheme: undefined }} dynamic>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <RouteProtection>{children}</RouteProtection>
          </main>
          <Footer />
        </body>
      </ClerkProvider>
    </html>
  )
}
