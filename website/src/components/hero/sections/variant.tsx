'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const Variant = () => {
  return (
    <>
      <h2>Variant</h2>
      <p className="subtitle">
        The <code className="inline-code">ascending</code> variant (default) is useful for cases like tracking the
        percentage of a goal *achieved*. The <code className="inline-code">descending</code> variant is useful for cases
        like tracking the percentage of a goal *remaining*.
      </p>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <div className="flex items-center gap-8">
      <Gauge value={42} showValue />
      <Gauge value={42} showValue variant="descending" />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-8">
            <Gauge value={42} showValue />
            <Gauge value={42} showValue variant="descending" />
          </div>
        }
      />
    </>
  )
}
