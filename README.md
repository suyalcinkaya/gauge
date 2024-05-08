# Gauge [![@suyalcinkaya/gauge minzip package size](https://img.shields.io/bundlephobia/minzip/@suyalcinkaya/gauge)](https://www.npmjs.com/package/@suyalcinkaya/gauge?activeTab=code) [![@suyalcinkaya/gauge package version](https://img.shields.io/npm/v/@suyalcinkaya/gauge.svg?colorB=green)](https://www.npmjs.com/package/@suyalcinkaya/gauge) ![GitHub License](https://img.shields.io/github/license/suyalcinkaya/gauge)

[Gauge](https://gauge.onur.dev/) is an aesthetic and customizable circular visual component for React.

## Examples and playground

[https://gauge.onur.dev](https://gauge.onur.dev)

## Documentation

Find the full API reference in the [documentation](https://gauge.onur.dev/api).

## Install

```bash
pnpm install @suyalcinkaya/gauge
```

## Use

```tsx
import { Gauge } from '@suyalcinkaya/gauge'

export function Component(): JSX.Element {
  return <Gauge value={23} />
}
```

## Development

### Installation

The Gauge repository uses [pnpm Workspaces](https://pnpm.io/workspaces) and [Turborepo](https://github.com/vercel/turborepo). To install dependencies, run `pnpm install` in the project root directory.

```bash
pnpm install
```

### Build Gauge

```bash
cd packages/gauge
pnpm build
```

Watch mode: `pnpm dev`

### Development

You can also debug it with the website app locally. For instance; to start `apps/website` locally, run the following command in the project root directory.

```bash
pnpm dev
```

Check localhost:3000 to see the website app.

## Inspiration & Credits

Inspired by [Geist Design System](https://vercel.com/geist/gauge) from the Vercel team and by [geist-gauge](https://geist-gauge.vercel.app) from Ajay.
