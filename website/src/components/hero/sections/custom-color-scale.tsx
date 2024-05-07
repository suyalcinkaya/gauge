'use client'

import { Gauge } from '@suyalcinkaya/gauge'

import { CodeBlock } from '@/components/code-block'

export const CustomColorScale = () => {
  const primary = {
    '0': '#eff6ff',
    '10': '#dbeafe',
    '20': '#bfdbfe',
    '30': '#93c5fd',
    '40': '#60a5fa',
    '50': '#3b82f6',
    '60': '#2563eb',
    '70': '#1d4ed8',
    '80': '#1e40af',
    '90': '#1e3a8a',
    '100': '#172554'
  }

  return (
    <>
      <h2>Custom color scale</h2>
      <CodeBlock
        code={`import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  const primary = {
    '0': '#eff6ff',
    '10': '#dbeafe',
    '20': '#bfdbfe',
    '30': '#93c5fd',
    '40': '#60a5fa',
    '50': '#3b82f6',
    '60': '#2563eb',
    '70': '#1d4ed8',
    '80': '#1e40af',
    '90': '#1e3a8a',
    '100': '#172554'
  }

  return (
    <div className="flex items-center gap-4">
      <Gauge value={5} size="sm" primary={primary} />
      <Gauge value={15} size="sm" primary={primary} />
      <Gauge value={25} size="sm" primary={primary} />
      <Gauge value={35} size="sm" primary={primary} />
      <Gauge value={45} size="sm" primary={primary} />
      <Gauge value={55} size="sm" primary={primary} />
      <Gauge value={65} size="sm" primary={primary} />
      <Gauge value={75} size="sm" primary={primary} />
      <Gauge value={85} size="sm" primary={primary} />
      <Gauge value={95} size="sm" primary={primary} />
      <Gauge value={100} size="sm" primary={primary} />
    </div>
  )
}`}
        component={
          <div className="flex items-center gap-4">
            <Gauge value={5} size="sm" primary={primary} />
            <Gauge value={15} size="sm" primary={primary} />
            <Gauge value={25} size="sm" primary={primary} />
            <Gauge value={35} size="sm" primary={primary} />
            <Gauge value={45} size="sm" primary={primary} />
            <Gauge value={55} size="sm" primary={primary} />
            <Gauge value={65} size="sm" primary={primary} />
            <Gauge value={75} size="sm" primary={primary} />
            <Gauge value={85} size="sm" primary={primary} />
            <Gauge value={95} size="sm" primary={primary} />
            <Gauge value={100} size="sm" primary={primary} />
          </div>
        }
      />
    </>
  )
}
