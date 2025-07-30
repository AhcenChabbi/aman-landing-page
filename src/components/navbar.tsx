"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarLinks } from "@/lib/data";
import Dropdown from "./dropdown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="relative flex items-center justify-between py-2 text-white">
      <div>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="شعار الشركة"
            width={100}
            height={100}
            className="h-8 w-auto md:h-10"
            priority
          />
        </Link>
      </div>
      <nav className="hidden items-center gap-x-2 rounded-full border border-white/20 bg-black/20 px-1.5 py-1.5 text-sm shadow-lg backdrop-blur-xl md:flex">
        {navbarLinks.map((link) => (
          <button
            key={link.label}
            className="rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <Link className="block px-3 py-1.5" href={link.url}>
              {link.label}
            </Link>
          </button>
        ))}
      </nav>

      <Link
        className="bg-primary hidden rounded-full border-2 border-white px-4 py-1.5 text-sm transition-colors duration-300 hover:bg-[#FF5200]/80 md:block"
        href="#contact"
      >
        تواصل معنا
      </Link>
      <button
        className="rounded-lg p-1 text-white transition-colors duration-200 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none md:hidden"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="فتح قائمة الملاحة"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && <Dropdown closeMobileMenu={closeMobileMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
