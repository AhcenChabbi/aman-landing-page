"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
import { projects } from "@/lib/data";
import ProjectCard from "./project-card";

export default function InnovationProjects() {
  return (
    <section id="projects" className="space-y-4 py-12">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-right text-2xl font-bold md:text-3xl"
      >
        مشاريع الابتكار
      </motion.h2>
      <motion.p
        variants={descriptionVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-md text-right text-gray-600"
        viewport={{ once: true, amount: 0.5 }}
      >
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، مولد النص العربى مفيد.
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        viewport={{ once: true, amount: 0.5 }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            Icon={<project.Icon className="h-6 w-6" />}
            title={project.title}
            description={project.description}
          />
        ))}
      </motion.div>
    </section>
  );
}
