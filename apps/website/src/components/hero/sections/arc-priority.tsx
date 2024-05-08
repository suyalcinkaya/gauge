'use client'

import { useEffect, useState } from 'react'
import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

const midValue = 50
const gap = 8

export const ArcPriority = () => {
  return (
    <>
      <h2>Arc priority</h2>
      <p className="subtitle">
        When displaying half ratio (51 &gt; <code className="inline-code">value</code> &gt; 49), the Gauge will make
        both arcs are equally sized.
      </p>
      <CodeBlock
        highlightedLinesNumbers={[6, 7, 8]}
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <Gauge value={48.3} primary="#2563eb" secondary="#ef4444" showValue />
    <Gauge value={49.3} primary="#2563eb" secondary="#ef4444" showValue />
    <Gauge value={50} primary="#2563eb" secondary="#ef4444" showValue />
    <Gauge value={50.8} primary="#2563eb" secondary="#ef4444" showValue />
    <Gauge value={51.6} primary="#2563eb" secondary="#ef4444" showValue />
  )
}`}
        component={
          <div className="flex items-center gap-8 lg:justify-center">
            <div
              className={`relative size-32 overflow-x-clip p-4 after:absolute after:left-0 after:top-[-25%] after:-ml-[0.5px] after:h-screen after:w-full after:translate-x-1/2 after:border-l-[1px] after:border-dashed after:border-gray-300 after:content-[""]`}
            >
              <Gauge size="100%" value={48.3} primary="#2563eb" secondary="#ef4444" showValue />
            </div>
            <div
              className={`relative size-32 overflow-x-clip rounded-lg border border-blue-200 bg-blue-50 p-4 after:absolute after:left-0 after:top-[-25%] after:-ml-[0.5px] after:h-screen after:w-full after:translate-x-1/2 after:border-l-[1px] after:border-dashed after:border-gray-300 after:content-[""]`}
            >
              <Gauge size="100%" value={49.3} primary="#2563eb" secondary="#ef4444" showValue />
            </div>
            <div
              className={`relative size-32 overflow-x-clip rounded-lg border border-blue-200 bg-blue-50 p-4 after:absolute after:left-0 after:top-[-25%] after:-ml-[0.5px] after:h-screen after:w-full after:translate-x-1/2 after:border-l-[1px] after:border-dashed after:border-gray-300 after:content-[""]`}
            >
              <Gauge size="100%" value={50} primary="#2563eb" secondary="#ef4444" showValue />
            </div>
            <div
              className={`relative size-32 overflow-x-clip rounded-lg border border-blue-200 bg-blue-50 p-4 after:absolute after:left-0 after:top-[-25%] after:-ml-[0.5px] after:h-screen after:w-full after:translate-x-1/2 after:border-l-[1px] after:border-dashed after:border-gray-300 after:content-[""]`}
            >
              <Gauge size="100%" value={50.8} primary="#2563eb" secondary="#ef4444" showValue />
            </div>
            <div
              className={`relative size-32 overflow-x-clip p-4 after:absolute after:left-0 after:top-[-25%] after:-ml-[0.5px] after:h-screen after:w-full after:translate-x-1/2 after:border-l-[1px] after:border-dashed after:border-gray-300 after:content-[""]`}
            >
              <Gauge size="100%" value={51.6} primary="#2563eb" secondary="#ef4444" showValue />
            </div>
          </div>
        }
      />
      <p className="subtitle mt-8">
        In the following example, the Gauge will loop through the values 42, 50, and 58 every 1.5 seconds to make it
        easier to visualize.
      </p>
      <Example />
    </>
  )
}

const Example = () => {
  const [gaugeValue, setGaugeValue] = useState(midValue)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    let value = midValue + gap
    let direction = 1

    const interval = setInterval(() => {
      setGaugeValue(value)
      if (!showAnimation) setShowAnimation(true)

      if (value === midValue + gap) {
        direction = -1
      } else if (value === midValue - gap) {
        direction = 1
      }

      value += direction * gap
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <CodeBlock
      // fileName="Demo"
      component={
        <Gauge
          value={gaugeValue}
          size="xl"
          primary="#2563eb"
          secondary="#ef4444"
          variant="ascending"
          showValue
          showAnimation={showAnimation}
        />
      }
      wrapperClassName="mt-4"
      componentWrapperClassName="flex items-center justify-center"
    />
  )
}
Example.displayName = 'Example'
