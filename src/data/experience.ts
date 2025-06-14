export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Associate AI Cloud Engineer",
    company: "Fipsar",
    location: "Hillsborough, New Jersey",
    startDate: "Feb 2025",
    endDate: "Present",
    isRemote: true,
    achievements: [
      { text: "Spearheaded the full end-to-end deployment of a secure AWS platform for internal AI application development across dev, test, and prod environments." },
      { text: "Implemented robust VPC network infrastructure, IAM policies, ECS (Fargate) integration, ALB-based routing, and container orchestration with ECR + Docker." },
      { text: "Configured secure secrets management using AWS Secrets Manager and Parameter Store, ensuring compliance with best practices." },
      { text: "Worked closely with the internal ML team to support the deployment and scalability of generative AI models, without using frameworks like FastAPI." },
      { text: "Managed DNS routing with Route 53 and architected CI/CD pipelines via GitHub Actions for seamless infrastructure and model deployments." }
    ],
    skills: [
      { name: "AWS" },
      { name: "ECS Fargate" },
      { name: "ECR" },
      { name: "VPC Networking" },
      { name: "IAM" },
      { name: "Route 53" },
      { name: "Secrets Manager" },
      { name: "Docker" },
      { name: "GitHub Actions" },
    ]
  },
  {
    title: "AI Engineer Intern",
    company: "RadicalX AI",
    location: "Remote",
    startDate: "Jun 2024",
    endDate: "Oct 2024",
    isRemote: true,
    achievements: [
      { text: "Developed a full-stack prototype for an LLM-based RAG system integrating OpenAI APIs with FAISS, LangChain, and Python." },
      { text: "Constructed a complete search and question-answering engine using Retrieval-Augmented Generation (RAG) pipelines and vector embeddings from academic corpora." },
      { text: "Integrated LangChain memory, prompt templates, and chaining capabilities for modular experimentation." },
      { text: "Deployed interactive demo environments with Streamlit, allowing fast evaluations and demo sharing." },
      { text: "Implemented modular retrievers, QA chains, and integrated external datasets to assess model generalization." },
      { text: "Optimized latency using OpenAI function-calling and asynchronous execution for sub-second query resolution." }
    ],
    skills: [
      { name: "LangChain" },
      { name: "OpenAI API" },
      { name: "Python" },
      { name: "FAISS" },
      { name: "LLM Apps" },
      { name: "Streamlit" },
      { name: "Vector Search" },
      { name: "RAG Pipelines" },
      { name: "Prompt Engineering" },
    ]
  },
  {
    title: "Graduate Teaching Assistant – Reinforcement Learning",
    company: "Portland State University",
    location: "Portland, Oregon",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    achievements: [
      { text: "Assisted in delivering lectures and designing assignments for the graduate-level Reinforcement Learning course (CS 584)." },
      { text: "Mentored master's students on policy iteration, DQN, and deep RL topics, while grading complex homework and projects." }
    ],
    skills: [
      { name: "Reinforcement Learning" },
      { name: "PyTorch" },
      { name: "TA Mentoring" },
    ]
  },
  {
  title: "Staff Consultant – Business Intelligence & Data Engineer",
  company: "Oracle India Pvt. Ltd.",
  location: "Bengaluru, Karnataka, India",
  startDate: "Sep 2020",
  endDate: "Mar 2023",
  achievements: [
    {
      text: "Led development of Financial BI Reports for Oracle Fusion ERP (Finance, SCM), reducing report generation time by 50% and minimizing errors by 20%."
    },
    {
      text: "Independently designed and deployed key reports including P&L and Cash Flow statements, enhancing billing efficiency and business insight."
    },
    {
      text: "Recognized as the ACE Consultant FY22 for Dubai Holdings for delivering high-impact, scalable ERP reporting solutions and multitasking across verticals."
    },
    {
      text: "Worked with Oracle Cloud Integrations to ingest and integrate third-party datasets into the client’s ERP cloud infrastructure."
    },
    {
      text: "Delivered presentations and collaborated with client-side finance and operations teams to create custom BI and FRS reports for ERP and SCM systems."
    },
    {
      text: "Led Oracle Fusion and SCM Cloud data migrations for global clients such as Bahri Dubai, Computer Share Australia, and Dubai Holdings."
    },
    {
      text: "Improved ETL workflows and automated financial data summaries, enabling faster turnaround and strategic analytics for business decisions."
    }
  ],
  skills: [
    { name: "Oracle Fusion ERP" },
    { name: "Oracle SCM Cloud" },
    { name: "BI Reporting" },
    { name: "Oracle Cloud Integrations" },
    { name: "ETL Pipelines" },
    { name: "Data Analysis" },
    { name: "Data Migration" },
    { name: "Finance & Supply Chain" },
    { name: "FRS Reporting" },
    { name: "Client Engagement" }
  ]
}
];

export const previousExperiences: Experience[] = [
  {
    title: "Software Engineering Intern - Web Development",
    company: "Hiranandani Upscale School",
    location: "Chennai, India",
    startDate: "Jun 2019",
    endDate: "Aug 2019",
    achievements: [
      { text: "Developed the current operational school website from scratch and took it live. Built using Wordpress - Engine & Elementor." }
    ],
    skills: [
      { name: "Android" },
      { name: "Firebase" },
      { name: "Java" },
    ],
  }
];
