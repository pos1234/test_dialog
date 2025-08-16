import type { ReactNode } from "react"

export type TranslationItem = {
  text: string
  emphasis?: "strong" | "medium" | "weak"
}

export type VocabularyCardProps = {
  word: string
  pronunciation?: string
  baseForm?: string
  translations?: TranslationItem[]
  // dialog
  triggerButton?: string | ReactNode
}
