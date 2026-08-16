export const navLinks = [
  { href: "/dashboard", label: "Today" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/projects", label: "Projects" },
  { href: "/progress", label: "Progress" },
];

// Day detail pages are reached from the roadmap, so they count as
// part of the Roadmap section for nav-highlighting purposes.
export function activeNavLink(pathname: string) {
  if (pathname.startsWith("/day")) {
    return navLinks.find((l) => l.href === "/roadmap");
  }
  return navLinks.find((l) => pathname.startsWith(l.href));
}
