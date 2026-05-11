'use client'

import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'

export const CTA = () => {
  return (
    <section id="cta" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl glass rounded-3xl md:rounded-[4rem] px-6 md:px-12 py-16 md:py-24 text-center">
        <h2 className="font-display text-fluid-h2 font-bold mb-8">
          Pronto para sua <br />
          <span className="text-accent">Autonomia Energética?</span>
        </h2>
        <p className="text-foreground/80 text-fluid-body max-w-xl mx-auto mb-12">
          Agende um diagnóstico consultivo e descubra como transformar sua propriedade rural, residencial ou comercial no seu melhor ativo.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button className="w-full md:w-auto rounded-full bg-accent px-10 py-5 text-sm font-bold text-background transition-transform hover:scale-105">
            Solicitar Orçamento Estratégico
          </button>
          <button className="w-full md:w-auto rounded-full border border-foreground/10 px-10 py-5 text-sm font-bold text-foreground transition-all hover:bg-black/5">
            Agendar Reunião Técnica
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-surface-border text-left">
          <div className="md:col-span-1">
             <div className="font-display text-xl font-bold mb-6 tracking-widest text-accent">SOL LIVRE</div>
             <p className="text-foreground/60 text-fluid-small">Consultoria de Inteligência Energética. Especialistas em sistemas híbridos e ativos financeiros solares.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Contato</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
               <a href="https://wa.me/551220180698" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4" /> (12) 2018-0698</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Links</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
               <a href="#solutions" className="hover:text-accent transition-colors">Soluções</a>
               <a href="#roi" className="hover:text-accent transition-colors">Rentabilidade</a>
               <a href="#" className="hover:text-accent transition-colors">Portfólio</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Social</h4>
            <div className="flex gap-4">
                <a href="https://www.instagram.com/sollivre.eco.br/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaInstagram className="w-4 h-4" /></a>
                <a href="https://www.linkedin.com/company/sollivre/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaLinkedin className="w-4 h-4" /></a>
                <a href="https://www.facebook.com/sollivre.eco.br/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaFacebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-surface-border text-center text-fluid-small text-foreground/50">
          © 2026 Sol Livre Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </section>
  )
}
