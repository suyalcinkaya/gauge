import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const apiDocumentations = [
  {
    property: 'value',
    description: 'The value of the Gauge. It should be a number between 0 and 100.',
    defaultValue: null
  },
  {
    property: 'size',
    description: (
      <>
        Width and height of the Gauge. It can be one of the following sizes: <code className="inline-code">xs</code>,
        <code className="inline-code">sm</code>, <code className="inline-code">md</code>,{' '}
        <code className="inline-code">lg</code>, <code className="inline-code">xl</code>,{' '}
        <code className="inline-code">2xl</code>, or a numeric value as <code className="inline-code">number</code> or{' '}
        <code className="inline-code">string</code>.
      </>
    ),
    defaultValue: <code className="inline-code">md</code>
  },
  {
    property: 'gapPercent',
    description: 'Percentage of the total circumference that represents a gap between primary and secondary arcs.',
    defaultValue: <code className="inline-code">5</code>
  },
  {
    property: 'strokeWidth',
    description: 'Stroke width of the Gauge.',
    defaultValue: <code className="inline-code">10</code>
  },
  {
    property: 'variant',
    description: "Direction of the Gauge's animation.",
    defaultValue: <code className="inline-code">ascending</code>
  },
  {
    property: 'showValue',
    description: 'Option to display the numeric value inside the Gauge.',
    defaultValue: <code className="inline-code">false</code>
  },
  {
    property: 'showAnimation',
    description: "Option to animate the Gauge's progress.",
    defaultValue: <code className="inline-code">false</code>
  },
  {
    property: 'primary',
    description: (
      <p>
        Primary color or set of colors for the Gauge, with optional threshold values to determine color changes. Default
        primary color scale goes as red (0-25) {` ->`} amber (26-50) {` ->`} blue (51-75) {` ->`} green (76-100).
      </p>
    ),
    defaultValue: (
      <div className="flex items-end justify-end gap-4 lg:items-center">
        <span className="inline-flex size-4 shrink-0 rounded" style={{ background: 'hsl(358 75% 59%)' }} />
        <span className="inline-flex size-4 shrink-0 rounded" style={{ background: 'hsl(39 100% 57%)' }} />
        <span className="inline-flex size-4 shrink-0 rounded" style={{ background: 'hsl(212 100% 48%)' }} />
        <span className="inline-flex size-4 shrink-0 rounded" style={{ background: 'hsl(131 41% 46%)' }} />
      </div>
    )
  },
  {
    property: 'secondary',
    description: (
      <p>
        Secondary color or set of colors for the Gauge, similar to <code className="inline-code">primary</code>. Default
        secondary color is gray.
      </p>
    ),
    defaultValue: (
      <div className="mt-4 flex items-center justify-end gap-4">
        <span className="inline-flex size-4 shrink-0 rounded" style={{ background: 'hsl(0 0% 92%)' }} />
      </div>
    )
  },
  {
    property: 'props',
    description: 'Any other prop accepted by a React SVG element.',
    defaultValue: null
  }
]

export const ApiTable = () => {
  return (
    <>
      <p className="subtitle">
        The Gauge component only requires the <code className="inline-code">value</code> prop and supports many props to
        customize it according to your needs.
      </p>
      <div className="flex flex-col gap-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-4">Property</TableHead>
              <TableHead className="p-4">Description</TableHead>
              <TableHead className="p-4 text-right">Default</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiDocumentations.map((apiDocumentation, index) => (
              <TableRow key={`apiDocumentation_${index}`}>
                <TableCell className="p-4">{apiDocumentation.property}</TableCell>
                <TableCell className="min-w-[400px] p-4 md:min-w-min">{apiDocumentation.description}</TableCell>
                <TableCell className="min-w-[150px] p-4 text-right md:min-w-min">
                  {apiDocumentation.defaultValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
