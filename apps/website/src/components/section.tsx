import { SparkleSvg, type Position } from '@/components/sparkle-svg'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  sparklePositions?: Position[]
  useTopDivider?: boolean
  useBottomDivider?: boolean
  className?: string
}

export const Section = ({
  children,
  sparklePositions = [],
  useTopDivider = false,
  useBottomDivider = true,
  className,
  ...props
}: SectionProps) => {
  return (
    <>
      {useTopDivider && <div className="h-4 border-b" />}
      <section className={cn('border-b p-4 sm:p-12', sparklePositions.length > 0 && 'relative', className)} {...props}>
        {children}
        {sparklePositions.length > 0 &&
          sparklePositions.map((sparklePosition, index) => {
            return <SparkleSvg key={`sparkle_${index}`} position={sparklePosition} />
          })}
      </section>
      {useBottomDivider && <div className="h-4 border-b" />}
    </>
  )
}
