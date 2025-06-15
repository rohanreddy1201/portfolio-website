import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "ADRPredictor: Adverse Drug Reaction Risk Analyzer",
    description:
      "🧠 ADRPredictor uses real-world FAERS data and machine learning to predict serious adverse drug reaction (ADR) risks. Includes local LLM-powered explanations via Ollama.",
    image: "/projects/adrpredictor.png",
    technologies: [
      "scikit-learn",
      "Streamlit",
      "Ollama",
      "SHAP",
      "FAERS",
      "Python",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/adrpredictor",
    },
    featured: true,
  },
  {
    id: "2",
    title: "DiagnoAid: AI-Powered Disease Predictor",
    description:
      "🩺 DiagnoAid is an intelligent medical assistant that uses dual ML models and symptom severity weighting to predict possible diseases. Offers LLM-based explanations and safety tips via Ollama.",
    image: "/projects/diagnoaid.png",
    technologies: [
      "scikit-learn",
      "Streamlit",
      "Ollama",
      "Python",
      "Pandas",
      "FAISS",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/diagnoaid",
    },
    featured: true,
  },
  {
    id: "3",
    title: "DrugCompare: Intelligent Drug Comparison Tool",
    description:
      "💊 DrugCompare allows users to select two approved medications and instantly compare their medical details – including indications, absorption, toxicity, and more – with AI-powered summaries via Ollama.",
    image: "/projects/drugcompare.png",
    technologies: [
      "Pandas",
      "Streamlit",
      "Ollama",
      "Python",
      "DrugBank",
      "LLM",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/drugcompare",
    },
    featured: true,
  },
  {
    id: "4",
    title: "TrialMatchAI: Clinical Trial Eligibility Matcher",
    description:
      "🧪 TrialMatchAI intelligently matches patients with clinical trials using FAISS-based semantic search and LLM-powered eligibility evaluation. It analyzes trial criteria, user conditions, and outputs match scores with reasoning.",
    image: "/projects/trialmatchai.png",
    technologies: [
      "FAISS",
      "SentenceTransformers",
      "Ollama",
      "Streamlit",
      "Python",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/trialmatchai",
    },
    featured: true,
  },
  {
    id: "5",
    title: "PharmaChat: Conversational AI for Drug FAQs",
    description:
      "💬 PharmaChat is a conversational agent trained on pharma regulatory FAQs and medication guides. It can answer user queries around dosages, side effects, and more.",
    image: "/projects/pharmachat.png",
    technologies: [
      "LangChain",
      "OpenAI",
      "RAG",
      "Next.js",
      "TailwindCSS",
      "Vector DB",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/pharma-chat",
    },
    featured: true,
  },
];
