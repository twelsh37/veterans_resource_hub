'use client'

// imports the dynamic function from Next.js, which allows for dynamic imports of 
// components.
import dynamic from 'next/dynamic'

// Dynamically import the Header component with client-side rendering only
// The Header component is dynamically imported using dynamic(). 
// The { ssr: false } option disables server-side rendering for this component, 
// ensuring it's only loaded and rendered on the client-side.
const Header = dynamic(() => import('./Header'), { ssr: false })

/**
 * ClientHeader component
 * 
 * This component is a wrapper for the dynamically imported Header component.
 * It ensures that the Header is only rendered on the client-side.
 * 
 * @returns {JSX.Element} The dynamically loaded Header component
 */
export default function ClientHeader() {
  return <Header />
}
