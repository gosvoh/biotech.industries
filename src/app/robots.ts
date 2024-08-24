import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/opengraph-image",
    },
    sitemap: "https://biotech.industries/sitemap.xml",
  };
}
