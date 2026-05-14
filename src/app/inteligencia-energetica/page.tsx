import { Metadata } from 'next'
import { InteligenciaEnergeticaContent } from '@/components/inteligencia-energetica/InteligenciaEnergeticaContent'

export const metadata: Metadata = {
  title: 'Inteligência Energética',
  description:
    'Descubra como economizar até 30% na conta de luz sem instalar painéis solares. Acesse créditos de fazendas solares parceiras e comece a economizar hoje.',
  alternates: {
    canonical: 'https://sollivre.com.br/inteligencia-energetica',
  },
  openGraph: {
    title: 'Inteligência Energética | Sol Livre',
    description:
      'Economia de até 30% na conta de luz sem instalar nada. Consultoria gratuita.',
    url: 'https://sollivre.com.br/inteligencia-energetica',
  },
}

export default function InteligenciaEnergetica() {
  return <InteligenciaEnergeticaContent />
}