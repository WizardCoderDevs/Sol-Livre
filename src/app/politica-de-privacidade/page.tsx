import { Metadata } from 'next'
import { company } from '@/config/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade da Sol Livre Consultoria. Conheça como protegemos seus dados e sua privacidade.',
  alternates: {
    canonical: 'https://sollivre.com.br/politica-de-privacidade',
  },
  openGraph: {
    title: 'Política de Privacidade | Sol Livre',
    description:
      'Política de Privacidade da Sol Livre Consultoria.',
    url: 'https://sollivre.com.br/politica-de-privacidade',
  },
}

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <article className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold text-foreground">Política de Privacidade</h1>
        
        <p className="text-muted-foreground">
          Esta Política de Privacidade descreve como, usamos e protegemos suas informações pessoais ao usar nosso site e serviços.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">1. Informações que coletamos</h2>
          <p className="text-muted-foreground">
            Coletamos informações que você nos fornece diretamente, incluindo nome, email, telefone e informações sobre sua propriedade ou empresa quando você solicita informações sobre nossos serviços de consultoria energética.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">2. Como usamos suas informações</h2>
          <p className="text-muted-foreground">
            Utilizamos suas informações para: responder às suas solicitações de consultoria, enviar informações sobre nossos serviços, melhorar nossa comunicação e garantir a segurança dos nossos serviços.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">3. Proteção de dados</h2>
          <p className="text-muted-foreground">
            Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação. Seus dados são armazenados de forma segura e acessíveis apenas a funcionários autorizados.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">4. Compartilhamento de informações</h2>
          <p className="text-muted-foreground">
            Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros sem seu consentimento, exceto quando necessário para fornecer nossos serviços ou conforme exigido por lei.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">5. Seus direitos</h2>
          <p className="text-muted-foreground">
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais de atendimento disponíveis.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">6. Contato</h2>
          <p className="text-muted-foreground">
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em {company.name}.
          </p>
        </section>

        <p className="text-sm text-muted-foreground pt-8">
          Última atualização: Maio de 2026
        </p>
      </article>
    </main>
  )
}