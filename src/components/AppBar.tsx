"use client";

import { usePathname } from "next/navigation";
import { activeNavLink } from "@/lib/nav-links";
import { logout } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

export function AppBar() {
  const pathname = usePathname();
  const currentLink = activeNavLink(pathname);
  const pageName = currentLink?.label ?? "AI Engineering Tracker";

  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between border-b bg-background px-6">
      <span className="font-medium">{pageName}</span>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <form action={logout}>
          <Button type="submit" variant="outline" size="sm">
            Log out
          </Button>
        </form>
      </div>
    </header>
  );
}
