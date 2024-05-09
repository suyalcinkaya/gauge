'use client'

import { useEffect, useState } from 'react'
import { Gauge } from '@suyalcinkaya/gauge'
import { toast } from 'sonner'
import { LuCopy, LuCheck } from 'react-icons/lu'

import { CodeBlock } from '@/components/code-block'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ColorPicker } from '@/components/ui/color-picker'

const initialGaugeConfig = {
  value: 72,
  size: '2xl',
  gapPercent: 5,
  strokeWidth: 10,
  showValue: true,
  showAnimation: true,
  primary: 'hsl(212 100% 48%)',
  secondary: 'hsl(0 0% 92%)',
  variant: 'ascending' as 'ascending' | 'descending'
}

export const Playground = () => {
  const [copied, setCopied] = useState(false)
  const [gaugeConfig, setGaugeConfig] = useState(initialGaugeConfig)
  const [primaryColor, setPrimaryColor] = useState(initialGaugeConfig.primary)
  const [secondaryColor, setSecondaryColor] = useState(initialGaugeConfig.secondary)

  useEffect(() => {
    setGaugeConfig((prev) => ({ ...prev, primary: primaryColor }))
  }, [primaryColor])

  useEffect(() => {
    setGaugeConfig((prev) => ({ ...prev, secondary: secondaryColor }))
  }, [secondaryColor])

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(
      `<Gauge value={${gaugeConfig.value}} ${typeof gaugeConfig.size === 'number' ? `size={${gaugeConfig.size}}` : `size="${gaugeConfig.size}"`} gapPercent={${gaugeConfig.gapPercent}} strokeWidth={${gaugeConfig.strokeWidth}} showValue={${gaugeConfig.showValue}} showAnimation={${gaugeConfig.showAnimation}} variant="${gaugeConfig.variant}" primary="${gaugeConfig.primary}" secondary="${gaugeConfig.secondary}" />`
    )

    toast.success('Copied', {
      onAutoClose: () => setCopied(false)
    })
  }

  return (
    <>
      <h2>Playground</h2>
      <p className="subtitle">Play with the configuration of the Gauge.</p>

      <div className="grid w-full gap-4 md:grid-cols-2">
        <div className="grid place-content-center rounded-xl border">
          <CodeBlock
            wrapperClassName="border-none"
            component={
              <div className="flex gap-8">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setGaugeConfig((prev) => {
                      return { ...prev, value: Math.random() * 100 }
                    })
                  }}
                >
                  <Gauge {...gaugeConfig} />
                </div>
              </div>
            }
          />
        </div>
        <div className="grid">
          <Card className="shadow-none">
            <CardHeader className="px-4 pb-0 pt-4 md:px-6 md:pt-6">
              <CardTitle>Gauge config</CardTitle>
              <CardDescription>Customize your Gauge.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col gap-4">
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="value">Value</Label>
                  <Input
                    id="value"
                    type="number"
                    value={gaugeConfig.value}
                    min={0}
                    max={100}
                    required
                    onChange={(e) => setGaugeConfig((prev) => ({ ...prev, value: +e.target.value }))}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="size">Size</Label>
                  <Select
                    value={typeof gaugeConfig.size === 'string' ? String(gaugeConfig.size) : ''}
                    onValueChange={(value) => {
                      if (typeof value === 'string') {
                        setGaugeConfig((prev) => ({ ...prev, size: value }))
                      }
                    }}
                  >
                    <SelectTrigger id="size" className="w-full md:w-[180px]">
                      <SelectValue placeholder="Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="select-none">Sizes</SelectLabel>
                        <SelectItem value="xs">xs</SelectItem>
                        <SelectItem value="sm">sm</SelectItem>
                        <SelectItem value="md">md</SelectItem>
                        <SelectItem value="lg">lg</SelectItem>
                        <SelectItem value="xl">xl</SelectItem>
                        <SelectItem value="2xl">2xl</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="custom-size">Custom size</Label>
                  <Input
                    id="custom-size"
                    type="number"
                    placeholder="Custom size"
                    value={typeof gaugeConfig.size === 'number' ? gaugeConfig.size : ''}
                    min={0}
                    max={300}
                    onChange={(e) => {
                      if (typeof Number(e.target.value) === 'number') {
                        setGaugeConfig((prev) => ({ ...prev, size: +e.target.value as any }))
                      }
                    }}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="gap-percent">Gap percent</Label>
                  <Input
                    id="gap-percent"
                    type="number"
                    value={gaugeConfig.gapPercent}
                    onChange={(e) => setGaugeConfig((prev) => ({ ...prev, gapPercent: +e.target.value }))}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="stroke-width">Stroke width</Label>
                  <Input
                    id="stroke-width"
                    type="number"
                    value={gaugeConfig.strokeWidth}
                    onChange={(e) => setGaugeConfig((prev) => ({ ...prev, strokeWidth: +e.target.value }))}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="variant">Variant</Label>
                  <Select
                    defaultValue={gaugeConfig.variant}
                    value={gaugeConfig.variant}
                    onValueChange={(value) => setGaugeConfig((prev) => ({ ...prev, variant: value as any }))}
                  >
                    <SelectTrigger id="variant" className="w-full md:w-[180px]">
                      <SelectValue placeholder="Variant" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="select-none">Variants</SelectLabel>
                        <SelectItem value="ascending">Ascending</SelectItem>
                        <SelectItem value="descending">Descending</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="primary">Primary</Label>
                  <ColorPicker
                    id="primary"
                    background={primaryColor}
                    setBackground={setPrimaryColor}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid items-center gap-2 md:grid-cols-3 md:gap-4">
                  <Label htmlFor="secondary">Secondary</Label>
                  <ColorPicker
                    id="secondary"
                    background={secondaryColor}
                    setBackground={setSecondaryColor}
                    className="w-full md:w-[180px]"
                  />
                </div>
                <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3">
                  <Label htmlFor="showValue">Show value</Label>
                  <Switch
                    id="showValue"
                    defaultChecked={gaugeConfig.showValue}
                    checked={gaugeConfig.showValue}
                    onCheckedChange={(checked) => setGaugeConfig((prev) => ({ ...prev, showValue: checked }))}
                    className="justify-self-end md:justify-self-auto"
                  >
                    Show Value
                  </Switch>
                </div>
                <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3">
                  <Label htmlFor="showAnimation">Show animation</Label>
                  <Switch
                    id="showAnimation"
                    defaultChecked={gaugeConfig.showAnimation}
                    checked={gaugeConfig.showAnimation}
                    onCheckedChange={(checked) => setGaugeConfig((prev) => ({ ...prev, showAnimation: checked }))}
                    className="justify-self-end md:justify-self-auto"
                  >
                    Show Animation
                  </Switch>
                </div>
              </div>
            </CardContent>
            <CardFooter className="px-4 pb-4 md:px-6 md:pb-6">
              <Button onClick={onCopy} disabled={copied} className="flex w-full items-center gap-1.5">
                {copied ? <LuCheck size={14} /> : <LuCopy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}
