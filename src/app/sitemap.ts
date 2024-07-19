import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://biotech.industries";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/technologies`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/consultations`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses/course1`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/courses/course2`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
    },
  ];
}
