"use client";
import { Building } from "lucide-react";
import Image from "next/image";
import JoinLink from "./join-link";
import { motion } from "framer-motion";
import { ctaMobileVariants } from "@/lib/variants";
const WORKSHOP_DATA = {
  title: "ورش العمل",
  description: (
    <>
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
      من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
      الأخرى
      <br />
      <br />
      إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر
      من الفقرات
    </>
  ),
  tags: [
    { id: "1", icon: Building, title: "1 عنوان العنصر" },
    { id: "2", icon: Building, title: "2 عنوان العنصر" },
    { id: "3", icon: Building, title: "3 عنوان العنصر" },
    { id: "4", icon: Building, title: "4 عنوان العنصر" },
  ],
  ctaText: "قدم طلب إنضمام",
  ctaLink: "/",
  image: "/images/workshopPicture.svg",
};

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
          className="space-y-3"
        >
          <div className="relative space-y-1.5">
            <div className="flex gap-x-2">
              <h4 className="text-right text-2xl font-bold md:text-3xl">
                {WORKSHOP_DATA.title}
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
              {WORKSHOP_DATA.description}
            </p>
          </div>
          <div className="flex max-w-md flex-wrap gap-x-2 gap-y-3">
            {WORKSHOP_DATA.tags.map(({ icon: Icon, id, title }) => (
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
        >
          <Image
            src="/images/workshopPicture.svg"
            alt="صورة توضيحية لورش العمل"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          variants={ctaMobileVariants}
          initial="hidden"
          whileInView="visible"
        >
          <JoinLink href="/" className="mx-auto w-fit text-white md:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
