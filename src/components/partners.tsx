"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  cardVariants,
  containerVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
import { partnersLogos } from "@/lib/data";

export default function Partners() {
  return (
    <section id="partners" className="space-y-6">
      <div className="space-y-3">
        <motion.h5
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          className="text-right text-2xl font-bold md:text-3xl"
        >
          الشركاء
        </motion.h5>
        <motion.p
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-md text-right text-gray-600"
        >
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، مولد النص العربى مفيد.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="scrollbar-hidden flex justify-between gap-4 overflow-x-scroll"
      >
        {partnersLogos.map((logo) => (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            key={logo.id}
          >
            <Image
              src={logo.src}
              alt={`شعار الشريك ${logo.companyName}`}
              width={170}
              height={170}
              className="size-28 flex-shrink-0 md:size-32"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
