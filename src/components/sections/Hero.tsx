'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import heroImg from '../../app/hero.png'

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Luxury Solar Residence"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-6 inline-block glass px-4 py-1.5 rounded-full"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-accent">
            Consultoria de Inteligência Energética
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-5xl md:text-8xl font-bold leading-tight mb-8"
        >
          Sua energia, <br />
          <span className="text-gradient">suas regras.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/70 mb-12"
        >
          Projetamos sua autonomia energética. No mercado de elite, o sol não é apenas economia; é um ativo estratégico de valorização patrimonial e independência total.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="rounded-full bg-accent px-10 py-4 text-sm font-bold text-background transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95">
            Iniciar Consultoria
          </button>
          <button className="rounded-full glass px-10 py-4 text-sm font-bold text-foreground transition-all hover:bg-white/10">
            Conhecer Soluções
          </button>
        </motion.div>
      </div>

      {/* Decorative Floating Element */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}
