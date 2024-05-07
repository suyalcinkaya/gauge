import { twMerge } from 'tailwind-merge'
import { cx } from 'classix'

type Argument = string | boolean | null | undefined

export function cn(...args: Argument[]) {
  return twMerge(cx(...args))
}
