import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.VERCEL_PROJECT_PRODUCTION_URL}/`,
      lastModified: new Date(),
    },
  ];
}
