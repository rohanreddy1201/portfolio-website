import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://rohanreddy1201.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/projects", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    })
  );

  // TODO: Add dynamic project routes when individual slugs/pages exist
  // const projectRoutes = projects.map((project) => ({
  //   url: `${baseUrl}/projects/${project.slug}`,
  //   lastModified: project.updatedAt,
  //   changeFrequency: "monthly" as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
}
