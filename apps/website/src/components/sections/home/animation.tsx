'use client'

import { Gauge } from '@suyalcinkaya/gauge'
import { LuRotateCw } from 'react-icons/lu'

import { CodeBlock } from '@/components/code-block'
import { Button } from '@/components/ui/button'
import { useReplayAnimation } from '@/hooks/use-replay-animation'

const gauges = [
  { value: 18, showAnimation: true, showValue: true },
  { value: 18, showAnimation: true, showValue: true, variant: 'descending' as const },
  { value: 81, showAnimation: true, showValue: true },
  { value: 81, showAnimation: true, showValue: true, variant: 'descending' as const }
]

export const Animation = () => {
  const { isAnimationPlaying, rerenderKey, replayAnimation } = useReplayAnimation()

  return (
    <>
      <h2>Animation</h2>
      <p className="subtitle">
        On initial render, the <code className="inline-code">showAnimation</code> prop animates the Gauge from 0 to the{' '}
        <code className="inline-code">value</code> for the <code className="inline-code">ascending</code> variant, and
        from 100 to the <code className="inline-code">value</code> for the{' '}
        <code className="inline-code">descending</code> variant.
      </p>
      <Button onClick={replayAnimation} disabled={isAnimationPlaying} className="mb-8 gap-1.5">
        <LuRotateCw size={14} />
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
              <Gauge key={`animation_gauge_${gaugeIndex}_${rerenderKey}`} {...gauge} />
            ))}
          </div>
        }
      />
    </>
  )
}
