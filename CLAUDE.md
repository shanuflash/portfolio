# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build (also removes a broken libsql LICENSE file)
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint auto-fix
pnpm format       # Prettier format all files
pnpm format:check # Check formatting without writing

# Database (Turso/libsql via Drizzle)
pnpm db:generate  # Generate migration files
pnpm db:migrate   # Run migrations
pnpm db:push      # Push schema directly (dev)
```

## Architecture

**Next.js 16 App Router** portfolio site using React 19, Tailwind CSS v4, and Motion (Framer Motion successor).

### Routing

- `/` — Main portfolio page (home, about, projects, socials sections)
- `/tools` — Developer tools listing page
- `/tools/char-count` — Char count tool (example of nested tool route)
- `/blog` — Blog page (nav link currently commented out)
- `/area51` — Admin-only page, protected by middleware
- `/(auth)/login` — Google OAuth login via better-auth

### Key architectural patterns

**Data layer** — All portfolio content (projects, social links, info items, products) lives in `src/data/portfolio.js`. Edit this file to update displayed content.

**Icons** — All Lucide icons are accessed through `src/components/icon-mapper.js` using string names (e.g., `getIcon('Github', 'h-6 w-6')`). This indirection keeps icons tree-shakeable and centralised.

**Animations** — `src/app/template.js` wraps every page with a Motion fade/slide transition. `src/components/stagger-reveal.js` wraps individual project cards to animate them into view on scroll.

**Smooth scroll** — `src/components/smooth-scroll.js` uses the `lenis` library, mounted once in the root layout.

**Theme** — Dark/light toggle stored in `localStorage`. An inline script in `layout.js` reads it before hydration to prevent flash. `globals.css` defines CSS variables for both themes under `:root` (light) and `.dark`.

**Auth** — `better-auth` with Google OAuth and Drizzle adapter pointing to Turso (SQLite). Schema in `auth-schema.js`. The middleware (`src/middleware.js`) guards `/area51` and redirects non-admin users to `/login`.

**Styling** — Tailwind CSS v4 (PostCSS plugin). Custom utility class `.soft-grid-border` provides the site's characteristic subtle border colour. `.accent-gradient-text` animates a shifting gradient on skill tag hover. `--accent` is `#1d4ed8` (light) / `#60a5fa` (dark).

### Path alias

`@/*` maps to `src/*` (configured in `jsconfig.json`).

### Required environment variables

```
TURSO_DATABASE_URL
TURSO_AUTH_TOKEN
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
```
