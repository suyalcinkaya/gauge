'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { highlight } from 'sugar-high'
import { LuCopy, LuCheck, LuChevronDown, LuChevronRight } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/scroll-area'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code?: string
  component?: React.ReactNode
  fileName?: string
  fileIcon?: React.ReactNode
  highlightedLinesNumbers?: (1 | 6 | 7 | 8)[]
  showLineNumbers?: boolean
  wrapperClassName?: string
  componentWrapperClassName?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code = '',
  component,
  fileName,
  fileIcon,
  highlightedLinesNumbers,
  showLineNumbers = true,
  wrapperClassName,
  componentWrapperClassName
}) => {
  const [isOpened, setIsOpened] = useState(false)
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
    return (
      <div className="group/code-block relative cursor-copy" onClick={onCopy}>
        <ScrollArea>
          <pre className={cn('px-4', showLineNumbers && 'show-line-numbers px-0')}>
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
        </ScrollArea>
        <Button
          variant="outline"
          className={cn(
            'invisible absolute right-4 top-4 z-10 size-8 p-0 opacity-0 transition-opacity group-hover/code-block:visible group-hover/code-block:opacity-100'
          )}
        >
          {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
        </Button>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-clip border', component ? 'rounded-xl' : 'rounded', wrapperClassName)}>
      {(fileIcon || fileName) && (
        <div
          className="flex items-center gap-2
         border-b bg-gray-50 px-4 py-3 text-sm text-gray-600"
        >
          <span>{fileIcon}</span>
          <span>{fileName}</span>
        </div>
      )}

      {component ? (
        <>
          <ScrollArea>
            <div className={cn('bg-white p-8', componentWrapperClassName)}>{component}</div>
          </ScrollArea>
          {code && (
            <div>
              <div
                className="flex cursor-pointer select-none items-center gap-2 bg-gray-50 px-4 py-3 text-sm text-gray-600"
                onClick={() => setIsOpened(!isOpened)}
              >
                {isOpened ? <LuChevronDown size={14} /> : <LuChevronRight size={14} />}
                {isOpened ? 'Hide code' : 'Show code'}
              </div>
              {isOpened && <Code />}
            </div>
          )}
        </>
      ) : (
        <>{code && <Code />}</>
      )}
    </div>
  )
}
