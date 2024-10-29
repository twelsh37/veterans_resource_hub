'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <div className="relative h-16">
          <div className="absolute inset-0 bg-black bg-opacity-30"> {/* This adds a slight dark overlay to ensure text is readable */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center h-full">
              <div className="text-2xl font-bold text-white">BIG FAT LOGO</div>
              <nav>
                <Button 
                  variant="outline" 
                  onClick={() => setShowLogin(true)}
                  className="mr-2 bg-white bg-opacity-80 hover:bg-opacity-100"
                >
                  Login
                </Button>
                <Button className="bg-white text-blue-600 hover:bg-opacity-90">Sign up</Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <p>Login form goes here</p>
            <Button 
              variant="destructive"
              onClick={() => setShowLogin(false)}
              className="mt-4"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}