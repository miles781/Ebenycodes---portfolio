# Overnight Build Plan

## Goal
Apply the portfolio-fix-v3 package to the portfolio repo, add Convex to tech stack references, fix CV download link on main, fix ESLint blocking Vercel deploys, and complete the quality pass.

## Tasks

### 1. Apply portfolio-fix-v3 package files (STEP 1 from README.txt)
- Copy all 13 package source files + README to repo
- **Status**: Completed — files copied, Convex re-applied, ESLint fix re-applied

### 2. Fix CV download link on main branch
- `main` branch had `href="/public/Ebenezer-resume.pdf"` (404)
- Fixed to `href="/Ebenezer-resume.pdf"` (200)
- **Status**: Completed and committed on main (b5bbb50)

### 3. Delete STEP 2 files (README.txt STEP 2)
- All STEP 2 files already deleted in prior commits
- **Status**: Verified — no STEP 2 files remain

### 4. Quality pass (AGENT_PROMPT STEP 7)
- Meaningful alt text: HeroSection `alt="Ebenezer Igogo profile photo"`
- aria-label on icon-only links: Sidebar socials + nav (desktop and mobile)
- `<html lang="en">`: present in layout.js
- Mobile bottom bar padding: `pb-24 md:pb-0` in page.js
- No horizontal scroll: `overflow-x-hidden` in page.js
- Colour contrast: inherited from package
- **Status**: Completed

### 5. Content sweep (AGENT_PROMPT STEP 5)
- Searched for: `5+`, `5 years`, `production-grade`, `real clients`, `AI Product Engineer`, `shipped`, `expert`, `100%`, `aiproductengineer.com`, `300L`, `[...]`, `Screenshots coming soon`, `/public/` prefix
- Only match: "Screenshots coming soon" in Systems.jsx — still true (no screenshots set), kept
- **Status**: Completed

### 6. Add Convex alongside Supabase
- About.jsx: text + config web array
- layout.js: metadata description
- assets.js: service description + techStack
- Left project-specific stacks (RAMCE, Angelo Tech) unchanged — those use Supabase, not Convex
- **Status**: Completed

### 7. ESLint fix for Vercel
- Error: `Cannot serialize key "parse" in parser: Function values are not supported`
- Cause: `@eslint/eslintrc` v3.2.0 `FlatCompat` bug with `eslint-config-next` parser
- Fix: `ignoreDuringBuilds: true` in next.config.mjs
- Note: `npm run lint` still fails due to same ESLint config bug, but `next build` passes
- **Status**: Completed on both branches

### 8. Build + test verification
- **Status**: Build passes (see PROGRESS.md)

### 9. Commit on overnight branch
- **Status**: Pending

## Acceptance Criteria
- [x] CV download works (`/Ebenezer-resume.pdf`, HTTP 200)
- [x] All three CV buttons point to `/Ebenezer-resume.pdf`
- [x] Convex added alongside Supabase in general/about/service contexts
- [x] ESLint no longer blocks Vercel builds
- [x] All content sweep items addressed
- [x] All links verified (LinkedIn, GitHub, section anchors)
- [x] Quality pass items addressed
- [x] Build passes
