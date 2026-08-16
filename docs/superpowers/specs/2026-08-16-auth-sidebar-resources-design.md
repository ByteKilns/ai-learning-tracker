# Auth, Sidebar & Learn-Section Resources — Design

Date: 2026-08-16

## Purpose

Three additions to the shipped V1 AI Engineering Learning Dashboard:
1. Gate the app behind a shared password (it currently has no auth).
2. Replace the top nav bar with a persistent left sidebar.
3. Show each day's book/video/practice/quiz resources inline under the relevant checklist section (Learn/Build/Check) instead of as a separate card that only appeared on `/day/[id]`.

## 1. Authentication — shared password gate

Single-user personal tool, so this is intentionally lightweight — not multi-account auth, not rate-limited, not rotating sessions. It exists to keep the URL from being usable by a stranger who finds it, not to defend a multi-tenant product.

- New env var `APP_PASSWORD` (same pattern as `MONGODB_URI`): the one password that unlocks the app.
- `src/lib/auth.ts`: a `sha256Hex(value)` helper built on the Web Crypto API (`crypto.subtle.digest`), which is available natively in both the Node.js runtime and the Edge runtime `middleware.ts` runs in — no extra dependency. Also exports `SESSION_COOKIE_NAME` and `isValidSession(cookieValue)` (compares the cookie value to `sha256Hex(APP_PASSWORD)`).
- `src/lib/auth-actions.ts` (`"use server"`): `login(password)` compares the submitted password to `process.env.APP_PASSWORD`; on match, sets an `httpOnly`, `secure`, `sameSite=lax` cookie whose value is `sha256Hex(APP_PASSWORD)`, `maxAge` 30 days, then redirects to `/dashboard`. On mismatch, returns an error the login form displays. `logout()` clears the cookie and redirects to `/login`.
- `src/app/login/page.tsx`: a centered card with a password `Input` (new shadcn component) and a submit button wired to the `login` action.
- `middleware.ts` at the project root: reads the session cookie, calls `isValidSession`; if invalid/missing, redirects to `/login` (preserving the originally-requested path is out of scope — always lands on `/login`, and after login always lands on `/dashboard`). Matcher excludes `/login`, `/_next/*`, and `favicon.ico`.

## 2. Sidebar — replaces the top nav

- `src/components/Sidebar.tsx`: fixed-width left sidebar (client component, uses `usePathname` for active-link styling) with the same five links the top nav had (Today/Roadmap/Resources/Projects/Progress) plus a "Log out" button at the bottom wired to the `logout` server action.
- Route restructure: all authenticated pages (`dashboard/`, `day/[id]/`, `roadmap/`, `resources/`, `projects/`, `progress/`) move under a new route group `src/app/(app)/`, whose `layout.tsx` renders `<Sidebar />` beside `{children}`. Route groups don't change URLs, so `/dashboard` etc. are unaffected.
- `/login` and the root `/` redirect stay directly under `src/app/`, outside the `(app)` group, so the login screen never shows the sidebar.
- No responsive collapse/hamburger behavior in this pass — a fixed always-visible sidebar. This is a scope cut, not an oversight: nothing in the request asked for mobile behavior, and building it now would be speculative.
- `src/components/Nav.tsx` (the old top nav) is deleted; its rendering in the root `layout.tsx` is removed.

## 3. Resources nested into the Learn/Build/Check sections

- `Day.resourceFlow` already conceptually maps to specific checklist sections: `startHere` + `next` are Learn material, `practice` is Build material, `verify` is the Check-section quiz prompt. `project` and `revision` have no associated resource step.
- `DayChecklist` (shared by `/dashboard` and `/day/[id]`) is extended to render, under each section's bullet list, whichever resource step(s) apply to that section — using the existing `ResourceStep` rendering style (icon + label + detail) inline rather than as a separate card.
- `ResourceFlowCard.tsx` and its use in `/day/[id]/page.tsx` are removed — the same information now renders inline in the checklist on both pages, and the dashboard gains resource visibility it didn't have before.

## Explicitly out of scope

- Real user accounts, OAuth, or multi-user support.
- Session refresh/rotation, rate limiting, or lockout after failed attempts.
- Mobile-responsive sidebar (hamburger/collapse).
- Redirecting back to the originally-requested page after login.
