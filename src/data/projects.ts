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
    title: "Gemini Quizify: AI‑Powered Quiz Builder",
    description:
      "📝 Gemini Quizify generates custom multiple‑choice quizzes from any document or topic using Google Gemini & Vertex AI embeddings. Built with LangChain and Streamlit, it offers interactive quiz navigation and answer explanations.",
    image: "/projects/gemini-quizify.png",
    technologies: [
      "Google Gemini",
      "VertexAI",
      "LangChain",
      "ChromaDB",
      "Streamlit",
      "Python",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/gemini-quizify",
    },
    featured: true,
  },
  {
    id: "6",
    title: "Movie Recommendation System",
    description:
      "🎬 Personalized movie recommender using collaborative and content-based filtering with user feedback loop. Built with Python, Pandas, scikit-learn, and Streamlit.",
    image: "/projects/movie-recommender.png",
    technologies: [
      "Python",
      "Pandas",
      "scikit-learn",
      "Streamlit",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/Movie-Recommendation-System",
    },
    featured: false,
  },
  {
    id: "7",
    title: "Financial Dashboard",
    description:
      "📊 Interactive financial dashboard providing stock & crypto tracking, portfolio analytics and news aggregation. Built with Streamlit and Plotly.",
    image: "/projects/financial-dashboard.png",
    technologies: [
      "Streamlit",
      "Pandas",
      "Plotly",
      "Finance APIs",
      "Python",
    ],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/Financial-Dashboard",
    },
    featured: false,
  },
  {
    id: "8",
    title: "AI Chatbot",
    description:
      "🤖 AI-powered conversational agent with intent recognition and context persistence. Built with NLP, Rasa, or similar frameworks and Python backend.",
    image: "/projects/ai-chatbot.png",
    technologies: ["Python", "NLP", "Rasa", "Streamlit"],
    category: "AI Tools",
    links: {
      github: "https://github.com/rohanreddy1201/AI-Chatbot",
    },
    featured: false,
  },
  {
    id: "9",
    title: "Housing Price Predictor",
    description:
      "🏠 Housing price prediction model using regression algorithms on real estate datasets. Includes evaluation metrics and feature analysis.",
    image: "/projects/housing-price-predictor.png",
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
    category: "Machine Learning",
    links: {
      github:
        "https://github.com/rohanreddy1201/Housing-Price-Predictor",
    },
    featured: false,
  },
  {
    id: "10",
    title: "Diabetes Onset Predictor",
    description:
      "💡 Predicts diabetes onset using clinical indicators and multiple ML models. Includes evaluation and ROC analysis for model performance.",
    image: "/projects/diabetes-onset-predictor.png",
    technologies: [
      "Python",
      "scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
    category: "Machine Learning",
    links: {
      github:
        "https://github.com/rohanreddy1201/diabetes-onset-predictor",
    },
    featured: false,
  },
  {
    id: "11",
    title: "Video Object Filter Detection App",
    description:
      "🎥 Video stream object detection and filtering application using OpenCV and TensorFlow. Includes real-time filters and detections.",
    image: "/projects/video-obj-filter.png",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
    ],
    category: "Machine Learning",
    links: {
      github:
        "https://github.com/rohanreddy1201/video-obj-filter-detection-application",
    },
    featured: false,
  },
  {
    id: "12",
    title: "ML Feature Comparison Tool",
    description:
      "⚙️ Compares feature importance across multiple ML models with visual metrics and sortable views. Built with Python and Streamlit.",
    image: "/projects/ml-feature-comparison.png",
    technologies: [
      "Python",
      "scikit-learn",
      "SHAP",
      "Streamlit",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/ML-Feature-Comparison",
    },
    featured: false,
  },
  {
    id: "13",
    title: "MNIST Deep Vision",
    description:
      "📷 Deep neural network trained on MNIST for robust digit classification, with accuracy visualization and model tuning.",
    image: "/projects/mnist-deep-vision.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
    ],
    category: "Machine Learning",
    links: {
      github: "https://github.com/rohanreddy1201/MNISTDeepVision",
    },
    featured: false,
  },
  {
    id: "14",
    title: "MNIST CNN Digit Recognition",
    description:
      "✏️ Convolutional Neural Network for handwritten digit recognition on MNIST, achieving high accuracy with data augmentation.",
    image: "/projects/mnist-cnn-digit.png",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
    ],
    category: "Machine Learning",
    links: {
      github:
        "https://github.com/rohanreddy1201/MNIST-Digit-Recognition-with-CNN",
    },
    featured: false,
  },
];
