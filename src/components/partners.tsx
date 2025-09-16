"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
import { partnersLogos } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="space-y-6 py-8">
      <div className="space-y-3">
        <motion.h5
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          className="text-right text-2xl font-bold md:text-3xl"
          viewport={{ once: true, amount: 0.5 }}
        >
          الشركاء
        </motion.h5>
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-md text-right text-gray-600"
          viewport={{ once: true, amount: 0.5 }}
        >
          يعمل أمان بالشراكة مع مؤسسات وهيئات وطنية ودولية لتحقيق أهداف مشتركة
          في نشر ثقافة السلامة وتعزيز الوعي المجتمعي.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="scrollbar-hidden flex items-center justify-between gap-x-4 overflow-x-scroll"
        viewport={{ once: true, amount: 0.5 }}
      >
        {partnersLogos.map((logo) => (
          <Image
            key={logo.id}
            src={logo.src}
            alt={`شعار الشريك ${logo.companyName}`}
            width={170}
            height={170}
            className="size-28 flex-shrink-0 md:size-32"
          />
        ))}
      </motion.div>
    </section>
  );
}
