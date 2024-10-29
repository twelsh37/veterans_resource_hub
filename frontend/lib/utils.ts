// The purpose of this utility function is to provide an easy way to combine
// multiple class names, including conditional classes, while also optimizing
// Tailwind CSS classes to prevent conflicts and reduce redundancy.
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
