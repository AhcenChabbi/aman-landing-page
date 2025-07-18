import { cn } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
type Props = React.ComponentProps<typeof Link>;
export default function JoinLink({ href, className, ...props }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group bg-primary flex items-center gap-x-1 rounded-md px-3 py-1.5 transition-colors duration-300 hover:bg-[#FF5200]/80",
        className,
      )}
      {...props}
    >
      قدم طلب إنضمام
      <ArrowRight className="transition-transform duration-300 group-hover:-rotate-45" />
    </Link>
  );
}
