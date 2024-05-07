'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { CopyIcon, CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
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
        <ScrollArea className="whitespace-nowrap">
          <pre className='px-4 py-3 !text-xs before:select-none before:text-gray-500 before:content-["▲_~_"] sm:!text-sm'>
            {code}
          </pre>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <Button variant="ghost" size="icon" className="ml-2 size-7 shrink-0">
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
        </Button>
      </div>
    </div>
  )
}
