'use client'

import { useState } from 'react'
import { highlight } from 'sugar-high'
import { toast } from 'sonner'
import { CopyIcon, CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SnippetProps {
  code: string
  preClassName?: string
  wrapperClassName?: string
}

export const Snippet: React.FC<SnippetProps> = ({ code, preClassName, wrapperClassName }) => {
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

  return (
    <div
      className={cn('flex cursor-copy items-center justify-between overflow-hidden rounded border', wrapperClassName)}
      onClick={onCopy}
    >
      <div className="flex w-full items-center justify-between overflow-x-auto overflow-y-hidden pr-2">
        <pre className={cn('px-4 py-3 before:select-none before:text-gray-500 before:content-["▲_~_"]', preClassName)}>
          <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
        </pre>
        <Button variant="ghost" size="icon" className="size-7">
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        </Button>
      </div>
    </div>
  )
}
