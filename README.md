# mre-bun-pino

## Setup

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.1. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Reproduce the Bug

This works:

```bash
bun run index.ts
```

This does not:

```bash
PRETTY_LOGGING=true bun run index.ts
```
