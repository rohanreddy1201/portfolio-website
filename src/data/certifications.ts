export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Machine Learning Engineer – Associate",
    image: "/certifications/aws-mle.png",
    link: "https://www.credly.com/badges/5e5045a6-689d-4939-9ab4-9216b2642801/public_url",
    issuedBy: "Amazon Web Services",
    issuedDate: "Dec 2024",
    earlyAdopterBadge: {
      name: "Early Adopter – ML Engineer Associate",
      image: "/certifications/aws-mle-early.png",
      link: "https://www.credly.com/badges/b8e68f44-d709-4668-a9d0-6ce3b4168ae6/public_url",
      issuedDate: "Dec 2024",
    },
  },
  {
    name: "Databricks GenAI Engineer Accreditation",
    image: "/certifications/databricks-genai-fund.png",
    link: "https://www.credential.net/401e9f8b-77b3-4580-a533-d2d892f6b117",
    issuedBy: "Databricks Academy",
    issuedDate: "Jun 2024",
  },
  {
    name: "Databricks Lakehouse Fundamentals Accreditation",
    image: "/certifications/databricks-lake-fund.png",
    link: "https://credentials.databricks.com/",
    issuedBy: "Databricks Academy",
    issuedDate: "Jun 2024",
  },
  {
    name: "Databricks Platform Administrator – Partner Accreditation",
    image: "/certifications/databricks-platform-admin.png",
    link: "https://credentials.databricks.com/",
    issuedBy: "Databricks Partner Academy",
    issuedDate: "May 2025",
  },
];

