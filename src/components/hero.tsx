"use client";
import Image from "next/image";
import JoinLink from "./join-link";
import heroPictureRow from "../../public/images/heroPictureRow.png";
import heroPictureCol from "../../public/images/heroPictureCol.png";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-y-3 py-4 md:flex-row md:justify-between md:py-12">
      <div className="flex flex-col justify-center gap-y-3 text-white">
        <div className="space-y-4 text-center md:text-right">
          <h1 className="text-2xl font-bold md:text-4xl">
            مرحبًا بك في مجتمع أكثر أمانًا!
          </h1>
          <p className="max-w-md text-lg leading-relaxed md:text-xl">
            نسعى في أمان إلى تعزيز مفاهيم السلامة والوعي في مختلف جوانب حياتنا
            اليومية، من خلال مبادرات ومشاريع مبتكرة تسهم في حماية الأفراد
            والمجتمع. انضموا إلينا لبناء مستقبل يسوده الأمان والاستدامة.
          </p>
        </div>
        <JoinLink href="/" className="self-center md:self-start" />
      </div>
      <div>
        <Image
          src={heroPictureRow}
          alt="hero picture"
          width={500}
          className="hidden md:block"
          lang="ar"
        />
        <Image
          src={heroPictureCol}
          alt="hero picture"
          width={350}
          className="h-full md:hidden"
          lang="ar"
        />
      </div>
    </div>
  );
};

export default Hero;
