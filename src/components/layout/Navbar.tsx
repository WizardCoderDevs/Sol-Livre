'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { company, navigation } from '@/config/site'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between glass px-8 py-4 rounded-full">
        <Logo />

        <div className="hidden md:flex items-center gap-8">
          <NavLink href={navigation.solutions}>Soluções</NavLink>
          <NavLink href={navigation.roi}>ROI e Ativos</NavLink>
          <NavLink href={navigation.about}>Consultoria</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <Link
            href="/politica-de-privacidade"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
          >
            Privacidade
          </Link>
          <Link
            href="#cta"
            className="rounded-full bg-accent px-6 py-2 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95"
          >
            {navigation.ctaButton}
          </Link>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col gap-6 p-8 glass rounded-3xl md:hidden shadow-2xl"
        >
          <NavLink href={navigation.solutions} onClick={() => setIsOpen(false)}>Soluções</NavLink>
          <NavLink href={navigation.roi} onClick={() => setIsOpen(false)}>ROI e Ativos</NavLink>
          <NavLink href={navigation.about} onClick={() => setIsOpen(false)}>Consultoria</NavLink>
          <NavLink href="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink href="/politica-de-privacidade" onClick={() => setIsOpen(false)}>Privacidade</NavLink>
          <Link
            href="#cta"
            className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold text-background"
            onClick={() => setIsOpen(false)}
          >
            {navigation.ctaButton}
          </Link>
        </motion.div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
  >
    {children}
  </Link>
)
