import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Returns the class for the emphasis badge on a translation item
export function translationBadgeClass(emphasis?: "strong" | "medium" | "weak") {
  switch (emphasis) {
    case "strong":
      return "w-2 h-3/4 bottom-0 absolute left-0 bg-purple-500 rounded-bl-lg"
    case "medium":
      return "w-2 h-2 bottom-0 absolute left-0 bg-purple-500 rounded-bl-lg"
    case "weak":
    default:
      return "w-[4px] h-[4px] bottom-0 absolute left-0 bg-purple-500 rounded-bl-lg"
  }
}
