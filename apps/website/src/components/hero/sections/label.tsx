'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const Label = () => {
  return (
    <>
      <h2>Label</h2>
      <p className="subtitle">
        Display the value inside the Gauge with the <code className="inline-code">showValue</code> prop.
      </p>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={80} size="xs" showValue />
      <Gauge value={100} size="xs" showValue />
      <Gauge value={80} size="md" showValue />
      <Gauge value={100} size="md" showValue />
      <Gauge value={80} size="xl" showValue />
      <Gauge value={100} size="xl" showValue />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-8">
            <Gauge value={80} size="xs" showValue />
            <Gauge value={100} size="xs" showValue />
            <Gauge value={80} size="md" showValue />
            <Gauge value={100} size="md" showValue />
            <Gauge value={80} size="xl" showValue />
            <Gauge value={100} size="xl" showValue />
          </div>
        }
      />
    </>
  )
}
