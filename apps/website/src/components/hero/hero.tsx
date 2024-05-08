import { Section, type SectionProps } from '@/components/section'
import { Introduction } from '@/components/hero/sections/introduction'
import { Installation } from '@/components/hero/sections/installation'
import { ReactServerComponents } from '@/components/hero/sections/react-server-components'
import { Default } from '@/components/hero/sections/default'
import { Label } from '@/components/hero/sections/label'
import { Variant } from '@/components/hero/sections/variant'
import { Animation } from '@/components/hero/sections/animation'
import { DefaultColorScale } from '@/components/hero/sections/default-color-scale'
import { CustomColorScale } from '@/components/hero/sections/custom-color-scale'
import { CustomSecondaryColor } from '@/components/hero/sections/custom-secondary-color'
import { ArcPriority } from '@/components/hero/sections/arc-priority'
import { Playground } from '@/components/hero/sections/playground'
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
    children: <ReactServerComponents />
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
