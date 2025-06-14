import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "AutoMeet: AI Meeting Summarizer & Action Tracker",
    description:
      "⚡ AutoMeet takes your meeting recordings or transcripts and transforms them into structured summaries, action items, deadlines, and follow-up emails using zero-shot LLMs. A productivity booster for remote teams and project managers.",
    image: "/projects/automeet.png",
    technologies: [
      "OpenAI",
      "Whisper",
      "LangChain",
      "Streamlit",
      "Pinecone",
      "Slack API",
      "GitHub Actions",
    ],
    category: "AI & Productivity",
    links: {
      github: "https://github.com/rohanreddy1201/automeet",
    },
    featured: true,
  },
  {
    id: "2",
    title: "ContractSense: Smart Contract Explainer for Humans",
    description:
      "📜 ContractSense analyzes Solidity/Vyper smart contracts and provides natural language explanations, highlights risks, and simulates audit feedback — ideal for non-technical users navigating Web3.",
    image: "/projects/contractsense.png",
    technologies: [
      "LangChain",
      "OpenAI GPT-4",
      "Solidity Parser",
      "Streamlit",
      "Chainlink",
      "Foundry",
    ],
    category: "AI & Blockchain",
    links: {
      github: "https://github.com/rohanreddy1201/contractsense",
    },
    featured: true,
  },
  {
    id: "3",
    title: "RentMind: Real Estate Intelligence Agent",
    description:
      "🏠 RentMind lets users paste in any property listing and instantly get neighborhood insights, commute heatmaps, amenity scores, and rent predictions — all powered by AI.",
    image: "/projects/rentmind.png",
    technologies: [
      "OpenAI",
      "LangChain",
      "Google Maps API",
      "Next.js",
      "TailwindCSS",
      "Zillow API",
    ],
    category: "AI & Real Estate",
    links: {
      github: "https://github.com/rohanreddy1201/rentmind",
    },
    featured: true,
  },
  {
    id: "4",
    title: "ResumeLens: Recruiter View Simulator",
    description:
      "🔍 ResumeLens lets job seekers upload their resume and instantly see how it appears to a recruiter. Simulates ATS scoring, suggests rewrites, and matches resumes to job posts using AI.",
    image: "/projects/resumelens.png",
    technologies: [
      "LangChain",
      "OpenAI",
      "Pinecone",
      "pdfminer",
      "HuggingFace",
      "Streamlit",
    ],
    category: "AI & Career Tools",
    links: {
      github: "https://github.com/rohanreddy1201/resumelens",
    },
    featured: true,
  },
  {
    id: "5",
    title: "AaharAI: Indian Meal Nutrition Analyzer",
    description:
      "🍛 AaharAI is a nutrition-focused GenAI tool for Indian cuisine. Upload a photo or meal description to get calorie/macronutrient breakdowns, health tips, and smart alternatives.",
    image: "/projects/aaharai.png",
    technologies: [
      "OpenAI",
      "YOLOv8",
      "LangChain",
      "Streamlit",
      "Nutritionix API",
      "Image-to-Text",
    ],
    category: "AI & Healthcare",
    links: {
      github: "https://github.com/rohanreddy1201/aaharai",
    },
    featured: true,
  },
];
