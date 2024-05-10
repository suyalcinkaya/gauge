import { FaReact } from 'react-icons/fa6'

import { CodeBlock } from '@/components/code-block'
import { Button } from '@/components/ui/button'

export const ReactServerComponent = () => {
  return (
    <>
      <h2>React Server Component?</h2>
      <p className="subtitle">
        Not yet. Gauge depends on state and effects (for now). So, if you are using server components, you need to add
        the <code className="inline-code">'use client'</code>{' '}
        <Button variant="link" size="link" asChild>
          <a href="https://react.dev/reference/rsc/use-client" target="_blank" rel="noopener noreferrer">
            React directive
          </a>
        </Button>{' '}
        at the top of a file, above your imports.
      </p>
      <div className="flex flex-col gap-4">
        <CodeBlock
          highlightedLinesNumbers={[1]}
          fileName="src/components/component.tsx"
          fileIcon={<FaReact />}
          wrapperClassName="rounded-xl"
          code={`'use client'
            
import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <Gauge value={23} />
  )
}`}
        />

        <CodeBlock
          highlightedLinesNumbers={[1]}
          fileName="src/app/page.tsx"
          fileIcon={<FaReact />}
          wrapperClassName="rounded-xl"
          code={`import { Component } from 'src/components/component'

export default function Home(): JSX.Element {
  return (
    <Component />
  )
}`}
        />
      </div>
    </>
  )
}
