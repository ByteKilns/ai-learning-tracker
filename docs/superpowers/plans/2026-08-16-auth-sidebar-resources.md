# Auth, Sidebar & Learn-Section Resources Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a shared-password gate, replace the top nav with a sidebar, and show each day's resources inline under the Learn/Build/Check checklist sections instead of a separate card.

**Architecture:** A `middleware.ts` password gate backed by a SHA-256'd cookie (Web Crypto, no new dependency). Authenticated pages move under a `(app)` route group whose layout renders a new `Sidebar`. `DayChecklist` gains inline resource rendering per section, and `ResourceFlowCard` is deleted.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind, shadcn/ui (`input` added), Web Crypto API.

**Reference spec:** `docs/superpowers/specs/2026-08-16-auth-sidebar-resources-design.md`

---

## File Structure

```
ai-learning-tracker/
  middleware.ts                        # new: password-gate all routes except /login
  .env.example                         # modified: add APP_PASSWORD
  src/
    lib/
      auth.ts                          # new: sha256Hex, SESSION_COOKIE_NAME, isValidSession
      auth-actions.ts                  # new: login(), logout() server actions
    components/
      Sidebar.tsx                      # new: replaces Nav
      Nav.tsx                          # deleted
      DayChecklist.tsx                 # modified: inline resource rendering
      ResourceFlowCard.tsx             # deleted
    app/
      layout.tsx                       # modified: drop <Nav/>, keep only html/body shell
      login/
        page.tsx                       # new
      (app)/
        layout.tsx                     # new: renders <Sidebar/> + {children}
        dashboard/page.tsx             # moved (unchanged content)
        day/[id]/page.tsx              # moved + modified: drop ResourceFlowCard usage
        roadmap/page.tsx               # moved (unchanged content)
        resources/page.tsx             # moved (unchanged content)
        projects/page.tsx              # moved (unchanged content)
        progress/page.tsx              # moved (unchanged content)
```

---

### Task 1: Auth helpers and login/logout server actions

**Files:**
- Create: `src/lib/auth.ts`
- Create: `src/lib/auth-actions.ts`
- Modify: `.env.example`

- [ ] **Step 1: Write the shared auth helper**

```ts
// src/lib/auth.ts
export const SESSION_COOKIE_NAME = "atk_session";

export async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function isValidSession(cookieValue: string | undefined): Promise<boolean> {
  if (!cookieValue) return false;
  const appPassword = process.env.APP_PASSWORD;
  if (!appPassword) return false;
  const expected = await sha256Hex(appPassword);
  return cookieValue === expected;
}
```

- [ ] **Step 2: Write the login/logout server actions**

```ts
// src/lib/auth-actions.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME, sha256Hex } from "./auth";

export async function login(
  _prevState: { error: string | null },
  formData: FormData,
): Promise<{ error: string | null }> {
  const password = String(formData.get("password") ?? "");
  const appPassword = process.env.APP_PASSWORD;

  if (!appPassword || password !== appPassword) {
    return { error: "Incorrect password" };
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, await sha256Hex(appPassword), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  redirect("/dashboard");
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  redirect("/login");
}
```

- [ ] **Step 3: Add `APP_PASSWORD` to the env example**

```bash
# .env.example (append)
APP_PASSWORD=choose-a-password
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/lib/auth.ts src/lib/auth-actions.ts .env.example
git commit -m "Add password-gate auth helpers and login/logout server actions"
```

---

### Task 2: Login page

**Files:**
- Create: `src/app/login/page.tsx`

- [ ] **Step 1: Add the shadcn Input component**

```bash
npx shadcn@latest add input
```

- [ ] **Step 2: Write the login page**

```tsx
// src/app/login/page.tsx
"use client";

import { useActionState } from "react";
import { login } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, { error: null });

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>AI Engineering Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoFocus
              required
            />
            {state.error && (
              <div className="text-sm text-destructive">{state.error}</div>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 3: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/login components/ui 2>/dev/null; git add -A src/app/login src/components/ui
git commit -m "Add login page"
```

---

### Task 3: Middleware password gate

**Files:**
- Create: `middleware.ts` (project root, alongside `package.json`)

- [ ] **Step 1: Write the middleware**

```ts
// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, isValidSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const authenticated = await isValidSession(cookieValue);

  if (!authenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico).*)"],
};
```

- [ ] **Step 2: Verify unauthenticated requests redirect and authenticated ones pass**

Set a temporary test password and confirm the gate works end to end:

