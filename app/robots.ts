import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Use your production URL when deployed, fallback to localhost for testing
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://studylite.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard/", 
        "/api/", 
        "/admin/",
        "/settings/"
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}