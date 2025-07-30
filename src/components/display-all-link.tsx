import { cn } from "@/utils/utils";
import { ChevronsLeftIcon } from "lucide-react";
import Link from "next/link";

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
export default DisplayAllLink;
