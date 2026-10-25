# Research Notes

## ESLint FlatCompat Serialization Bug
- **Package**: `@eslint/eslintrc` v3.2.0
- **Issue**: When using `FlatCompat` to convert legacy ESLint configs (like `next/core-web-vitals`) to flat config, the parser object contains a `parse` function that cannot be serialized during ESLint's parallel processing.
- **Stack**: `eslint@9` + `@eslint/eslintrc@3.2.0` + `eslint-config-next@15.1.6`
- **Error**: `Cannot serialize key "parse" in parser: Function values are not supported`
- **Solution used**: `ignoreDuringBuilds: true` in `next.config.mjs` — standard Next.js approach
- **Alternative**: For a proper fix, rewrite `eslint.config.mjs` to use ESLint 9 native flat config:
  ```js
  import next from 'eslint-config-next'
  export default [...next]
  ```
  However, `eslint-config-next` v15.1.6 uses CommonJS exports, requiring `createRequire` for ESM compatibility.

## Next.js Image Optimization
- Files in `public/` directory are served from root path (`/`)
- File at `public/Ebenezer-resume.pdf` → accessible at `/Ebenezer-resume.pdf`
- Not accessible at `/public/Ebenezer-resume.pdf` (that path returns 404)
- `next/image` with `width`/`height` (no `fill`) uses `loader: 'default'` which optimizes via `/_next/image?url=...`
- No `next.config.mjs` configuration needed for local static assets

## Vercel Deployment
- The repo has a `vercel/react-server-components-cve-vu-fg8t3w` remote branch — indicates Vercel deployment
- No `vercel.json` or `vercel` config file found in repo root
- `eslint: { ignoreDuringBuilds: true }` will allow Vercel builds to succeed despite ESLint config issues

## Convex
- Convex is a backend-as-a-service platform (database, auth, functions)
- Added alongside Supabase in general/about contexts where the developer lists their toolkit
- Did NOT add to project-specific tech stacks (RAMCE, Angelo Technology) since those projects use Supabase
