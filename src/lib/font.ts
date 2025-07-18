import localFont from "next/font/local";

export const neoSansArabic = localFont({
  src: [
    {
      path: "../../public/fonts/neo-sans-arabic/NeoSansArabicLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neo-sans-arabic/NeoSansArabicRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neo-sans-arabic/Neo_Sans_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/neo-sans-arabic/NeoSansArabicBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/neo-sans-arabic/NeoSansArabicBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/neo-sans-arabic/NeoSansArabicUltra.ttf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-neo-sans-arabic",
  display: "swap",
});
