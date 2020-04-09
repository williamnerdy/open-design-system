# [Open Design System](https://williamnerdy.github.io/open-design-system)

[![Coverage Status](https://coveralls.io/repos/github/williamnerdy/open-design-system/badge.svg)](https://coveralls.io/github/williamnerdy/open-design-system)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=williamnerdy_open-design-system&metric=alert_status)](https://sonarcloud.io/dashboard?id=williamnerdy_open-design-system)

## Estrutura dos componentes

- ComponentName/
  - ComponentName.scss
  - ComponentName.spec.tsx
  - ComponentName.stories.tsx
  - ComponentName.tsx
  - index.ts

O nome do componente deve ser escrito em [CamelCase](https://en.wikipedia.org/wiki/Camel_case) para que seja diferenciado de elementos nativos

## Comandos

### `npm run storybook`

Inicializa o servidor do storybook em modo de desenvolvimento

### `npm run build-storybook`

Faz um build do storybook

### `npm test`

Roda os testes do jest

### `npm run coverage`

Roda os testes de cobertura

### `npm run build`

Faz um build para produção
