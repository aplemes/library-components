# Guia de CI/CD — library-components

## Visão Geral

```
                  ┌──────────────────────────────────┐
  Pull Request    │  CI: testes + build de verificação │
  (qualquer       │  ✅ obrigatório para fazer merge   │
   branch → main) └──────────────────────────────────┘

                  ┌──────────────────────────────────┐
  Push em main   │  Storybook Deploy (GitHub Pages)  │
                  └──────────────────────────────────┘

                  ┌──────────────────────────────────┐
  Tag v*.*.*      │  CD: build + publish no npm       │
  (criada pelo    │  registry (registry.npmjs.org)    │
   dev via Lerna) └──────────────────────────────────┘
```

---

## Secrets necessários no GitHub

Acesse: **Settings → Secrets and variables → Actions**

| Secret | Como obter | Para quê |
|---|---|---|
| `NPM_TOKEN` | npm → Access Tokens → "Automation" | Publicar pacotes no npm |

> Para publicar no GitHub Packages (alternativa), use `GITHUB_TOKEN` (já existe por padrão) e altere o `publishConfig` nos `package.json` para apontar para `https://npm.pkg.github.com`.

---

## Fluxo de trabalho

### 1. Desenvolvimento (dia a dia)

```bash
git checkout -b feat/meu-componente
# ... faz as alterações ...
git push origin feat/meu-componente
# abre PR → CI roda automaticamente
```

### 2. Criando uma release (versionar + publicar)

Após o PR ser aprovado e mergeado em `main`:

```bash
git checkout main
git pull

# Atualiza as versões dos pacotes alterados (interativo)
yarn lerna version --conventional-commits

# O Lerna cria os commits de versão + as tags (ex: @leroy-merlin-pt/button@1.1.0)
# e faz push automático para o GitHub

# O push das tags dispara o workflow de publish automaticamente
```

> `--conventional-commits` detecta o tipo do bump (patch/minor/major) a partir das mensagens de commit (`fix:` = patch, `feat:` = minor, `BREAKING CHANGE` = major).

---

## Arquivos de workflow

### `.github/workflows/ci.yml`
Roda em todo PR aberto contra `main`. Garante que testes e build passam antes do merge.

### `.github/workflows/publish.yml`
Roda quando uma tag `v*` ou tag de pacote (`@leroy-merlin-pt/*@*`) é criada pelo Lerna. Faz o build e publica os pacotes alterados no npm.

### `.github/workflows/storybook.yml`
Roda em push para `main`. Faz o build do Storybook e publica no GitHub Pages.

---

## Como ativar o GitHub Pages

1. Vá em **Settings → Pages**
2. Em "Source", selecione **GitHub Actions**
3. Após o primeiro deploy, o Storybook estará disponível em:
   `https://<org>.github.io/<repo>/`

---

## Troubleshooting

### `yarn` falha com `Failed to replace env in config: ${NPM_TOKEN}`
O `.npmrc` tem a linha de auth token descomentada mas a variável não está definida.
- Localmente: comente a linha ou `export NPM_TOKEN=dummy`
- No CI: o secret `NPM_TOKEN` precisa estar configurado

### Lerna não detecta pacotes alterados
Verifique se os commits seguem o padrão Conventional Commits (`feat:`, `fix:`, etc.).

### Publish falha com 403
O token npm não tem permissão de escrita no escopo `@leroy-merlin-pt`.
Crie um novo token em npmjs.com com tipo **Automation**.
