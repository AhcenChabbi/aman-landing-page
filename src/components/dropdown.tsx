import { navbarLinks } from "@/lib/data";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

const mobileLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const mobileStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
export default function Dropdown({
  isMobileMenuOpen,
  closeMobileMenu,
}: {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
}) {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          id="mobile-menu"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full right-0 left-0 z-40 mt-2 md:hidden"
        >
          <motion.nav
            variants={mobileStaggerContainer}
            initial="hidden"
            animate="visible"
            className="rounded-2xl border border-white/20 bg-black/90 shadow-xl backdrop-blur-xl"
          >
            <div className="space-y-1 p-4">
              {navbarLinks.map((link) => (
                <motion.div key={link.label} variants={mobileLinkVariants}>
                  <Link
                    href={link.url}
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3 text-white transition-colors duration-300 hover:bg-white/10 active:bg-white/20"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={mobileLinkVariants}
                className="border-t border-white/20 pt-2"
              >
                <Link
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="bg-primary block rounded-xl px-4 py-3 text-center transition-colors duration-300 hover:bg-[#FF5200]/80"
                >
                  تواصل معنا
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