```bash
echo "APP_PASSWORD=test-password-123" >> .env.local
echo "MONGODB_URI=<your-real-atlas-uri>" >> .env.local   # skip if already present
npm run dev -- --port 4010 &
sleep 4
curl -s -o /dev/null -w "unauthenticated /dashboard -> %{http_code}\n" http://localhost:4010/dashboard
curl -s -o /dev/null -w "unauthenticated /login -> %{http_code}\n" http://localhost:4010/login
kill %1
```

Expected: `/dashboard` returns `307` (redirect) or the final `200` if curl follows redirects to `/login`; `/login` itself returns `200` directly (not redirected, since it's excluded from the matcher).

- [ ] **Step 3: Commit**

```bash
git add middleware.ts
git commit -m "Add middleware password gate"
```

---

### Task 4: Sidebar component

**Files:**
- Create: `src/components/Sidebar.tsx`
- Delete: `src/components/Nav.tsx`

- [ ] **Step 1: Write the sidebar**

```tsx
// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/dashboard", label: "Today" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
  { href: "/progress", label: "Progress" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-56 shrink-0 flex-col justify-between border-r bg-background p-4">
      <div className="space-y-6">
        <div className="font-semibold">AI Engineering Tracker</div>
        <nav className="flex flex-col gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 hover:bg-accent",
                pathname.startsWith(l.href)
                  ? "bg-accent font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <form action={logout}>
        <Button type="submit" variant="outline" className="w-full">
          Log out
        </Button>
      </form>
    </aside>
  );
}
```

- [ ] **Step 2: Delete the old top nav**

```bash
rm src/components/Nav.tsx
```

- [ ] **Step 3: Type-check (expect a failure — layout.tsx still imports Nav)**

```bash
npx tsc --noEmit
```

Expected: FAIL — `Cannot find module '@/components/Nav'` referenced from `src/app/layout.tsx`. This gets fixed in Task 5.

- [ ] **Step 4: Commit**

```bash
git add src/components/Sidebar.tsx
git rm src/components/Nav.tsx
git commit -m "Add sidebar component, remove old top nav"
```

---

### Task 5: Route restructure — `(app)` route group with sidebar layout

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/(app)/layout.tsx`
- Move: `src/app/dashboard/` → `src/app/(app)/dashboard/`
- Move: `src/app/day/` → `src/app/(app)/day/`
- Move: `src/app/roadmap/` → `src/app/(app)/roadmap/`
- Move: `src/app/resources/` → `src/app/(app)/resources/`
- Move: `src/app/projects/` → `src/app/(app)/projects/`
- Move: `src/app/progress/` → `src/app/(app)/progress/`

- [ ] **Step 1: Move the six route folders under a new `(app)` route group**

```bash
mkdir -p "src/app/(app)"
git mv src/app/dashboard "src/app/(app)/dashboard"
git mv src/app/day "src/app/(app)/day"
git mv src/app/roadmap "src/app/(app)/roadmap"
git mv src/app/resources "src/app/(app)/resources"
git mv src/app/projects "src/app/(app)/projects"
git mv src/app/progress "src/app/(app)/progress"
```

- [ ] **Step 2: Write the `(app)` group layout**

```tsx
// src/app/(app)/layout.tsx
import { Sidebar } from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-1">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
```

- [ ] **Step 3: Simplify the root layout (drop `<Nav/>`, keep only the html/body shell)**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineering Tracker",
  description: "75-day AI/ML/LLM learning dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors (the Task 4 failure is now resolved since `layout.tsx` no longer imports `Nav`).

- [ ] **Step 5: Commit**

```bash
git add -A src/app
git commit -m "Move authenticated routes under (app) route group with sidebar layout"
```

---

### Task 6: Inline resources in the Learn/Build/Check checklist sections

**Files:**
- Modify: `src/components/DayChecklist.tsx`
- Modify: `src/app/(app)/day/[id]/page.tsx`
- Delete: `src/components/ResourceFlowCard.tsx`

- [ ] **Step 1: Extend `DayChecklist` to render each section's resource step(s)**

```tsx
// src/components/DayChecklist.tsx
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { toggleSection } from "@/lib/actions";
import type { Day, ResourceStep, SectionKey } from "@/lib/types";
import { useTransition } from "react";

const SECTION_LABELS: Record<SectionKey, string> = {
  learn: "Learn",
  build: "Build",
  project: "Project",
  revision: "Revision",
  check: "Check",
};

function resourceStepsFor(day: Day, key: SectionKey): ResourceStep[] {
  switch (key) {
    case "learn":
      return [day.resourceFlow.startHere, day.resourceFlow.next].filter(
        (step): step is ResourceStep => step !== null,
      );
    case "build":
      return [day.resourceFlow.practice];
    case "check":
      return [day.resourceFlow.verify];
    default:
      return [];
  }
}

export function DayChecklist({
  day,
  sectionsDone,
}: {
  day: Day;
  sectionsDone: Record<SectionKey, boolean>;
}) {
  const [isPending, startTransition] = useTransition();
  const keys: SectionKey[] = ["learn", "build", "project", "revision", "check"];

  return (
    <div className="space-y-3">
      {keys.map((key) => {
        const resourceSteps = resourceStepsFor(day, key);
        return (
          <label key={key} className="flex items-start gap-3 rounded-md border p-3">
            <Checkbox
              checked={sectionsDone[key]}
              disabled={isPending}
              onCheckedChange={(checked) =>
                startTransition(() => toggleSection(day.day, key, checked === true))
              }
            />
            <div className="flex-1">
              <div className="font-medium">
                {SECTION_LABELS[key]} — {day.sections[key].durationMin} min
              </div>
              <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                {day.sections[key].items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {resourceSteps.length > 0 && (
                <div className="mt-2 space-y-1 border-t pt-2">
                  {resourceSteps.map((step, i) => (
                    <div key={i} className="text-sm">
                      <span>{step.icon}</span>{" "}
                      <span className="font-medium">{step.label}:</span>{" "}
                      <span className="text-muted-foreground">{step.detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </label>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Remove `ResourceFlowCard` usage from the day detail page**

```tsx
// src/app/(app)/day/[id]/page.tsx
import { notFound } from "next/navigation";
import { days } from "@/data/days";
import { getDayProgress } from "@/lib/actions";
import { DayChecklist } from "@/components/DayChecklist";
import { CompleteDayDialog } from "@/components/CompleteDayDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const dynamic = "force-dynamic";

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dayNum = Number(id);
  const day = days.find((d) => d.day === dayNum);
  if (!day) notFound();

  const progressDoc = await getDayProgress(day.day);
  const sectionsDone = {
    learn: progressDoc?.learn ?? false,
    build: progressDoc?.build ?? false,
    project: progressDoc?.project ?? false,
    revision: progressDoc?.revision ?? false,
    check: progressDoc?.check ?? false,
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>
            Day {day.day} / 75 — {day.focus}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Phase {day.phaseNumber}: {day.phaseName} · Skill pillar: {day.skillPillar}
          </div>
          <DayChecklist day={day} sectionsDone={sectionsDone} />
          <CompleteDayDialog day={day.day} />
        </CardContent>
      </Card>
    </div>
  );
}
```

- [ ] **Step 3: Delete the now-unused resource flow card**

```bash
git rm src/components/ResourceFlowCard.tsx
```

- [ ] **Step 4: Type-check**

```bash
npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/DayChecklist.tsx "src/app/(app)/day/[id]/page.tsx"
git commit -m "Nest Learn/Build/Check resources inline in the day checklist"
```

---

### Task 7: Full verification and manual pass

**Files:** none (verification only)

- [ ] **Step 1: Full check sequence**

```bash
npx tsc --noEmit
npm test
npm run build
```

Expected: all three succeed. `npm run build`'s route table should show `/login` as static (○) and the `(app)` group routes as dynamic (ƒ), same as before the restructure — route groups don't change this.

- [ ] **Step 2: Manual browser pass**

With `APP_PASSWORD` and `MONGODB_URI` set in `.env.local`:

```bash
npm run dev
```

Open http://localhost:3000 — expect a redirect to `/login`. Enter the wrong password — expect an inline "Incorrect password" message and no redirect. Enter the correct password — expect a redirect to `/dashboard` with the sidebar visible, and the Learn section showing its resource step(s) inline. Click "Log out" — expect a redirect back to `/login`, and confirm `/dashboard` is inaccessible again until logging back in.

- [ ] **Step 3: Commit any fixes found during the manual pass, otherwise no commit needed for this task.**

---

## Self-review notes

- **Spec coverage:** password gate (Task 1–3), sidebar replacing top nav (Task 4–5), Learn/Build/Check inline resources (Task 6) are each covered.
- **Type consistency:** `SESSION_COOKIE_NAME`, `isValidSession`, `sha256Hex` defined once in `src/lib/auth.ts` (Task 1) and reused with matching names in `auth-actions.ts` and `middleware.ts` (Tasks 1 and 3). `ResourceStep` reused from existing `src/lib/types.ts` — no new type needed.
- **Placeholder scan:** no TBD/TODO; every step has runnable code or an exact command with expected output.
