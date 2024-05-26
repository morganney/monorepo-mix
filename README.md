## monorepo-mix

Example of how to use a TypeScript monorepo that supports development against internal package dependencies without requiring a build step.

This primarily relies on [`tsx`](https://github.com/privatenumber/tsx) and [user conditions](https://nodejs.org/api/packages.html#resolving-user-conditions) in a package.json's [conditional exports](https://nodejs.org/api/packages.html#conditional-exports).
