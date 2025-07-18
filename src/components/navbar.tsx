"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navbarLinks } from "@/lib/data";
import Dropdown from "./dropdown";

const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const linkVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <motion.header className="relative flex items-center justify-between py-2 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
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
      </motion.div>
      <motion.nav
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="hidden items-center gap-x-2 rounded-full border border-white/20 bg-black/20 px-1.5 py-1.5 text-sm shadow-lg backdrop-blur-xl md:flex"
      >
        {navbarLinks.map((link) => (
          <motion.button
            variants={linkVariants}
            key={link.label}
            className="rounded-full transition-colors duration-300 hover:bg-white hover:text-black"
          >
            <Link className="block px-3 py-1.5" href={link.url}>
              {link.label}
            </Link>
          </motion.button>
        ))}
      </motion.nav>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary hidden rounded-full border-2 border-white text-sm transition-colors duration-300 hover:bg-[#FF5200]/80 md:block"
      >
        <Link className="block px-4 py-1.5" href="#contact">
          تواصل معنا
        </Link>
      </motion.button>
      <button
        className="rounded-lg p-1 text-white transition-colors duration-200 hover:bg-white/20 focus:ring-2 focus:ring-white/50 focus:outline-none md:hidden"
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="فتح قائمة الملاحة"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      <Dropdown closeMobileMenu={closeMobileMenu} isMobileMenuOpen />
    </motion.header>
  );
};

export default Navbar;
