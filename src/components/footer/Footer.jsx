import { navLinks } from "../../data/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-void py-10 text-void-text/60">
      <div className="container-editorial flex flex-col items-center gap-6 border-t border-void-line pt-8 text-sm sm:flex-row sm:justify-between">
        <p>&copy; {year} Pranav Rajkumar Gharge. All rights reserved.</p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-void-text">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-mono text-xs tracking-[0.15em] uppercase">
          Designed &amp; built by Pranav
        </p>
      </div>
    </footer>
  );
}
