# @azulejo-kit — Component Library

Monorepo de componentes Vue 3 publicados no npm, alinhados com o design system [Mozaic](https://mozaic.adeo.cloud/).

**Storybook:** https://aplemes.github.io/library-components/?path=/docs/introduction--docs

## Stack

| Ferramenta | Papel |
|---|---|
| Lerna | Gerencia o monorepo e publica cada pacote de forma independente |
| Yarn | Gerenciador de pacotes |
| Vite | Bundler — compila cada componente como biblioteca (ESM + CJS) |
| vite-plugin-dts | Gera as declarações TypeScript (.d.ts) |
| @vitejs/plugin-vue | Compila Single File Components (.vue) |
| Tailwind CSS v4 | Estilização com tokens de marca |
| TypeScript | Tipagem estática |
| Vitest | Testes unitários com happy-dom |
| Storybook | Documentação interativa dos componentes |
| GitHub Actions | CI/CD automatizado |

## Estrutura

```
library-components/
  lerna.json
  package.json
  vite.config.ts        # Config base compartilhada por todos os pacotes
  tailwind.css          # Tokens de marca (cores, tipografia, espaçamento)
  tsconfig.json         # Config base TypeScript
  docs/                 # Guias e documentação interna
  packages/
    Avatar/             # @azulejo-kit/avatar
    Breadcrumb/         # @azulejo-kit/breadcrumb
    Button/             # @azulejo-kit/button
    Flag/               # @azulejo-kit/flag
    Input/              # @azulejo-kit/input
    Modal/              # @azulejo-kit/modal
    Tag/                # @azulejo-kit/tag
    Tooltip/            # @azulejo-kit/tooltip
    tokens/             # @azulejo-kit/tokens
```

**Anatomia de um pacote** (use `packages/Button` como template):

```
packages/ComponentName/
  index.ts              # Entry point — re-exporta o componente
  vite.config.ts        # Extende config raiz; define lib.entry e lib.name
  tsconfig.json         # Extende tsconfig raiz
  package.json          # name: @azulejo-kit/nome, exports ESM/CJS/types/style.css
  src/
    index.vue           # Single File Component (<script setup lang="ts">)
    index.spec.ts       # Testes Vitest com @vue/test-utils
    index.stories.ts    # Stories Storybook (formato CSF3)
  .storybook/
    main.ts
    preview.ts
```

## Pacotes

| Pacote | Versão | Descrição |
|---|---|---|
| `@azulejo-kit/button` | 1.0.2 | Botão com variantes, tamanhos e estados |
| `@azulejo-kit/flag` | 1.0.2 | Badge compacto para estados de produto |
| `@azulejo-kit/breadcrumb` | 1.0.2 | Navegação hierárquica |
| `@azulejo-kit/avatar` | 1.0.2 | Avatar de utilizador com fallback de iniciais |
| `@azulejo-kit/input` | 1.0.2 | Campo de texto com label, erro e prefix/suffix |
| `@azulejo-kit/modal` | 1.0.2 | Dialog overlay acessível |
| `@azulejo-kit/tooltip` | 1.0.2 | Tooltip em 4 posições com seta opcional |
| `@azulejo-kit/tag` | 1.0.2 | Label compacto para categorização |
| `@azulejo-kit/tokens` | 1.0.2 | CSS custom properties de marca |

## Desenvolvimento

### Instalar dependências

```bash
yarn install
```

### Build de todos os pacotes

```bash
yarn build
```

### Testes

```bash
# Todos os pacotes
yarn test

# Pacote específico
cd packages/Button && yarn test
```

### Storybook

```bash
# Storybook global (todos os componentes)
yarn storybook

# Storybook de um pacote específico
cd packages/Button && yarn storybook
```

## CI/CD

| Workflow | Gatilho | O que faz |
|---|---|---|
| `ci.yml` | PR aberto contra `main` | Roda testes e build de verificação |
| `release.yml` | Push em `main` | Versiona pacotes alterados com Lerna e cria tags |
| `storybook.yml` | Push em `main` | Publica Storybook no GitHub Pages |

Veja [docs/cicd-guide.md](docs/cicd-guide.md) para o fluxo completo.

## Instalação em outro projeto

Os pacotes estão publicados no registry público do npm. Instala diretamente:

```bash
yarn add @azulejo-kit/button
```

Importe o CSS do componente:

```js
import '@azulejo-kit/button/style.css'
```

Consulte o [Storybook](https://aplemes.github.io/library-components/?path=/docs/introduction--docs) para exemplos de uso de cada componente.

## Adicionar um novo componente

1. Crie a pasta em `packages/NomeComponente/`
2. Copie a estrutura de `packages/Button/` como base
3. Atualize o `name` no `package.json` para `@azulejo-kit/nome-componente`
4. Implemente o componente em `src/index.vue`
5. Adicione testes em `src/index.spec.ts`
6. Adicione stories em `src/index.stories.ts`
