'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'
import { Button } from '@/components/ui/button'

export const Animation = () => {
  return (
    <>
      <h2>Animation</h2>
      <p className="subtitle">
        On initial render, the <code className="inline-code">showAnimation</code> prop animates the Gauge from 0 to the
        value for the <code className="inline-code">ascending</code> variant, and from 100 to the value for the{' '}
        <code className="inline-code">descending</code> variant.{' '}
        <Button
          variant="link"
          className="inline h-fit whitespace-pre-line p-0 text-base"
          onClick={() => window.location.reload()}
        >
          Refresh the page
        </Button>{' '}
        to see the animation.
      </p>
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
            <Gauge value={18} showAnimation showValue />
            <Gauge value={18} showAnimation showValue variant="descending" />
            <Gauge value={81} showAnimation showValue />
            <Gauge value={81} showAnimation showValue variant="descending" />
          </div>
        }
      />
    </>
  )
}
