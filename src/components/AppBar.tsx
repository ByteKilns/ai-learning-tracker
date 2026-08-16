"use client";

import { usePathname } from "next/navigation";
import { activeNavLink } from "@/lib/nav-links";
import { logout } from "@/lib/auth-actions";
import { Button } from "@/components/ui/button";

export function AppBar() {
  const pathname = usePathname();
  const currentLink = activeNavLink(pathname);
  const pageName = currentLink?.label ?? "AI Engineering Tracker";

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-6">
      <span className="font-medium">{pageName}</span>
      <form action={logout}>
        <Button type="submit" variant="outline" size="sm">
          Log out
        </Button>
      </form>
    </header>
  );
}
