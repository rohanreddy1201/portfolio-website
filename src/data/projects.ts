import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "DrugEffectML: Predicting Adverse Drug Reactions",
    description:
      "⚕️ DrugEffectML is a core ML model that predicts adverse drug reactions (ADRs) by training on patient history and pharmaceutical datasets. It helps clinicians avoid risky prescriptions.",
    image: "/projects/adrpredictor.png",
    technologies: [
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "Seaborn",
      "PubMed Data",
      "Jupyter",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/drug-effect-ml",
    },
    featured: true,
  },
  {
    id: "2",
    title: "PharmaSalesForecast: Time-Series Demand Prediction",
    description:
      "📈 Forecasts medicine sales across regions using ARIMA, Prophet, and LSTM models. Helps pharmaceutical companies optimize inventory and reduce waste in the supply chain.",
    image: "/projects/pharmasales.png",
    technologies: [
      "Prophet",
      "LSTM",
      "ARIMA",
      "Python",
      "TensorFlow",
      "Pandas",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/pharma-sales-forecast",
    },
    featured: true,
  },
  {
    id: "3",
    title: "MediClassify: Multi-Class Disease Diagnosis",
    description:
      "🧬 MediClassify trains multi-class classification models to diagnose diseases from patient lab data. Optimized for recall to minimize false negatives in critical conditions.",
    image: "/projects/mediclassify.png",
    technologies: [
      "LightGBM",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
      "MLflow",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/medi-classify",
    },
    featured: true,
  },
  {
    id: "4",
    title: "TrialMatchAI: Clinical Trial Eligibility Matcher",
    description:
      "🧪 TrialMatchAI uses NLP to parse clinical trial criteria and match them with patient profiles. Great for accelerating patient recruitment in trials.",
    image: "/projects/trialmatchai.png",
    technologies: [
      "spaCy",
      "Transformers",
      "HuggingFace",
      "FastAPI",
      "Pinecone",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/trialmatch-ai",
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
