import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Rohan Reddy",
    default: "Rohan Reddy – ML/AI Engineer & Cloud Architect",
  },
  description:
    "AI/ML Engineer and Cloud Solutions Architect with expertise in LLM applications, GenAI research, and full-scale AWS DevOps infrastructure.",
  icons: {
    icon: '/headshot/headshot-2024.png',
    apple: '/headshot/headshot-2024.png',
  },
  openGraph: {
    type: 'website',
    title: 'Rohan Reddy – ML/AI Engineer & Cloud Architect',
    description: 'AI/ML Engineer and Cloud Solutions Architect with expertise in LLM applications, GenAI research, and full-scale AWS DevOps infrastructure.',
    images: [{
      url: '/screenshots/hero-preview.png',
      width: 1200,
      height: 630,
      alt: 'Rohan Reddy - Portfolio Hero Section'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Reddy – ML/AI Engineer & Cloud Architect',
    description: 'AI/ML Engineer and Cloud Solutions Architect with expertise in LLM applications, GenAI research, and full-scale AWS DevOps infrastructure.',
    images: ['/screenshots/hero-preview.png']
  },
  keywords: [
    "LLM Engineer",
    "AI Cloud Engineer",
    "AWS DevOps",
    "AWS ECS Fargate",
    "VPC Networking",
    "LangChain",
    "Generative AI",
    "Large Language Models",
    "Streamlit",
    "OpenAI",
    "ML Engineering",
    "FAISS",
    "Python",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Secrets Manager",
    "Oracle Cloud",
    "Data Engineering",
    "BI Reports",
    "ERP Analytics",
    "Cloud Infrastructure",
    "Vector Search",
    "PostgreSQL",
    "Data Pipelines",
    "Graduate Research",
    "Reinforcement Learning",
    "PyTorch",
    "RAG Pipelines",
    "Semantic Search",
    "AWS Architect",
    "Cloud Automation",
    "Multi-environment Deployment",
  ],
  authors: [{ name: "Rohan Loganathan Reddy" }],
  creator: "Rohan Loganathan Reddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
