import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { playgroundSectionId } from '@/lib/constants'

export const ApiIntroduction = () => {
  return (
    <>
      <h1>Gauge API</h1>
      <p className="subtitle">API documention for Gauge.</p>
      <div className="flex items-center gap-4">
        <Button asChild>
          <a href={`/#${playgroundSectionId}`}>Playground</a>
        </Button>
        <Button variant="outline" className="w-fit" asChild>
          <Link href="/">Homepage</Link>
        </Button>
      </div>
    </>
  )
}
