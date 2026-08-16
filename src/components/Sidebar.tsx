"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, activeNavLink } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const active = activeNavLink(pathname);

  return (
    <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col gap-6 overflow-y-auto border-r border-sidebar-border bg-sidebar p-4 text-sidebar-foreground">
      <div className="font-semibold">AI Engineering Tracker</div>
      <nav className="flex flex-col gap-1 text-sm">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "rounded-md px-3 py-2 hover:bg-sidebar-accent",
              l.href === active?.href
                ? "bg-maroon font-medium text-maroon-foreground hover:bg-maroon"
                : "text-sidebar-foreground/70",
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
