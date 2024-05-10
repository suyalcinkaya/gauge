import { Section, type SectionProps } from '@/components/section'
import { ApiIntroduction } from '@/components/sections/api/api-introduction'
import { ApiTable } from '@/components/sections/api/api-table'
import { ReactServerComponent } from '@/components/sections/api/react-server-component'

const sections: SectionProps[] = [
  {
    children: <ApiIntroduction />,
    sparklePositions: ['top-left']
  },
  {
    children: <ApiTable />,
    sparklePositions: ['bottom-right']
  },
  {
    children: <ReactServerComponent />
  }
]

export const ApiHero = () => {
  return (
    <div className="flex flex-col">
      {sections.map((section, sectionIndex) => (
        <Section key={`section_${sectionIndex}`} {...section} />
      ))}
    </div>
  )
}
