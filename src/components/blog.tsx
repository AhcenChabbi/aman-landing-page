"use client";
import { cn } from "@/utils/utils";
import { ChevronsLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  cardVariants,
  containerVariants,
  ctaMobileVariants,
  ctaVariants,
  descriptionVariants,
  titleVariants,
} from "@/lib/variants";
const blogs = [
  {
    img: "/images/blogsImages/blog1.svg",
    date: "28 فبراير 2023",
    title: "1 اسم الموضوع",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد.",
    category: "القسم الذي ينتمي اليه الموضوع",
  },
  {
    img: "/images/blogsImages/blog2.svg",
    date: "28 فبراير 2023",
    title: "2 اسم الموضوع",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد.",
    category: "القسم الذي ينتمي اليه الموضوع",
  },
  {
    img: "/images/blogsImages/blog3.svg",
    date: "28 فبراير 2023",
    title: "3 اسم الموضوع",
    description:
      "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،  مولد النص العربى مفيد.",
    category: "القسم الذي ينتمي اليه الموضوع",
  },
];
const DisplayAllLink = ({
  href,
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      href={href}
      className={cn(
        "group bg-primary flex items-center gap-x-1 rounded-md px-3 py-1.5 transition-colors duration-300 hover:bg-[#FF5200]/80",
        className,
      )}
      {...props}
    >
      عرض الجميع
      <ChevronsLeftIcon className="transition-transform duration-300 group-hover:-translate-x-1" />
    </Link>
  );
};

const BlogCard = ({
  img,
  date,
  title,
  description,
  category,
}: {
  img: string;
  date: string;
  title: string;
  description: string;
  category: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      className="space-y-2"
    >
      <Image
        className="h-48 w-full rounded-lg object-cover"
        src={img}
        width={384}
        height={240}
        alt={title}
      />
      <div className="space-y-2">
        <div className="space-y-1">
          <span className="text-primary text-sm font-semibold">{date}</span>
          <h3 className="text-base font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="text-primary w-fit rounded-full border border-[#FCCEEE] bg-[#FDF2FA] px-2 py-0.5 text-sm">
          {category}
        </div>
      </div>
    </motion.div>
  );
};
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
          >
            المدونة
          </motion.h6>
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
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
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
      >
        <DisplayAllLink
          href="/"
          className="mx-auto w-fit text-white md:hidden"
        />
      </motion.div>
    </section>
  );
}
