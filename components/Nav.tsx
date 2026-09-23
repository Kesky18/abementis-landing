"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className={`flex items-center rounded-lg transition-all duration-300 ${
            scrolled ? "bg-transparent px-0 py-0" : "bg-white/95 px-3 py-1.5 shadow-sm"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Abementis"
            width={500}
            height={500}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </a>
        <div
          className={`hidden items-center gap-8 text-sm font-medium transition-colors duration-300 md:flex ${
            scrolled ? "text-ash" : "text-white"
          }`}
        >
          <a href="#crisis" className={`transition-colors ${scrolled ? "hover:text-navy" : "hover:text-white/70"}`}>
            The crisis
          </a>
          <a href="#approach" className={`transition-colors ${scrolled ? "hover:text-navy" : "hover:text-white/70"}`}>
            Our approach
          </a>
          <a href="#impact" className={`transition-colors ${scrolled ? "hover:text-navy" : "hover:text-white/70"}`}>
            Impact
          </a>
          <a
            href="#involved"
            className={`rounded-sm px-4 py-2 transition-colors ${
              scrolled ? "bg-amber text-navy hover:bg-amberdeep" : "bg-amber text-navy hover:bg-amberdeep"
            }`}
          >
            Get involved
          </a>
        </div>
      </nav>
    </header>
  );
}
