import { Hero } from '@/components/hero/hero'
import { Toaster } from '@/components/ui/sonner'

export default function Home() {
  return (
    <>
      <Hero />
      <Toaster
        toastOptions={{
          duration: 1500
        }}
      />
    </>
  )
}
