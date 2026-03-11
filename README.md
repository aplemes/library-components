# @leroy-merlin-pt — Component Library

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
    Avatar/             # @leroy-merlin-pt/avatar
    Breadcrumb/         # @leroy-merlin-pt/breadcrumb
    Button/             # @leroy-merlin-pt/button
    Flag/               # @leroy-merlin-pt/flag
    Input/              # @leroy-merlin-pt/input
    Modal/              # @leroy-merlin-pt/modal
    Tag/                # @leroy-merlin-pt/tag
    Tooltip/            # @leroy-merlin-pt/tooltip
    tokens/             # @leroy-merlin-pt/tokens
```

**Anatomia de um pacote** (use `packages/Button` como template):

```
packages/ComponentName/
  index.ts              # Entry point — re-exporta o componente
  vite.config.ts        # Extende config raiz; define lib.entry e lib.name
  tsconfig.json         # Extende tsconfig raiz
  package.json          # name: @leroy-merlin-pt/nome, exports ESM/CJS/types
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
| `@leroy-merlin-pt/button` | 1.0.2 | Botão com variantes, tamanhos e estados |
| `@leroy-merlin-pt/flag` | 1.0.2 | Badge compacto para estados de produto |
| `@leroy-merlin-pt/breadcrumb` | 1.0.2 | Navegação hierárquica |
| `@leroy-merlin-pt/avatar` | 1.0.2 | Avatar de utilizador com fallback de iniciais |
| `@leroy-merlin-pt/input` | 1.0.2 | Campo de texto com label, erro e prefix/suffix |
| `@leroy-merlin-pt/modal` | 1.0.2 | Dialog overlay acessível |
| `@leroy-merlin-pt/tooltip` | 1.0.2 | Tooltip em 4 posições com seta opcional |
| `@leroy-merlin-pt/tag` | 1.0.2 | Label compacto para categorização |
| `@leroy-merlin-pt/tokens` | 1.0.2 | CSS custom properties de marca |

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
| `publish.yml` | Tag `v*.*.*` criada pelo Lerna | Faz build e publica pacotes no npm |

Veja [docs/cicd-guide.md](docs/cicd-guide.md) para o fluxo completo.

## Instalação em outro projeto

Configure o registry no `.npmrc` do projeto consumidor:

```
@leroy-merlin-pt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Instale o pacote desejado:

```bash
yarn add @leroy-merlin-pt/button
```

Importe o CSS do componente:

```js
import '@leroy-merlin-pt/button/style.css'
```

Consulte o [Storybook](https://aplemes.github.io/library-components/?path=/docs/introduction--docs) para exemplos de uso de cada componente.

## Adicionar um novo componente

1. Crie a pasta em `packages/NomeComponente/`
2. Copie a estrutura de `packages/Button/` como base
3. Atualize o `name` no `package.json` para `@leroy-merlin-pt/nome-componente`
4. Implemente o componente em `src/index.vue`
5. Adicione testes em `src/index.spec.ts`
6. Adicione stories em `src/index.stories.ts`
