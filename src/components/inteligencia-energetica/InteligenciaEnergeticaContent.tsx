'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Sun, TrendingDown, Users, Zap } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const proofs = [
  { icon: Users, value: '2.500+', label: 'Clientes atendidos' },
  { icon: Zap, value: 'R$ 12M', label: 'Economia gerada' },
  { icon: TrendingDown, value: 'até 30%', label: 'Economia na conta' },
]

export function InteligenciaEnergeticaContent() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-6 px-6">
        <Logo />
      </div>

      <section className="pt-16 pb-20 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-fluid-small uppercase tracking-[0.3em] font-medium text-accent">
              Energia Solar por Assinatura
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-fluid-h1 font-bold leading-tight mt-6 mb-6"
          >
            Pare de <span className="text-accent">perder dinheiro</span> na conta de luz
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-fluid-body text-foreground/70 max-w-xl mx-auto mb-10"
          >
            Você gera <span className="text-accent font-semibold">economia</span> sem instalar nada. Acessa créditos de fazendas solares 
            parceiras e <span className="text-accent font-bold">economiza até 30%</span> na conta de luz — <span className="font-semibold text-foreground">sem ter que investir</span> em 
            equipamentos ou se preocupar com manutenção financiamentos de obras caras.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="https://www.leadenergy.com.br/simular?ch=0f0547d3-7e73-442e-a915-34ef39efe74b&pr=db69a358-de85-47b0-ba6e-098630585cd5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-sm font-bold text-background transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105"
            >
              Simular minha economia <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-fluid-small text-foreground/50 mt-4">
              Consultoria gratuita • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6 bg-surface/50 border-y border-surface-border">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap justify-center gap-16">
            {proofs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="font-display text-2xl font-bold text-foreground">{item.value}</span>
                </div>
                <span className="text-fluid-small text-foreground/60">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-fluid-h2 font-bold text-center mb-4">
              Para quem é isso?
            </h2>
            <p className="text-fluid-body text-foreground/70 text-center mb-12 max-w-lg mx-auto">
              Se você paga conta de luz e não tem painel solar no teto, está 
              <span className="text-accent font-bold"> perdendo dinheiro</span> todo mês.
            </p>

            <div className="grid gap-6">
              {[
                'Não requer gastos com instalação ou obra',
                'Economia sem compromisso de longo prazo',
                'Solução rápida e sem burocracia',
                'Previsibilidade nos custos mensais',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-surface/50 border border-surface-border"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-fluid-body text-foreground/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-surface/30">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Sun className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-display text-fluid-h2 font-bold mb-4">
              Como funciona?
            </h2>
            <p className="text-fluid-body text-foreground/70 max-w-lg mx-auto mb-10">
              Você não instala nada. A gente conecta você às fazendas solares parceiras 
              e os créditos de energia gerados são aplicados diretamente na sua conta.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-white/50 border border-surface-border">
                <span className="font-display text-3xl font-bold text-accent">01</span>
                <h3 className="font-bold mt-2 mb-2">Consumo analisado</h3>
                <p className="text-fluid-small text-foreground/70">
                  Avaliamos seu histórico de consumo
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 border border-surface-border">
                <span className="font-display text-3xl font-bold text-accent">02</span>
                <h3 className="font-bold mt-2 mb-2">Crédito aplicado</h3>
                <p className="text-fluid-small text-foreground/70">
                  Você acessa créditos da fazenda solar
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/50 border border-surface-border">
                <span className="font-display text-3xl font-bold text-accent">03</span>
                <h3 className="font-bold mt-2 mb-2">Economia na conta</h3>
                <p className="text-fluid-small text-foreground/70">
                  Desconto direto na sua fatura mensal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-fluid-h2 font-bold mb-6">
              Você não tem nada a perder
            </h2>
            <p className="text-fluid-body text-foreground/70 mb-8">
              Sem contrato longo, sem multa, sem adesão. Se não funcionar pra você, 
              cancele quando quiser. A gente não ganha se você não economizar.
            </p>
            <a
              href="https://www.leadenergy.com.br/simular?ch=0f0547d3-7e73-442e-a915-34ef39efe74b&pr=db69a358-de85-47b0-ba6e-098630585cd5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-sm font-bold text-background transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105"
            >
              Simular minha economia <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  )
}