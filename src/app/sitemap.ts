import baseUrl from "@/lib/base-url";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl()}/`,
      lastModified: new Date(),
    },
  ];
}
