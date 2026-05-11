'use client'

import { Footer } from '@/components/layout/Footer'
import { cta, copyright } from '@/config/site'

export const CTA = () => {
  return (
    <section id="cta" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl glass rounded-3xl md:rounded-[4rem] px-6 md:px-12 py-16 md:py-24 text-center">
        <h2 className="font-display text-fluid-h2 font-bold mb-8">
          {cta.title.split('Autonomia')[0]}<br />
          <span className="text-accent">Autonomia Energética?</span>
        </h2>
        <p className="text-foreground/80 text-fluid-body max-w-xl mx-auto mb-12">
          {cta.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button className="w-full md:w-auto rounded-full bg-accent px-10 py-5 text-sm font-bold text-background transition-transform hover:scale-105">
            {cta.primaryButton}
          </button>
          <button className="w-full md:w-auto rounded-full border border-foreground/10 px-10 py-5 text-sm font-bold text-foreground transition-all hover:bg-black/5">
            {cta.secondaryButton}
          </button>
        </div>

        <Footer />
        
        <div className="mt-20 pt-8 border-t border-surface-border text-center text-fluid-small text-foreground/50">
          © {copyright.year} {copyright.name}. Todos os direitos reservados.
        </div>
      </div>
    </section>
  )
}
