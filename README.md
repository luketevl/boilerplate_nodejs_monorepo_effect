# Auto Freela

Internal Nx monorepo boilerplate using pnpm, TypeScript stable, Effect v4 beta, React + Vite, Vitest, ESLint Antfu, API, interactive CLI with Clack and emoji commits with commitizen-emoji.

## Commands

- `pnpm dev:web`
- `pnpm dev:api`
- `pnpm dev:cli`
- `pnpm typecheck`
- `pnpm test`
- `pnpm lint`
- `pnpm build`
- `pnpm commit`
- `pnpm knip`

## Structure

- `apps/web`: React + Vite example app.
- `apps/api`: backend composition root using Effect.
- `apps/cli`: interactive CLI using `@clack/prompts`.
- `packages/domain`: entities and business rules.
- `packages/ports`: ports/contracts.
- `packages/application`: use cases.
- `packages/adapters`: adapters/infrastructure.
- `packages/effect`: shared Effect helpers.
- `packages/config`: env/config helpers.
- `packages/testing`: testing helpers and layers.

See `docs/architecture.md`.
