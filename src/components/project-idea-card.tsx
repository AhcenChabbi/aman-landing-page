import { cardVariants } from "@/lib/variants";
import { motion } from "framer-motion";

export default function ProjectIdeaCard({
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
      className="group flex gap-x-2 rounded-lg bg-white/10 px-4 py-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#040914]"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="bg-primary flex items-center justify-center self-start rounded-md p-2 text-white shadow">
        {Icon}
      </div>
      <div className="mt-1.5 flex-1 space-y-1">
        <h3 className="font-semibold group-hover:text-white">{title}</h3>
        <p className="text-sm text-gray-600 group-hover:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
