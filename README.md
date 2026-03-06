# @leroy-merlin-pt — Component Library

Monorepo de componentes Vue 3 publicados no GitHub Packages.

## Stack

| Ferramenta | Papel |
|---|---|
| Lerna | Gerencia o monorepo e publica cada pacote de forma independente |
| Yarn | Gerenciador de pacotes |
| Vite | Bundler — compila cada componente como biblioteca (ESM + CJS) |
| vite-plugin-dts | Gera as declaracoes TypeScript (.d.ts) |
| @vitejs/plugin-vue | Compila Single File Components (.vue) |
| TypeScript | Tipagem estática |
| Vitest | Testes unitários com happy-dom |
| GitHub Packages | Registry npm |

## Estrutura

```
library-components/
  lerna.json
  package.json
  vite.config.ts        # Config base compartilhada por todos os pacotes
  tsconfig.json         # Config base TypeScript
  packages/
    Button/             # @leroy-merlin-pt/button
    ...
```

## Pacotes

| Pacote | Versão |
|---|---|
| [@leroy-merlin-pt/button](./packages/Button) | 1.0.0 |

## Desenvolvimento

### Instalar dependencias

```bash
yarn install
```

### Build de todos os pacotes

```bash
yarn build
```

### Testes

```bash
yarn test
```

## Publicar no GitHub Packages

1. Gere um Personal Access Token (PAT) no GitHub com permissao `write:packages`
2. Descomente as linhas do `.npmrc` e exporte o token:

```bash
export NODE_AUTH_TOKEN=ghp_seu_token_aqui
yarn publish
```

## Instalacao em outro projeto

Adicione ao `.npmrc` do projeto consumidor:

```
@leroy-merlin-pt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Depois instale o pacote:

```bash
yarn add @leroy-merlin-pt/button
```

## Adicionar um novo componente

1. Crie a pasta em `packages/NomeComponente/`
2. Copie a estrutura de `packages/Button/` como base
3. Atualize o `name` no `package.json` para `@leroy-merlin-pt/nome-componente`
4. Implemente o componente em `src/index.vue`
