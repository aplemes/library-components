# @leroy-merlin-pt — Component Library

Monorepo de componentes Vue 3 publicados no npm, alinhados com o design system [Mozaic](https://mozaic.adeo.cloud/).

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
    Button/             # @leroy-merlin-pt/button
    Input/              # @leroy-merlin-pt/input
    ...                 # ~75 componentes no total
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

Todos os pacotes estão na versão `1.0.2`.

### Formulários
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/checkbox` | Checkbox |
| `@leroy-merlin-pt/checkboxgroup` | Grupo de checkboxes |
| `@leroy-merlin-pt/radio` | Radio button |
| `@leroy-merlin-pt/radiogroup` | Grupo de radio buttons |
| `@leroy-merlin-pt/input` | Campo de texto |
| `@leroy-merlin-pt/passwordinput` | Campo de senha |
| `@leroy-merlin-pt/textarea` | Área de texto |
| `@leroy-merlin-pt/select` | Select nativo |
| `@leroy-merlin-pt/combobox` | Combobox com busca |
| `@leroy-merlin-pt/date-picker` | Seletor de data |
| `@leroy-merlin-pt/phone-number` | Campo de telefone |
| `@leroy-merlin-pt/pin-code` | Campo de PIN |
| `@leroy-merlin-pt/quantityselector` | Seletor de quantidade |
| `@leroy-merlin-pt/toggle` | Toggle switch |
| `@leroy-merlin-pt/togglegroup` | Grupo de toggles |
| `@leroy-merlin-pt/segmented-control` | Controle segmentado |
| `@leroy-merlin-pt/field` | Wrapper de campo com label e erro |
| `@leroy-merlin-pt/field-group` | Grupo de campos |
| `@leroy-merlin-pt/file-uploader` | Upload de arquivos |
| `@leroy-merlin-pt/file-uploader-item` | Item de upload |

### Navegação
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/breadcrumb` | Breadcrumb |
| `@leroy-merlin-pt/tabs` | Abas |
| `@leroy-merlin-pt/pagination` | Paginação |
| `@leroy-merlin-pt/sidebar` | Sidebar de navegação |
| `@leroy-merlin-pt/sidebar-header` | Cabeçalho da sidebar |
| `@leroy-merlin-pt/sidebar-footer` | Rodapé da sidebar |
| `@leroy-merlin-pt/sidebar-nav-item` | Item de navegação da sidebar |
| `@leroy-merlin-pt/sidebar-expandable-item` | Item expansível da sidebar |
| `@leroy-merlin-pt/sidebar-shortcut-item` | Atalho da sidebar |
| `@leroy-merlin-pt/sidebar-shortcuts` | Barra de atalhos da sidebar |
| `@leroy-merlin-pt/navigation-indicator` | Indicador de navegação |
| `@leroy-merlin-pt/page-header` | Cabeçalho de página |

### Layout e Containers
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/container` | Container responsivo |
| `@leroy-merlin-pt/divider` | Divisor |
| `@leroy-merlin-pt/drawer` | Drawer lateral |
| `@leroy-merlin-pt/modal` | Modal |
| `@leroy-merlin-pt/overlay` | Overlay |
| `@leroy-merlin-pt/loading-overlay` | Overlay de carregamento |
| `@leroy-merlin-pt/popover` | Popover |
| `@leroy-merlin-pt/tooltip` | Tooltip |
| `@leroy-merlin-pt/accordion-list` | Lista acordeão |
| `@leroy-merlin-pt/accordion-list-item` | Item de lista acordeão |

### Feedback e Status
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/callout` | Callout informativo |
| `@leroy-merlin-pt/statusbadge` | Badge de status |
| `@leroy-merlin-pt/statusdot` | Ponto de status |
| `@leroy-merlin-pt/statusmessage` | Mensagem de status |
| `@leroy-merlin-pt/statusnotification` | Notificação de status |
| `@leroy-merlin-pt/toaster` | Notificações toast |
| `@leroy-merlin-pt/loader` | Indicador de carregamento |
| `@leroy-merlin-pt/circularprogressbar` | Barra de progresso circular |
| `@leroy-merlin-pt/linearprogressbarbuffer` | Barra de progresso linear com buffer |
| `@leroy-merlin-pt/linearprogressbarpercentage` | Barra de progresso linear com percentual |
| `@leroy-merlin-pt/numberbadge` | Badge numérico |
| `@leroy-merlin-pt/flag` | Flag/bandeira |

### Tiles e Cards
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/tile` | Tile base |
| `@leroy-merlin-pt/tile-clickable` | Tile clicável |
| `@leroy-merlin-pt/tile-expandable` | Tile expansível |
| `@leroy-merlin-pt/tile-selectable` | Tile selecionável |
| `@leroy-merlin-pt/kpi-item` | Item de KPI |

### Steppers
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/stepper-bottom-bar` | Stepper barra inferior |
| `@leroy-merlin-pt/stepper-compact` | Stepper compacto |
| `@leroy-merlin-pt/stepper-inline` | Stepper inline |
| `@leroy-merlin-pt/stepper-stacked` | Stepper empilhado |

### Ações e Controles
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/button` | Botão |
| `@leroy-merlin-pt/iconbutton` | Botão de ícone |
| `@leroy-merlin-pt/link` | Link |
| `@leroy-merlin-pt/tag` | Tag |
| `@leroy-merlin-pt/action-bottom-bar` | Barra de ações inferior |
| `@leroy-merlin-pt/action-listbox` | Listbox de ações |
| `@leroy-merlin-pt/option-listbox` | Listbox de opções |
| `@leroy-merlin-pt/check-list-menu` | Menu de lista com checkboxes |
| `@leroy-merlin-pt/built-in-menu` | Menu embutido |
| `@leroy-merlin-pt/carousel` | Carrossel |
| `@leroy-merlin-pt/starrating` | Avaliação por estrelas |

### Outros
| Pacote | Descrição |
|---|---|
| `@leroy-merlin-pt/avatar` | Avatar de usuário |
| `@leroy-merlin-pt/tokens` | Tokens de design (CSS variables) |

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
# Storybook global
yarn storybook

# Storybook de um pacote específico
cd packages/Button && yarn storybook
```

## CI/CD

O projeto usa GitHub Actions com três workflows:

| Workflow | Gatilho | O que faz |
|---|---|---|
| `ci.yml` | PR aberto contra `main` | Roda testes e build de verificação |
| `storybook.yml` | Push em `main` | Publica Storybook no GitHub Pages |
| `publish.yml` | Tag `v*.*.*` criada pelo Lerna | Faz build e publica pacotes no npm |

Veja [docs/cicd-guide.md](docs/cicd-guide.md) para o fluxo completo.

## Publicar no npm

```bash
git checkout main && git pull

# Versionar (interativo, usa Conventional Commits)
yarn lerna version --conventional-commits

# O push das tags dispara o publish automaticamente via CI
```

Para publicar manualmente (sem CI):

```bash
export NPM_TOKEN=seu_token_aqui
yarn publish
```

## Instalação em outro projeto

Instale o pacote desejado:

```bash
yarn add @leroy-merlin-pt/button
```

Se estiver usando GitHub Packages como registry, adicione ao `.npmrc` do projeto consumidor:

```
@leroy-merlin-pt:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

## Adicionar um novo componente

1. Crie a pasta em `packages/NomeComponente/`
2. Copie a estrutura de `packages/Button/` como base
3. Atualize o `name` no `package.json` para `@leroy-merlin-pt/nome-componente`
4. Implemente o componente em `src/index.vue`
5. Adicione testes em `src/index.spec.ts`
6. Adicione stories em `src/index.stories.ts`
