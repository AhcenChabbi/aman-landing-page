import { cardVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
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
      viewport={{ once: true, amount: 0.5 }}
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

export default BlogCard;
