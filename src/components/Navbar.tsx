"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  {
    href: "/",
    label: "Objective",
  },
  {
    href: "/journey",
    label: "Journey",
  },
    {
    href: "/project",
    label: "Why NAINA/TPS-11?",
  },
  {
    href: "/about-gomata",
    label: "About Gomata",
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
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", { method: "POST" });
      if (res.ok) {
        router.push("/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          scroll
          onClick={() => handleLinkClick("/")}
          className="group flex items-center gap-4"
          aria-label="Go to home page"
        >
          <div className="relative h-18 w-18 overflow-hidden rounded-full border border-white/20 shadow-[0_10px_35px_rgba(142,69,133,0.12)] md:h-24 md:w-24">
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
          className={`relative isolate hidden items-center rounded-full border p-1 transition-all duration-300 md:flex ${
            scrolled
              ? "border-[#C8A2C8]/30 bg-white shadow-[0_10px_40px_rgba(142,69,133,0.08)]"
              : "border-[#C8A2C8] bg-white backdrop-blur-md"
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
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.06em] transition-colors duration-300 md:px-3.5 md:py-2 lg:px-4 lg:py-2.5 lg:text-xs xl:text-sm ${
                  isActive
                    ? "bg-[#6105A3] text-white"
                    : "text-[#241F24]/80 hover:text-[#6105A3]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <button
            onClick={handleLogout}
            className="relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.06em] text-[#dc2626] transition-colors duration-300 hover:bg-[#dc2626]/10 cursor-pointer md:px-3.5 md:py-2 lg:px-4 lg:py-2.5 lg:text-xs xl:text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}