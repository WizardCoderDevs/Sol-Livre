'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, TrendingUp, Home, ArrowRight, ChevronDown } from 'lucide-react'

const features = [
  {
    title: 'Autonomia Total',
    description: 'Sistemas híbridos e armazenamento de última geração para garantir que sua vida nunca pare por falhas na rede externa.',
    icon: Shield,
  },
  {
    title: 'Valorização de Ativo',
    description: 'Um sistema Sol Livre não é apenas tecnologia; é um investimento que eleva o valor de mercado do seu imóvel em até 10%.',
    icon: Home,
  },
  {
    title: 'ROI Inteligente',
    description: 'Consultoria financeira estratégica para transformar despesas operacionais em lucros e ativos fixos de longo prazo.',
    icon: TrendingUp,
  },
]

export const ValueProps = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <section id="roi" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-fluid-h2 font-bold mb-6">
              Energia como <span className="text-accent">Inteligência Estratégica</span>
            </h2>
            <p className="text-foreground/90 text-fluid-body">
              Deixamos para trás a era da simples &quot;economia na conta&quot;. Na Sol Livre, focamos em pilares que blindam seu patrimônio e garantem sua independência.
            </p>
          </div>
          <button className="flex items-center gap-2 text-accent font-bold group">
            Ver metodologia <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-6 md:p-8 glass rounded-3xl group hover:border-accent/30 transition-colors shadow-sm cursor-pointer"
              onClick={() => toggleExpand(idx)}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <button className="md:hidden text-accent p-2">
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedIndex === idx ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <h3 className="font-display text-fluid-h3 font-bold mb-4">{feature.title}</h3>
              <div className={`text-foreground/80 text-fluid-body leading-relaxed ${expandedIndex === idx || 'md:block hidden'}`}>
                {feature.description}
              </div>
              <button className="md:hidden mt-4 text-sm font-bold text-accent flex items-center gap-1">
                {expandedIndex === idx ? 'Ver menos' : 'Saiba mais'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}