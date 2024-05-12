'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { LuCopy, LuCheck } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/scroll-area'
import { cn } from '@/lib/utils'

interface SnippetProps {
  code: string
  wrapperClassName?: string
}

export const Snippet: React.FC<SnippetProps> = ({ code, wrapperClassName }) => {
  const [copied, setCopied] = useState(false)

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
      <div className="flex w-full items-center justify-between overflow-hidden pr-2">
        <ScrollArea>
          <pre className='px-4 py-3 before:select-none before:content-["▲_~_"]'>{code}</pre>
        </ScrollArea>
        <Button variant="ghost" size="icon" className="ml-2 size-7 shrink-0">
          {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
        </Button>
      </div>
    </div>
  )
}
