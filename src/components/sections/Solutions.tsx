'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const solutions = [
  {
    title: 'Residencial de Elite',
    focus: 'Conforto e Autonomia',
    description: 'Projetamos sistemas que se integram à sua arquitetura, garantindo energia pura para toda sua tecnologia residencial.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Comercial & Industrial',
    focus: 'ROI e Gestão de Ativos',
    description: 'Elimine a volatilidade da inflação energética no seu balanço e valorize o patrimônio líquido da sua empresa.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Agronegócio de Precisão',
    focus: 'Segurança Operacional',
    description: 'Autonomia total para operações críticas no campo, garantindo rentabilidade e proteção contra falhas de rede.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
  },
]

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-surface/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-fluid-h2 font-bold mb-6">Soluções Customizadas</h2>
          <p className="text-foreground/80 text-fluid-body max-w-2xl mx-auto">
            Abordagens específicas para necessidades de alta complexidade técnica e financeira.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl group shadow-sm"
            >
              <Image 
                src={sol.image} 
                alt={sol.title} 
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
              
              <div className="absolute top-0 p-6 lg:p-8 w-full">
                <span className="text-accent text-fluid-small uppercase tracking-[0.2em] font-bold block mb-2">{sol.focus}</span>
                <h3 className="font-display text-fluid-h3 font-bold mb-4">{sol.title}</h3>
                <p className="text-foreground/85 text-fluid-body leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sol.description}
                </p>
              </div>

              <div className="absolute bottom-0 p-6 lg:p-8 w-full">
                <button className="text-foreground text-fluid-small font-bold border-b border-accent pb-1 transition-colors hover:text-accent">Saber mais</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
