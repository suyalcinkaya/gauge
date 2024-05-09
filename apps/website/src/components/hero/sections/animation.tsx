'use client'

import { useEffect, useState } from 'react'
import { Gauge } from '@suyalcinkaya/gauge'
import { useInView } from 'react-intersection-observer'

import { CodeBlock } from '@/components/code-block'

import { Button } from '@/components/ui/button'

const initialGauges = [
  { value: 18, showAnimation: true, showValue: true },
  { value: 18, showAnimation: true, showValue: true, variant: 'descending' as const },
  { value: 81, showAnimation: true, showValue: true },
  { value: 81, showAnimation: true, showValue: true, variant: 'descending' as const }
]

export const Animation = () => {
  const [gauges, setGauges] = useState(initialGauges)
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false)
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })

  const playAnimation = () => {
    if (isAnimationPlaying) return

    setIsAnimationPlaying(true)
    setGauges(
      gauges.map((gauge) => ({
        ...gauge,
        value: gauge.variant === 'descending' ? 100 : 0,
        showAnimation: false
      }))
    )

    setTimeout(() => {
      setGauges(initialGauges)

      setTimeout(() => {
        // Animation transition duration is 1s
        setIsAnimationPlaying(false)
      }, 1000)
    }, 500)
  }

  // Play animation when the component is in view
  useEffect(() => {
    if (inView) {
      playAnimation()
    }
  }, [inView])

  return (
    <>
      <h2>Animation</h2>
      <p className="subtitle">
        On initial render, the <code className="inline-code">showAnimation</code> prop animates the Gauge from 0 to the
        value for the <code className="inline-code">ascending</code> variant, and from 100 to the value for the{' '}
        <code className="inline-code">descending</code> variant.
      </p>

      <Button onClick={playAnimation} disabled={isAnimationPlaying} className="mb-8">
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
          <div className="flex items-center gap-8" ref={ref}>
            {gauges.map((gauge, gaugeIndex) => (
              <Gauge key={`gauge_${gaugeIndex}`} {...gauge} value={gauge.value} showAnimation={gauge.showAnimation} />
            ))}
          </div>
        }
      />
    </>
  )
}
