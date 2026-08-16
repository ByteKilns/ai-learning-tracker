"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-56 shrink-0 flex-col gap-6 overflow-y-auto border-r bg-background p-4">
      <div className="font-semibold">AI Engineering Tracker</div>
      <nav className="flex flex-col gap-1 text-sm">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "rounded-md px-3 py-2 hover:bg-accent",
              pathname.startsWith(l.href)
                ? "bg-maroon font-medium text-maroon-foreground hover:bg-maroon"
                : "text-muted-foreground",
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
