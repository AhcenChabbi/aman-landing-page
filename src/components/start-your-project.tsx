"use client";
import JoinLink from "./join-link";
import { motion } from "framer-motion";
import {
  containerVariants,
  ctaMobileVariants,
  ctaVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
import { projectsIdeas } from "@/lib/data";
import ProjectIdeaCard from "./project-idea-card";

export default function StartYourProject() {
  return (
    <section id="startyourproject" className="space-y-6 py-8">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            className="text-right text-2xl font-bold md:text-3xl"
            viewport={{ once: true, amount: 0.5 }}
          >
            ابدأ مشروعك
          </motion.h3>
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            className="max-w-md text-right text-gray-600"
            viewport={{ once: true, amount: 0.5 }}
          >
            شاركنا فكرتك نحو مجتمع أكثر أماناً نوفر الفرصة للمبدعين وأصحاب
            الأفكار لتقديم مقترحات تسهم في تعزيز الأمن والسلامة.
          </motion.p>
        </div>
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <JoinLink href="/" className="hidden w-fit text-white md:flex" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        viewport={{ once: true, amount: 0.5 }}
      >
        {projectsIdeas.map((project) => (
          <ProjectIdeaCard
            key={project.title}
            Icon={<project.Icon className="h-6 w-6" />}
            title={project.title}
            description={project.description}
          />
        ))}
      </motion.div>
      <motion.div
        variants={ctaMobileVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <JoinLink href="/" className="mx-auto w-fit text-white md:hidden" />
      </motion.div>
    </section>
  );
}
