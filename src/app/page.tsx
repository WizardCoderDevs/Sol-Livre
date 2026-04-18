import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/sections/Hero'
import { ValueProps } from '@/components/sections/ValueProps'
import { Solutions } from '@/components/sections/Solutions'
import { Trust } from '@/components/sections/Trust'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <ValueProps />
      <Solutions />
      <CTA />
    </main>
  )
}
