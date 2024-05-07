'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const CustomSecondaryColor = () => {
  return (
    <>
      <h2>Custom secondary color</h2>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <Gauge value={40} primary="#ec4899" secondary="#fbcfe8" />
  )
}`}
        component={<Gauge value={40} primary="#ec4899" secondary="#fbcfe8" />}
      />
    </>
  )
}
