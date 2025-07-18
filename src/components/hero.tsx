"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import JoinLink from "./join-link";
const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center gap-y-3 py-4 md:flex-row md:justify-between md:py-12">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex flex-col justify-center gap-y-3 text-white"
      >
        <div className="space-y-4 text-center md:text-right">
          <h1 className="text-2xl font-bold md:text-4xl">
            مرحبًا بك في مجتمع أكثر أمانًا!
          </h1>
          <p className="text-lg leading-relaxed md:text-xl">
            نسعى لتحسين السلامة والوعي في مجتمعاتنا.
            <br />
            انضم إلينا لنبني مستقبلًاأكثر أمانًا للجميع.
          </p>
        </div>
        <JoinLink href="/" className="self-center md:self-start" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src="/images/heroPictureRow.svg"
          alt="hero picture"
          width={500}
          height={500}
          className="hidden md:block"
          lang="ar"
        />
        <Image
          src="/images/heroPictureCol.svg"
          alt="hero picture"
          width={350}
          height={350}
          className="h-full md:hidden"
          lang="ar"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
