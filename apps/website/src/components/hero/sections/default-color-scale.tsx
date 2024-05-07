'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const DefaultColorScale = () => {
  return (
    <>
      <h2>Default color scale</h2>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={15} />
      <Gauge value={34} />
      <Gauge value={68} />
      <Gauge value={88} />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-8">
            <Gauge value={15} />
            <Gauge value={34} />
            <Gauge value={68} />
            <Gauge value={88} />
          </div>
        }
      />
    </>
  )
}
