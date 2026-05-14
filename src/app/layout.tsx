import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  LocalBusinessJsonLd,
  organizationMetadata,
} from '@/components/seo/StructuredData'
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
  ...organizationMetadata,
  title: {
    default: 'Sol Livre | Consultoria em Inteligência Energética',
    template: '%s | Sol Livre',
  },
  description:
    'Projetamos autonomia energética e valorização patrimonial para residências de elite, agronegócio e indústrias.',
  metadataBase: new URL('https://sollivre.com.br'),
  twitter: {
    card: 'summary_large_image',
    title: 'Sol Livre | Consultoria em Inteligência Energética',
    description:
      'Projetamos autonomia energética e valorização patrimonial.',
    images: ['/og-image.png'],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sollivre.com.br',
    siteName: 'Sol Livre',
    title: 'Sol Livre | Consultoria em Inteligência Energética',
    description:
      'Projetamos autonomia energética e valorização patrimonial para residências de elite, agronegócio e indústrias.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sol Livre | Consultoria em Inteligência Energética',
      },
    ],
  },
  icons: {
    icon: '/Logo.ico',
  },
  keywords: [
    'consultoria energética',
    'energia solar',
    'inteligência energética',
    'economia de energia',
    'fazendas solares',
    'autonomia energética',
    'painéis solares',
    'agronegócio',
    'sustentabilidade',
  ],
  authors: [{ name: 'Sol Livre Consultoria' }],
  creator: 'Sol Livre Consultoria',
  publisher: 'Sol Livre Consultoria',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQVQ2D95"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MQVQ2D95');`}
        </Script>
        {children}
      </body>
    </html>
  )
}
