'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between glass px-8 py-4 rounded-full">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-accent rounded-full blur-[8px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="h-4 w-4 rounded-full border-2 border-accent" />
          </div>
          <span className="font-display text-xl font-bold tracking-[0.2em] text-foreground">
            SOL <span className="text-accent">LIVRE</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#solutions">Soluções</NavLink>
          <NavLink href="#roi">ROI e Ativos</NavLink>
          <NavLink href="#about">Consultoria</NavLink>
          <Link
            href="#cta"
            className="rounded-full bg-accent px-6 py-2 text-sm font-bold text-background transition-transform hover:scale-105 active:scale-95"
          >
            Falar com Consultor
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col gap-6 p-8 glass rounded-3xl md:hidden shadow-2xl"
        >
          <NavLink href="#solutions" onClick={() => setIsOpen(false)}>Soluções</NavLink>
          <NavLink href="#roi" onClick={() => setIsOpen(false)}>ROI e Ativos</NavLink>
          <NavLink href="#about" onClick={() => setIsOpen(false)}>Consultoria</NavLink>
          <Link
            href="#cta"
            className="rounded-full bg-accent px-6 py-3 text-center text-sm font-bold text-background"
            onClick={() => setIsOpen(false)}
          >
            Falar com Consultor
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
