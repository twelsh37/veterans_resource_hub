import React from 'react'

// This Footer component is designed to be a consistent element across all pages 
// of the Veterans Resource Hub website, providing copyright information and 
// potentially serving as a visual anchor at the bottom of each page. Its fixed
//  positioning ensures it remains visible even when the page is scrolled, and 
// the styling suggests a modern, clean design that's likely consistent with the
//  overall theme of the website.

/**
 * Footer component
 * 
 * This component renders a fixed footer at the bottom of the page.
 * It displays a copyright notice for the Veterans Resource Hub.
 * 
 * @returns {JSX.Element} The Footer component
 */
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-[50px] bg-gray-800 text-white">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <p>© 2024. Veterans Resource Hub. All rights reserved.</p>
      </div>
    </footer>
  )
}
