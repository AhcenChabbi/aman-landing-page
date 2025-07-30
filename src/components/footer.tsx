import Image from "next/image";
import Link from "next/link";
import { contactInfo, socialMediaLinks } from "@/lib/data";

export default function Footer() {
  return (
    <div
      id="contact"
      className="bg-[url(/images/footerBackground.svg)] px-5 py-12 text-white lg:px-20"
    >
      <footer className="flex flex-col gap-y-8 md:flex-row md:justify-between">
        <div className="space-y-8">
          <div className="space-y-2">
            <Image
              src="/images/logo.svg"
              width={150}
              height={100}
              alt="شعار شركة أمان"
            />
            <p className="max-w-xs text-sm font-extralight">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، مولد النص العربى مفيد.
            </p>
          </div>
          <div className="flex gap-x-5">
            {socialMediaLinks.map(({ id, src, url }) => (
              <Link key={id} href={url}>
                <Image src={src} width={24} height={24} alt={`أيقونة ${id}`} />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-3 md:space-y-0">
          <div className="flex flex-col gap-y-4">
            {contactInfo.map(({ id, icon: Icon, title, description }) => (
              <Card
                key={id}
                Icon={<Icon className="size-6" />}
                title={title}
                description={description}
              />
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 md:text-right">
            جميع الحقوق محفوظة لشركة أمان{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

const Card = ({
  Icon,
  title,
  description,
}: {
  Icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-x-1.5">
      {Icon}
      <div className="space-y-0.5">
        <p className="font-normal">{title}</p>
        <p className="text-sm font-extralight text-gray-400">{description}</p>
      </div>
    </div>
  );
};
