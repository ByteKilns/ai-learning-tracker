import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Today" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
  { href: "/progress", label: "Progress" },
];

export function Nav() {
  return (
    <nav className="border-b bg-background">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
        <span className="font-semibold">AI Engineering Tracker</span>
        <div className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
