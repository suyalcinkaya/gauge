import { cn } from '@/lib/utils'

export type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export const SparkleSvg = ({ position }: { position: Position }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        'absolute z-10 size-4 fill-black',
        position === 'top-right' && '-right-2 -top-2',
        position === 'bottom-left' && '-bottom-2 -left-2',
        position === 'bottom-right' && '-bottom-2 -right-2',
        position === 'top-left' && '-left-2 -top-2'
      )}
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
    </svg>
  )
}
