import { cn } from '@/lib/utils'

interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical' | 'both'
}

export const ScrollArea = ({ className, orientation = 'horizontal', ...props }: ScrollBarProps) => {
  return (
    <div
      className={cn(
        'flex size-full flex-col',
        orientation === 'horizontal' && 'overflow-x-auto overflow-y-hidden',
        orientation === 'vertical' && 'overflow-y-auto overflow-x-hidden',
        orientation === 'both' && 'overflow-auto'
      )}
    >
      <div
        className={cn(
          orientation === 'horizontal' && 'horizontal-scroll-area',
          orientation === 'vertical' && 'vertical-scroll-area',
          orientation === 'both' && 'horizontal-scroll-area vertical-scroll-area',
          className
        )}
        {...props}
      />
    </div>
  )
}
