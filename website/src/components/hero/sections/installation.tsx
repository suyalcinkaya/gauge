import { Snippet } from '@/components/snippet'

export const Installation = () => {
  return (
    <>
      <h2>Installation</h2>
      <div className="flex flex-col gap-4">
        <Snippet code="npm install @suyalcinkaya/gauge" />
        <Snippet code="yarn add @suyalcinkaya/gauge" />
        <Snippet code="pnpm install @suyalcinkaya/gauge" />
        <Snippet code="bun add @suyalcinkaya/gauge" />
      </div>
    </>
  )
}
