
import { ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#171717] px-6 py-12 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row md:items-end">
          <div>
            <a href="#home" className="text-3xl font-bold tracking-tight">
              taskora<span className="text-[#9caf8b]">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
              Make room for better work. Keep your tasks clear and your
              projects moving.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-white/65">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition-colors hover:text-white"
            >
              How it works
            </a>

            <a href="#pricing" className="transition-colors hover:text-white">
              Pricing
            </a>

            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Taskora. All rights reserved.</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
