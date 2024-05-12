'use client'

import { useEffect, useState } from 'react'
import { LuPaintbrush } from 'react-icons/lu'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

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

interface ColorPickerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  onColorChange: (color: string) => void
  placeholder?: string
}

export function ColorPicker({
  value,
  onColorChange,
  placeholder = 'Pick a color',
  className,
  ...props
}: ColorPickerProps) {
  const [color, setColor] = useState(value)

  useEffect(() => {
    onColorChange(color)
  }, [color])

  return (
    <Popover>
      <PopoverTrigger asChild {...props}>
        <Button variant="outline" className={cn('w-[220px] justify-start px-3 py-2 text-left font-normal', className)}>
          <div className="flex w-full items-center gap-2">
            {color ? (
              <div
                className="size-4 rounded border !bg-cover !bg-center transition-colors duration-200"
                style={{ background: color }}
              />
            ) : (
              <LuPaintbrush className="size-4" />
            )}
            <div className="flex-1 truncate">{color ? color : placeholder}</div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="mt-0 flex flex-wrap gap-1">
          {[...solids, ...lightSolids].map((solidColor, solidColorIndex) => (
            <div
              key={`color-${solidColorIndex}`}
              style={{ background: solidColor }}
              className={cn(
                'size-6 cursor-pointer rounded-md transition-transform duration-200',
                solidColor === color && 'scale-105'
              )}
              onClick={() => setColor(solidColor)}
            />
          ))}
        </div>
        <Input
          id="custom"
          value={color}
          className="col-span-2 mt-4 h-8"
          onChange={(e) => setColor(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  )
}
