export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rohan Loganathan Reddy",
    url: "https://rohanreddy1201.github.io",
    jobTitle: "AI/ML Engineer & Cloud Solutions Architect",
    description:
      "AI/ML Engineer and Cloud Solutions Architect with expertise in building scalable AI applications, deploying generative AI, and architecting cloud-native infrastructure on AWS. Known for solving real-world efficiency problems through AI innovation.",
    sameAs: [
      "https://github.com/rohanreddy1201",
      "https://linkedin.com/in/roreddy"
    ],
    knowsAbout: [
      "AI/ML Engineering",
      "Generative AI",
      "LangChain & RAG Pipelines",
      "Vector Databases",
      "LLM Evaluation",
      "Cloud Architecture (AWS)",
      "IAM, VPC, ECS, ECR, ALB, Route 53",
      "GitHub Actions CI/CD",
      "Docker",
      "Data Engineering",
      "MLOps",
      "LangChain",
      "OpenAI APIs",
      "Streamlit",
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "React",
      "TailwindCSS",
      "Serverless Computing",
      "Innovation & Automation"
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rohan Reddy - Portfolio",
    url: "https://rohanreddy1201.github.io",
    description:
      "Personal portfolio of Rohan Loganathan Reddy, AI/ML Engineer and Cloud Architect building impactful real-world AI applications, scalable cloud platforms, and intelligent research tools.",
    author: {
      "@type": "Person",
      name: "Rohan Loganathan Reddy",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
