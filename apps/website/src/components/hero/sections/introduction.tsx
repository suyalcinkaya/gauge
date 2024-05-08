import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { playgroundSectionId } from '@/lib/constants'

export const Introduction = () => {
  return (
    <>
      <h1>Gauge</h1>
      {/* <p className="subtitle">A circular visual for conveying a percentage.</p> */}
      <p className="subtitle">An aesthetic and customizable circular visual component for React.</p>
      <div className="flex items-center gap-4">
        <Button asChild>
          <a href={`#${playgroundSectionId}`}>Playground</a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/api">API</Link>
        </Button>
        <Button variant="secondary" asChild>
          <a href="https://github.com/suyalcinkaya/gauge" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </>
  )
}
