'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const Default = () => {
  return (
    <>
      <h2>Default</h2>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={42} size="xs" />
      <Gauge value={42} size="sm" />
      <Gauge value={42} size="md" />
      <Gauge value={42} size="lg" />
      <Gauge value={42} size="xl" />
      <Gauge value={42} size="2xl" />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-8">
            <Gauge value={42} size="xs" />
            <Gauge value={42} size="sm" />
            <Gauge value={42} size="md" />
            <Gauge value={42} size="lg" />
            <Gauge value={42} size="xl" />
            <Gauge value={42} size="2xl" />
          </div>
        }
      />
    </>
  )
}
