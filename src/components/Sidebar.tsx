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
                  ? "bg-maroon font-medium text-maroon-foreground hover:bg-maroon"
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
