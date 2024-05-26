## monorepo-mix

Example of how to use a TypeScript monorepo that supports development against internal package dependencies without requiring a build step.

This primarily relies on [`tsx`](https://github.com/privatenumber/tsx) and [user conditions](https://nodejs.org/api/packages.html#resolving-user-conditions) in a package.json's [conditional exports](https://nodejs.org/api/packages.html#conditional-exports).

## Running

1. `npm install`
2. `npm run dev -w app`
3. Navigate to http://localhost:5173

If you want to run against the component's build then run `npm run build -w components` followed by `npm run dev:build -w app`.
