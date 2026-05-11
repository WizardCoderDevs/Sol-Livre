# Tasks do Projeto - Sol Livre

## Visão Geral
Este documento rastreia as tarefas de melhoria identificadas na análise do projeto.

---

## Alta Prioridade

### [x] Extrair dados hardcoded para constantes/arquivo de configuração

**Descrição:** Telefone, URLs sociais, endereços e outros dados estão hardcoded nos componentes.

**Arquivos afetados:**
- `src/components/sections/CTA.tsx` - URL do WhatsApp `https://wa.me/551220180698`
- Diversos componentes - textos e dados de contato

**Solução proposta:**
- Criar `src/config/site.ts` com constantes centralizadas ✅
- Criar `src/config/social.ts` para links sociais - integrado ao site.ts
- Atualizar componentes para usar as constantes ✅

**Componentes atualizados:**
- `CTA.tsx` ✅
- `Hero.tsx` ✅
- `Trust.tsx` ✅
- `Navbar.tsx` ✅

---

### [x] Implementar testes básicos para componentes principais

**Descrição:** Nenhum teste implementado. Necessário cobertura mínima para componentes críticos.

**Componentes a testar:**
- `Navbar.tsx` - Menu mobile toggle, navegação
- `Hero.tsx` - CTA buttons, animações
- `Solutions.tsx` - Renderização dos cards de solução

**Stack proposta:**
- Vitest + React Testing Library (já que o projeto usa pnpm)
-覆盖率 mínima: 70%

---

## Média Prioridade

### [ ] Adicionar SEO completo

**Descrição:** SEO básico implementado, mas faltam componentes importantes.

**Tarefas:**
- [x] OG Tags para redes sociais
- [x] `sitemap.xml` dinâmico
- [x] `robots.txt` configurado
- [x] Meta tags de descrição otimizadas
- [ ] Open Graph images (requer asset personalizado a ser adicionado em `public/`)

---

### [x] Limpar assets não utilizados do public/

**Descrição:** Arquivos SVG padrão do create-next-app ainda estão presentes.

**Arquivos a remover:**
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/window.svg`
- `public/vercel.svg`

---

## Baixa Prioridade

### [x] Substituir favicon padrão

**Descrição:** Favicon ainda é o padrão do Next.js.

**Ação:** Substituir `public/favicon.ico` por ícone personalizado do Sol Livre.

---

### [x] Corrigir configuração do pnpm-workspace.yaml

**Descrição:** Formato incomum para um projeto single-package.

**Atual:**
```yaml
ignoredBuiltDependencies: []
```

**Sugerido:** Remover arquivo já que não é necessário para projeto único, ou configurar corretamente.

---

## Progresso

- [x] Análise do projeto concluída
- [x] Tarefa 1: Extrair dados hardcoded
- [x] Tarefa 2: Implementar testes
- [x] Tarefa 3: SEO completo
- [x] Tarefa 4: Limpar assets
- [x] Tarefa 5: Favicon
- [x] Tarefa 6: pnpm-workspace.yaml