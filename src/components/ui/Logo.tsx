'use client'

import Link from 'next/link'

interface LogoProps {
  href?: string
  className?: string
}

export const Logo = ({ href = '/', className = '' }: LogoProps) => {
  return (
    <Link href={href} className={`flex items-center gap-2 group ${className}`}>
      <div className="relative h-8 w-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-accent rounded-full blur-[8px] opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="h-4 w-4 rounded-full border-2 border-accent" />
      </div>
      <span className="font-display text-xl font-bold tracking-[0.2em] text-foreground uppercase">
        Sol <span className="text-accent">Livre</span>
      </span>
    </Link>
  )
}