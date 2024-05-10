'use client'

import { useState } from 'react'
import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'
import { Button } from '@/components/ui/button'

const gauges = [
  { value: 18, showAnimation: true, showValue: true },
  { value: 18, showAnimation: true, showValue: true, variant: 'descending' as const },
  { value: 81, showAnimation: true, showValue: true },
  { value: 81, showAnimation: true, showValue: true, variant: 'descending' as const }
]

export const Animation = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)

  const replayAnimation = () => {
    if (isAnimationPlaying) return
    setIsAnimationPlaying(true)

    setTimeout(() => {
      setIsAnimationPlaying(false)
    }, 1000)
  }

  return (
    <>
      <h2>Animation</h2>
      <p className="subtitle">
        On initial render, the <code className="inline-code">showAnimation</code> prop animates the Gauge from 0 to the{' '}
        <code className="inline-code">value</code> for the <code className="inline-code">ascending</code> variant, and
        from 100 to the <code className="inline-code">value</code> for the{' '}
        <code className="inline-code">descending</code> variant.
      </p>
      <Button onClick={replayAnimation} disabled={isAnimationPlaying} className="mb-8">
        Replay animation
      </Button>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={18} showAnimation showValue />
      <Gauge value={18} showAnimation showValue variant="descending" />
      <Gauge value={81} showAnimation showValue />
      <Gauge value={81} showAnimation showValue variant="descending" />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-8">
            {gauges.map((gauge, gaugeIndex) => (
              <Gauge key={`gauge_${isAnimationPlaying ? Math.random() : gaugeIndex}`} {...gauge} />
            ))}
          </div>
        }
      />
    </>
  )
}
