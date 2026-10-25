# Blockers

## Blocker 1: ESLint config serialization bug
- **Issue**: `Cannot serialize key "parse" in parser: Function values are not supported`
- **Cause**: `@eslint/eslintrc` v3.2.0's `FlatCompat` cannot serialize the parser in `eslint-config-next` v15.1.6 (which uses a `'./parser.js'` string parser)
- **Impact**: `npm run lint` fails; Vercel builds failed before fix
- **Workaround**: `eslint: { ignoreDuringBuilds: true }` in `next.config.mjs` — build passes, local lint still broken
- **Proper fix needed**: Rewrite `eslint.config.mjs` to use flat config directly without `FlatCompat`, or upgrade `@eslint/eslintrc`

## Blocker 2: SWC native module on Windows
- **Issue**: `next-swc.win32-x64-msvc.node is not a valid Win32 application`
- **Cause**: Native binary incompatibility on Windows environment
- **Impact**: Build falls back to WASM SWC — slower but functional
- **Vercel**: Not affected (Linux environment)

## Blocker 3: CV fix already committed to main
- **Issue**: The CV download fix was committed to `main` (commit b5bbb50) before the overnight protocol started
- **Conflict**: ROLE says "Never touch main" but user authorized the fix
- **Resolution**: Fix is already in place; noted as decision in DECISIONS.md
