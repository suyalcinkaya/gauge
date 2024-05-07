'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { highlight } from 'sugar-high'
import { CopyIcon, CheckIcon, ChevronDownIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code?: string
  component?: React.ReactNode
  fileName?: string
  highlightedLinesNumbers?: (1 | 6 | 7 | 8)[]
  showLineNumbers?: boolean
  preClassName?: string
  wrapperClassName?: string
  componentWrapperClassName?: string
  showCode?: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = '',
  component,
  fileName,
  highlightedLinesNumbers,
  showLineNumbers = true,
  preClassName,
  wrapperClassName,
  componentWrapperClassName,
  showCode = false
}) => {
  const [isOpened, setIsOpened] = useState(showCode)
  const [copied, setCopied] = useState(false)
  const codeHTML = highlight(code)

  const onCopy = () => {
    if (code) {
      setCopied(true)
      navigator.clipboard.writeText(code)

      toast.success('Copied', {
        onAutoClose: () => setCopied(false)
      })
    }
  }

  const Code = () => {
    if (!codeHTML) return null

    return (
      <div className="group/code-block relative isolate cursor-copy overflow-x-auto overflow-y-hidden" onClick={onCopy}>
        <pre className={cn(showLineNumbers ? 'show-line-numbers' : 'pl-4', preClassName)}>
          <code
            className={cn(
              highlightedLinesNumbers?.includes(1) &&
                '[&>:nth-child(1)]:bg-blue-100 [&>:nth-child(1)]:after:absolute [&>:nth-child(1)]:after:inset-y-0 [&>:nth-child(1)]:after:left-0 [&>:nth-child(1)]:after:w-[2px] [&>:nth-child(1)]:after:bg-blue-500 [&>:nth-child(1)]:after:content-[""]',
              highlightedLinesNumbers?.includes(6) &&
                '[&>:nth-child(6)]:bg-blue-100 [&>:nth-child(6)]:after:absolute [&>:nth-child(6)]:after:inset-y-0 [&>:nth-child(6)]:after:left-0 [&>:nth-child(6)]:after:w-[2px] [&>:nth-child(6)]:after:bg-blue-500 [&>:nth-child(6)]:after:content-[""]',
              highlightedLinesNumbers?.includes(7) &&
                '[&>:nth-child(7)]:bg-blue-100 [&>:nth-child(7)]:after:absolute [&>:nth-child(7)]:after:inset-y-0 [&>:nth-child(7)]:after:left-0 [&>:nth-child(7)]:after:w-[2px] [&>:nth-child(7)]:after:bg-blue-500 [&>:nth-child(7)]:after:content-[""]',
              highlightedLinesNumbers?.includes(8) &&
                '[&>:nth-child(8)]:bg-blue-100 [&>:nth-child(8)]:after:absolute [&>:nth-child(8)]:after:inset-y-0 [&>:nth-child(8)]:after:left-0 [&>:nth-child(8)]:after:w-[2px] [&>:nth-child(8)]:after:bg-blue-500 [&>:nth-child(8)]:after:content-[""]'
            )}
            dangerouslySetInnerHTML={{ __html: codeHTML }}
          />
        </pre>
        <Button
          variant="outline"
          className={cn(
            'invisible absolute right-4 top-4 z-10 size-8 p-0 opacity-0 transition-opacity group-hover/code-block:visible group-hover/code-block:opacity-100'
          )}
        >
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-clip border', component ? 'rounded-xl' : 'rounded', wrapperClassName)}>
      {fileName && <div className="border-b bg-gray-50 px-4 py-3 text-sm text-gray-600">{fileName}</div>}
      {component ? (
        <>
          <div className={cn('overflow-x-auto overflow-y-hidden bg-white p-8', componentWrapperClassName)}>
            <div className="min-w-max">{component}</div>
          </div>
          {code && (
            <details open={isOpened} onToggle={(e) => setIsOpened(e.currentTarget.open)}>
              <summary
                data-open="Hide code"
                data-close="Show code"
                className="flex cursor-pointer select-none items-center gap-2 bg-gray-50 px-4 py-3 text-sm"
              >
                {isOpened ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
                {isOpened ? 'Hide code' : 'Show code'}
              </summary>
              <Code />
            </details>
          )}
        </>
      ) : (
        <>{code && <Code />}</>
      )}
    </div>
  )
}
