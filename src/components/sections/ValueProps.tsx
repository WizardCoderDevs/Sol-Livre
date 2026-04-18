'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Home, ArrowRight } from 'lucide-react'

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
  return (
    <section id="roi" className="py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Energia como <span className="text-accent">Inteligência Estratégica</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              Deixamos para trás a era da simples &quot;economia na conta&quot;. Na Sol Livre, focamos em pilares que blindam seu patrimônio e garantem sua independência.
            </p>
          </div>
          <button className="flex items-center gap-2 text-accent font-bold group">
            Ver metodologia <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 glass rounded-3xl group hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-colors text-accent">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
