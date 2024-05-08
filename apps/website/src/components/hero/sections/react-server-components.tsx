import { CodeBlock } from '@/components/code-block'
import { Button } from '@/components/ui/button'

export const ReactServerComponents = () => {
  return (
    <>
      <h2>React Server Components</h2>
      <p className="subtitle">
        Gauge depends on state and effects (for now). So, if you are using server components, you need to add the&nbsp;
        <Button variant="link" size="link" asChild>
          <a href="https://react.dev/reference/rsc/use-client" target="_blank" rel="noopener noreferrer">
            React <code className="inline-code">'use client'</code> directive
          </a>
        </Button>
        &nbsp;at the top of a file, above your imports.
      </p>
      <CodeBlock
        highlightedLinesNumbers={[1]}
        fileName="Component.tsx"
        wrapperClassName="rounded-xl"
        code={`'use client'
            
import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return (
    <Gauge value={23} />
  )
}`}
      />
    </>
  )
}