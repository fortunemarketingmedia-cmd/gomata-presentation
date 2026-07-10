"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/journey",
    label: "Journey",
  },
  {
    href: "/about-gomata",
    label: "About Gomata",
  },
  {
    href: "/project",
    label: "Project",
  },
  {
    href: "/near-by-project",
    label: "Near by Projects",
  },
  {
    href: "/indradhanu",
    label: "Indradhanu",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    /*
     * Immediately calculate the correct navbar state
     * after every route change.
     */
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    /*
     * usePathname will only change when navigating to a
     * different page. This handles clicking the active
     * page link while already scrolled down.
     */
    if (pathname === href) {
      const html = document.documentElement;
      const previousBehavior = html.style.scrollBehavior;

      html.style.scrollBehavior = "auto";

      window.scrollTo(0, 0);
      html.scrollTop = 0;
      document.body.scrollTop = 0;

      requestAnimationFrame(() => {
        html.style.scrollBehavior = previousBehavior;
      });
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-[1000] px-6 pt-5 md:px-8">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          scroll
          onClick={() => handleLinkClick("/")}
          className="group flex items-center gap-4"
          aria-label="Go to home page"
        >
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-white/20 shadow-[0_10px_35px_rgba(142,69,133,0.12)] md:h-24 md:w-24">
            <Image
              src="/logoo.webp"
              alt="Gomata Logo"
              fill
              priority
              sizes="(min-width: 768px) 96px, 80px"
              className="scale-[1.45] object-cover transition-transform duration-300 group-hover:scale-[1.52]"
            />
          </div>
        </Link>

        {/* Navigation */}
        <div
          className={`relative isolate hidden items-center rounded-full border p-1.5 transition-all duration-300 md:flex ${
            scrolled
              ? "border-[#C8A2C8]/30 bg-white shadow-[0_10px_40px_rgba(142,69,133,0.08)]"
              : "border-white/20 bg-white/80 backdrop-blur-md"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll
                onClick={() => handleLinkClick(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isActive
                    ? "bg-[#6105A3] text-white"
                    : "text-[#241F24]/80 hover:text-[#6105A3]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}