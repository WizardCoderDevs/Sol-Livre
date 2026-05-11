import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sol Livre | Consultoria em Inteligência Energética',
    template: '%s | Sol Livre',
  },
  description:
    'Projetamos autonomia energética e valorização patrimonial para residências de elite, agronegócio e indústrias.',
  metadataBase: new URL('https://sollivre.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sollivre.com.br',
    siteName: 'Sol Livre',
    title: 'Sol Livre | Consultoria em Inteligência Energética',
    description:
      'Projetamos autonomia energética e valorização patrimonial para residências de elite, agronegócio e indústrias.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sol Livre | Consultoria em Inteligência Energética',
    description:
      'Projetamos autonomia energética e valorização patrimonial.',
  },
  icons: {
    icon: '/Logo.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
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
