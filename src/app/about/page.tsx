import { type Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About – Rohan Loganathan Reddy | ML/AI Engineer · AI Cloud Engineer",
  description:
    "Learn more about Rohan Loganathan Reddy, an Associate AI/ML Engineer and Cloud Architect with a strong track record in LLM research, GenAI application development, and scalable AWS infrastructure deployment.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
