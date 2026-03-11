# Mozaic Vue — Audit de Migração

> Gerado em: 2026-03-10
> Fonte: https://github.com/adeo/mozaic-vue (clonado em `/home/apaneto/mozaic-vue`)

---

## Estrutura do Repositório Original

```
mozaic-vue/
├── src/
│   ├── components/        # 70+ componentes Vue 3
│   └── utils/             # Composables utilitários
├── package.json           # @mozaic-ds/vue v2.16.0
├── vite.config.ts
├── tsconfig.app.json
└── vitest.config.ts
```

- **Package**: `@mozaic-ds/vue` v2.16.0
- **Licença**: Apache-2.0
- **Tipo**: Monolítico (todos os componentes num único pacote npm)

---

## Stack Original

| Ferramenta | Versão |
|---|---|
| Vue | ^3.5.13 |
| TypeScript | ^5.7.2 |
| Vite | ^7.1.1 |
| Vitest | ^4.0.7 |
| Storybook | ^10.0.4 |
| SASS | 1.94.2 |
| ESLint | ^10.0.2 |

**Estilização**: SASS/BEM com classes `mc-*` (ex: `mc-button`, `mc-button__icon`)
**Testes**: Vitest + @vue/test-utils + jsdom
**Storybook**: @storybook/vue3-vite

---

## Lista de Componentes Encontrados

### Componentes de Ação
- `button` — Botão primário/secundário, variantes, loading, ícone
- `iconbutton` — Botão apenas com ícone
- `link` — Link com variantes de estilo

### Formulários
- `textinput` — Input de texto com label, erro, estados
- `textarea` — Área de texto
- `checkbox` — Checkbox individual
- `checkboxgroup` — Grupo de checkboxes
- `radio` — Radio individual
- `radiogroup` — Grupo de radios
- `select` — Select dropdown
- `combobox` — Combobox com busca
- `passwordinput` — Input de senha com toggle
- `phonenumber` — Input de telefone
- `pincode` — Input de código PIN
- `datepicker` — Seletor de data
- `quantityselector` — Seletor numérico +/-
- `fileuploader` / `fileuploaderitem` — Upload de ficheiros
- `toggle` / `togglegroup` — Toggle switch

### Feedback & Status
- `loader` — Spinner de carregamento
- `loadingoverlay` — Overlay de carregamento
- `statusbadge` — Badge de status (success, warning, error, info)
- `statusdot` — Ponto de status
- `statusmessage` — Mensagem de status inline
- `statusnotification` — Notificação de status
- `numberbadge` — Badge numérico
- `flag` — Bandeira/etiqueta
- `tag` — Tag/chip
- `callout` — Bloco de destaque/aviso
- `toaster` — Notificação toast
- `circularprogressbar` — Barra de progresso circular
- `linearprogressbarbuffer` — Barra de progresso linear (buffer)
- `linearprogressbarpercentage` — Barra de progresso linear (percentagem)
- `starrating` — Avaliação por estrelas

### Navegação
- `breadcrumb` — Migalhas de pão
- `tabs` — Abas de navegação
- `pagination` — Paginação
- `sidebar` + subitens — Barra lateral de navegação
- `pageheader` — Cabeçalho de página
- `navigationindicator` — Indicador de navegação
- `builtinmenu` — Menu integrado

### Layout & Conteúdo
- `container` — Container de layout
- `divider` — Divisor horizontal/vertical
- `avatar` — Avatar de utilizador
- `tile` / `tileclickable` / `tileexpandable` / `tileselectable` — Tiles
- `kpiitem` — Item KPI
- `carousel` — Carrossel

### Overlays & Painéis
- `modal` — Modal
- `drawer` — Painel deslizante
- `overlay` — Overlay genérico
- `popover` — Popover
- `tooltip` — Tooltip
- `actionlistbox` / `optionListbox` — List boxes de ação/opção

### Acordeão & Steppers
- `accordionlist` / `accordionlistitem` — Acordeão
- `stepperbottombar` / `steppercompact` / `stepperinline` / `stepperstacked` — Steppers
- `segmentedcontrol` — Controlo segmentado

### Outros
- `checklistmenu` — Menu de checklist
- `actionbottombar` — Barra de ação inferior
- `field` / `fieldgroup` — Campos de formulário wrapping

---

## Stack de Destino (Este Monorepo)

| Ferramenta | Versão |
|---|---|
| Vue | ^3.3.0 |
| TypeScript | ^5.0.0 |
| Vite | ^4.0.0 |
| Vitest | ^0.34.0 |
| Tailwind CSS | ^4.0.0 (CSS-in-CSS, sem configuração JS) |
| Lerna | ^6.0.0 |

**Estilização**: Tailwind CSS v4 com `@reference '@/tailwind.css'` (substituindo SASS/BEM)
**Scope NPM**: `@leroy-merlin-pt`
**Estrutura**: Pacote independente por componente (ESM + CJS + tipos)

---

## Estratégia de Migração Proposta

### Princípios
1. **Traduzir props, não copiar estilos** — As classes BEM (`mc-*`) do Mozaic são substituídas por classes Tailwind equivalentes
2. **Manter API semântica** — Props e eventos devem ser intuitivos e compatíveis com os padrões Vue 3 (`v-model`, `defineProps`, `defineEmits`)
3. **Pacote por componente** — Cada componente é um pacote npm independente seguindo a estrutura de `packages/Button/`
4. **Tokens primeiro** — O pacote `@leroy-merlin-pt/tokens` deve ser criado antes dos componentes para garantir consistência visual

### Ordem de Migração Recomendada
1. `@leroy-merlin-pt/tokens` — Design tokens (US-002)
2. `@leroy-merlin-pt/button` — Aprimoramento do Button existente (US-003)
3. `@leroy-merlin-pt/input` — Input baseado em `textinput` do Mozaic (US-004)
4. `@leroy-merlin-pt/tag` ou `@leroy-merlin-pt/badge` — Componente simples (US-005)

### Estrutura Padrão de Pacote
```
packages/<Nome>/
├── src/
│   ├── index.vue          # Componente principal (<script setup lang="ts">)
│   ├── index.spec.ts      # Testes Vitest + @vue/test-utils
│   └── index.stories.ts   # Stories Storybook
├── index.ts               # Re-exporta o componente
├── package.json           # @leroy-merlin-pt/<nome>
├── tsconfig.json          # Extends ../../tsconfig.json
└── vite.config.ts         # Extends root config, lib entry = index.ts
```

### Convenções de Build
- Output ESM: `dist/index.js`
- Output CJS: `dist/index.umd.cjs`
- Tipos: `dist/index.d.ts`
- `vue` sempre em `peerDependencies` (excepto pacote de tokens)

---

## Referências Úteis
- Mozaic Vue local: `/home/apaneto/mozaic-vue/src/components/`
- Template de pacote: `packages/Button/`
- Tokens Tailwind: `tailwind.css` na raiz do monorepo
