import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "OpenAI API",
      "LangChain",
      "Embeddings & Vector Search",
      "FastAPI",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LLMs & Prompt Engineering",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "Cloud & MLOps",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "AWS ECS, ECR, Fargate",
      "Lambda, Route 53, Secrets Manager",
      "S3, IAM, API Gateway",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "VPC & CloudWatch",
    ],
  },
  {
    name: "Programming & Frameworks",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "C++",
      "SQL",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Node.js",
    ],
  },
  {
    name: "Data Engineering & Infra",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "tRPC + Zod",
      "Data Modeling",
      "Databricks",
      "Plotly Dash",
    ],
  },
];
