
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-tight"
        >
          taskora<span className="text-[#82966e]">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#66665f] transition-colors duration-200 hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#82966e] md:inline-flex"
        >
          Get started
          <ArrowUpRight size={16} />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#f7f7f2] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-sm text-[#55554f] transition-colors hover:text-black"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm text-white"
            >
              Get started
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
