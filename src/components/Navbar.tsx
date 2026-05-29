"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/about-gomata", label: "About Gomata" },
  { href: "/project", label: "Project" },
  { href: "/near-by-project", label: "Near by Projects" },
  { href: "/indradhanu", label: "Indradhanu" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] px-6 md:px-8 pt-5">
      <div className="mx-auto max-w-[1600px] flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-4 group"
        >
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/20 shadow-[0_10px_35px_rgba(74,37,103,0.12)]">
            
            <Image
              src="/logoo.jpg"
              alt="Gomata Logo"
              fill
              priority
              className="object-cover transform-gpu scale-[1.45] group-hover:scale-[1.52] transition-transform duration-300"
            />
          </div>
        </Link>

        {/* NAVIGATION */}
        <div
          className={`relative isolate hidden md:flex items-center rounded-full p-1.5 border border-[#E7D8A2] transition-all duration-300
  ${
    scrolled
      ? "bg-white shadow-[0_10px_40px_rgba(74,37,103,0.08)]"
      : "bg-[#4A2567]/20 backdrop-blur-xl border-white/20"
  }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                scroll={false}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-300 ${
                  isActive
                    ? "bg-[#4A2567] text-white"
                    : ""
                }`}
              >
                {/* TEXT */}
                <span
                  className={`transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : scrolled
                      ? "text-[#4A2567]/75 hover:text-[#A1268D]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}