'use client'

import { Phone } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { company, contact, social, navigation, copyright } from '@/config/site'

export const Footer = () => {
  return (
    <footer className="border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="md:col-span-1">
            <div className="font-display text-xl font-bold mb-6 tracking-widest text-accent">{company.name}</div>
            <p className="text-foreground/60 text-fluid-small">{company.tagline}</p>
          </div>

          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Contato</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href={contact.phoneLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><Phone className="w-4 h-4" /> {contact.phone}</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Links</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href={navigation.solutions} className="hover:text-accent transition-colors">Soluções</a>
              <a href={navigation.roi} className="hover:text-accent transition-colors">Rentabilidade</a>
              <a href={navigation.portfolio} className="hover:text-accent transition-colors">Portfólio</a>
              <a href="/inteligencia-energetica" className="hover:text-accent transition-colors">Assinatura Solar</a>
              <a href="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-fluid-small uppercase tracking-widest text-foreground/60 mb-6">Social</h4>
            <div className="flex gap-4">
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaInstagram className="w-4 h-4" /></a>
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaLinkedin className="w-4 h-4" /></a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-white/10 transition-colors"><FaFacebook className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}