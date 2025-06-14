import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rohan Loganathan Reddy – AI/ML Engineer & Cloud Solutions Architect",
  description:
    "Portfolio of Rohan Loganathan Reddy, an AI/ML Engineer and Cloud Architect specializing in LLM applications, GenAI research, and scalable AWS-based deployments. Proven expertise in infrastructure automation, vector search, and production-grade AI systems.",
  openGraph: {
    type: 'website',
    title: 'Rohan Loganathan Reddy – AI/ML Engineer & Cloud Solutions Architect',
    description:
      'Portfolio of Rohan Loganathan Reddy, an AI/ML Engineer and Cloud Architect specializing in LLM applications, GenAI research, and scalable AWS-based deployments.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Rohan Loganathan Reddy - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Loganathan Reddy – AI/ML Engineer & Cloud Solutions Architect',
    description:
      'Portfolio of Rohan Loganathan Reddy, an AI/ML Engineer and Cloud Architect specializing in LLM applications, GenAI research, and scalable AWS-based deployments.',
    images: ['/screenshots/hero-preview.png']
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
