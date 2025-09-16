"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  ctaMobileVariants,
  ctaVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
import BlogCard from "./blog-card";
import DisplayAllLink from "./display-all-link";
import { blogs } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="space-y-6 py-10">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <motion.h6
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            className="text-right text-2xl font-bold md:text-3xl"
            viewport={{ once: true, amount: 0.5 }}
          >
            المدونة
          </motion.h6>
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            whileInView="visible"
            className="max-w-md text-right text-gray-600"
            viewport={{ once: true, amount: 0.5 }}
          >
            تابع أحدث المقالات والموضوعات المرتبطة بالسلامة والاستدامة:
          </motion.p>
        </div>
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <DisplayAllLink
            href="/"
            className="hidden w-fit text-white md:flex"
          />
        </motion.div>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        viewport={{ once: true, amount: 0.5 }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.title}
            img={blog.img}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            category={blog.category}
          />
        ))}
      </motion.div>
      <motion.div
        variants={ctaMobileVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <DisplayAllLink
          href="/"
          className="mx-auto w-fit text-white md:hidden"
        />
      </motion.div>
    </section>
  );
}
