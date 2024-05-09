'use client'

import { LuPaintbrush } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function ColorPicker({
  id,
  background,
  setBackground,
  placeholder = 'Pick a color',
  className
}: {
  id?: string
  background: string
  setBackground: (background: string) => void
  placeholder?: string
  className?: string
}) {
  const solids = [
    '#000000', // black
    '#ef4444', // red
    '#f97316', // orange
    '#fde047', // yellow
    '#16a34a', // green
    '#2563eb', // blue
    '#a855f7', // purple
    '#ec4899' // pink
  ]

  const lightSolids = [
    '#e5e7eb', // black
    '#fecaca', // red
    '#ffedd5', // orange
    '#fef9c3', // yellow
    '#bbf7d0', // green
    '#bfdbfe', // blue
    '#e9d5ff', // purple
    '#fbcfe8' // pink
  ]

  return (
    <Popover>
      <PopoverTrigger asChild id={id}>
        <Button variant="outline" className={cn('w-[220px] justify-start text-left font-normal', className)}>
          <div className="flex w-full items-center gap-2">
            {background ? (
              <div
                className="size-4 rounded !bg-cover !bg-center transition-colors duration-200"
                style={{ background }}
              />
            ) : (
              <LuPaintbrush className="size-4" />
            )}
            <div className="flex-1 truncate">{background ? background : placeholder}</div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="mt-0 flex flex-wrap gap-1">
          {[...solids, ...lightSolids].map((color, colorIndex) => (
            <div
              key={`color-${colorIndex}`}
              style={{ background: color }}
              className={cn(
                'size-6 cursor-pointer rounded-md transition-transform duration-200',
                color === background && 'scale-105'
              )}
              onClick={() => setBackground(color)}
            />
          ))}
        </div>
        <Input
          id="custom"
          value={background}
          className="col-span-2 mt-4 h-8"
          onChange={(e) => setBackground(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  )
}
