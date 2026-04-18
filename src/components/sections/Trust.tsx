'use client'

import { motion } from 'framer-motion'

export const Trust = () => {
  return (
    <section className="py-20 border-y border-surface-border bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:max-w-xs text-center md:text-left">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-accent mb-2">Curadoria Independente</h3>
            <p className="text-foreground/70 text-xs">Apenas tecnologias líderes globais Tier 1.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <Brand name="TRINA SOLAR" />
             <Brand name="SOLIS" />
             <Brand name="DEYE" />
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
