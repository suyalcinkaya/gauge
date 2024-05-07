import { SparkleSvg, type Position } from '@/components/sparkle-svg'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  sparklePosition?: Position
  useDivider?: boolean
  className?: string
}

export const Section = ({ children, sparklePosition, useDivider = true, className, ...props }: SectionProps) => {
  return (
    <>
      <section className={cn('border-b p-4 sm:p-12', sparklePosition && 'relative', className)} {...props}>
        {sparklePosition && <SparkleSvg position={sparklePosition} />}
        {children}
      </section>
      {useDivider && <div className="h-4 border-b" />}
    </>
  )
}
