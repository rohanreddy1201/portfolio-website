import { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Rohan Loganathan Reddy",
  description:
    "Explore real-world impactful projects in AI/ML, generative AI, intelligent systems, and cloud-native solutions, built and deployed by Rohan Loganathan Reddy.",
};

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-[58rem] space-y-6">
        <h1 className="font-heading text-4xl font-bold md:text-6xl">
          Projects
        </h1>
        <p className="text-xl text-muted-foreground">
          A collection of cutting-edge projects built to solve real-world
          efficiency problems — spanning AI/ML, cloud engineering, LLM apps,
          intelligent automation, and impactful research platforms.
        </p>
      </div>
      <div className="mt-16">
        <ProjectGrid projects={projectsData} />
      </div>
    </div>
  );
}
