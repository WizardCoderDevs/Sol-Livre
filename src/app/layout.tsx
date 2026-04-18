import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sol Livre | Consultoria em Inteligência Energética',
  description: 'Projetamos autonomia energética e valorização patrimonial para residências de elite, agronegócio e indústrias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-accent/30 min-h-full font-sans">
        {children}
      </body>
    </html>
  )
}
