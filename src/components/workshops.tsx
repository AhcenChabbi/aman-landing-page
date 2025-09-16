"use client";
import Image from "next/image";
import JoinLink from "./join-link";
import { motion } from "framer-motion";
import { ctaMobileVariants } from "@/lib/variants";
import workshopPicture from "../../public/images/workshopPicture.png";
import { workshopTags } from "@/lib/data";

export default function Workshops() {
  return (
    <section id="workshops" className="flex justify-center py-12">
      <div className="flex flex-col items-center lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-3"
        >
          <div className="relative space-y-1.5">
            <div className="flex gap-x-2">
              <h4 className="text-right text-2xl font-bold md:text-3xl">
                ورش العمل
              </h4>
              <Image
                src="images/arrow.svg"
                width={80}
                height={80}
                alt="arrow"
                className="hidden md:block"
              />
            </div>
            <p className="max-w-md text-right text-gray-600">
              نقدّم برامج تدريبية وورش عمل متخصصة تهدف إلى بناء القدرات وتزويد
              المشاركين بالمهارات الأساسية في مجال السلامة العامة وإدارة
              المخاطر.
            </p>
          </div>
          <div className="flex max-w-md flex-wrap gap-x-2 gap-y-3">
            {workshopTags.map(({ icon: Icon, id, title }) => (
              <div key={id} className="flex items-center gap-x-1">
                <div className="text-primary rounded-full bg-white p-2 shadow">
                  <Icon />
                </div>
                <span className="text-sm">{title}</span>
              </div>
            ))}
          </div>
          <JoinLink href="/" className="hidden w-fit text-white md:flex" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={workshopPicture}
            alt="صورة توضيحية لورش العمل"
            width={500}
            placeholder="blur"
          />
        </motion.div>
        <motion.div
          variants={ctaMobileVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <JoinLink href="/" className="mx-auto w-fit text-white md:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
