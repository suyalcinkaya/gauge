import { Section, type SectionProps } from '@/components/section'
import { Introduction } from '@/components/sections/home/introduction'
import { Installation } from '@/components/sections/home/installation'
import { Default } from '@/components/sections/home/default'
import { Label } from '@/components/sections/home/label'
import { Variant } from '@/components/sections/home/variant'
import { Animation } from '@/components/sections/home/animation'
import { DefaultColorScale } from '@/components/sections/home/default-color-scale'
import { CustomColorScale } from '@/components/sections/home/custom-color-scale'
import { CustomSecondaryColor } from '@/components/sections/home/custom-secondary-color'
import { ArcPriority } from '@/components/sections/home/arc-priority'
import { Playground } from '@/components/sections/home/playground'
import { playgroundSectionId } from '@/lib/constants'

const sections: SectionProps[] = [
  {
    children: <Introduction />,
    sparklePositions: ['top-left']
  },
  {
    children: <Installation />
  },
  {
    children: <Default />
  },
  {
    children: <Label />
  },
  {
    children: <Variant />
  },
  {
    children: <Animation />,
    sparklePositions: ['top-right']
  },
  {
    children: <DefaultColorScale />,
    sparklePositions: ['top-left']
  },
  {
    children: <CustomColorScale />
  },
  {
    children: <CustomSecondaryColor />
  },
  {
    children: <ArcPriority />,
    sparklePositions: ['bottom-left']
  },
  {
    id: playgroundSectionId,
    children: <Playground />,
    useBottomDivider: false,
    sparklePositions: ['bottom-right']
  }
]

export const Hero = () => {
  return (
    <div className="flex flex-col">
      {sections.map((section, sectionIndex) => (
        <Section key={`section_${sectionIndex}`} {...section} />
      ))}
    </div>
  )
}
