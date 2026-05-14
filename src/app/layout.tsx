import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'
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
