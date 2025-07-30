import type { Metadata } from "next";
import "./globals.css";
import { neoSansArabic } from "@/lib/font";
import baseUrl from "@/lib/base-url";

export const metadata: Metadata = {
  title: "Aman | امان",
  description: `مرحبًا بك في مجتمع أكثر أمانًا!
نسعى لتحسين السلامة والوعي في مجتمعاتنا.
انضم إلينا لنبني مستقبلًا أكثر أمانًا للجميع.`,
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
    shortcut: "/images/favicon.svg",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(baseUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${neoSansArabic.className} antialiased`}>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
