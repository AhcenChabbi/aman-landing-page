import { cardVariants } from "@/lib/variants";
import { motion } from "framer-motion";

export default function ProjectCard({
  Icon,
  title,
  description,
}: {
  Icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      className="group hover:from-primary space-y-2 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 px-4 py-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-102 hover:to-black/60"
    >
      <div className="text-primary group-hover:from-primary flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 shadow group-hover:to-black/60 group-hover:text-white">
        {Icon}
      </div>
      <p className="font-bold group-hover:text-white">{title}</p>
      <p className="text-sm text-gray-500 group-hover:text-gray-100">
        {description}
      </p>
    </motion.div>
  );
}
