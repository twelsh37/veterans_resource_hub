// This useIsMobile hook is a custom hook that determines if the current viewport
// is mobile-sized. It uses the window.matchMedia API to check the viewport width
// against a predefined mobile breakpoint. The hook returns a boolean value that
// indicates whether the viewport is currently considered mobile.

import * as React from "react"

/**
 * The breakpoint (in pixels) below which a device is considered mobile
 */
const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to determine if the current viewport is mobile-sized
 * 
 * @returns {boolean} True if the viewport width is less than MOBILE_BREAKPOINT, false otherwise
 */
export function useIsMobile() {
  // State to store whether the viewport is mobile-sized
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query list for the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    /**
     * Update the isMobile state based on the current window width
     */
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Add event listener for changes in the media query
    mql.addEventListener("change", onChange)
    
    // Set initial state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup function to remove the event listener
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return the current mobile state, coerced to a boolean
  return !!isMobile
}
