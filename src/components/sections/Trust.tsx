'use client'

import { motion } from 'framer-motion'
import { trust } from '@/config/site'

export const Trust = () => {
  return (
    <section className="py-20 border-y border-surface-border bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:max-w-xs text-center md:text-left">
            <h3 className="text-fluid-small uppercase font-bold tracking-[0.3em] text-accent mb-2">{trust.title}</h3>
            <p className="text-foreground/70 text-fluid-small">{trust.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {trust.brands.map((brand) => (
               <Brand key={brand} name={brand} />
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Brand = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2">
    <span className="font-display font-black text-2xl md:text-4xl tracking-tighter">{name}</span>
  </div>
)
