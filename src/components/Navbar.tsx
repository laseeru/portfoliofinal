import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CV_URL, navItems, profile } from "@/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <nav aria-label="Main" className="page-container flex h-16 items-center justify-between">
        <a href="/#top" className="font-serif text-lg font-medium tracking-tight text-foreground" onClick={() => setIsOpen(false)}>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`/#${item.id}`} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={CV_URL} target="_blank" rel="noopener" className="btn-outline h-9 px-4">
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="page-container py-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} onClick={() => setIsOpen(false)} className="block py-3 text-base text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={CV_URL} target="_blank" rel="noopener" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium text-accent">
                View CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
