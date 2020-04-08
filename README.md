# [Open Design System](https://williamnerdy.github.io/open-design-system)

![Node.js CI](https://github.com/williamnerdy/open-design-system/workflows/Node.js%20CI/badge.svg)
![Deploy Storybook to GitHub Pages](https://github.com/williamnerdy/open-design-system/workflows/Deploy%20Storybook%20to%20GitHub%20Pages/badge.svg)
![Sonar](https://github.com/williamnerdy/open-design-system/workflows/Sonar/badge.svg)

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
