import imgRag from "../assets/projects/rag.png";
import imgInvenx from "../assets/projects/Invenx.png";
import imgWeather from "../assets/projects/Weather.png";

export const projects = [
  {
    slug: "analystai",
    title: "AnalystAI",
    subtitle: "Full-stack RAG data analysis platform",
    tag: "RAG / FastAPI",
    image: imgRag,
    description:
      "AnalystAI is a powerful data analysis platform powered by Retrieval-Augmented Generation (RAG). It allows users to upload complex datasets and query them using natural language, providing instant, context-aware insights backed by state-of-the-art LLMs.",
    features: [
      "Natural language querying of structured and unstructured data",
      "High-performance FastAPI backend with async processing",
      "Advanced ChromaDB vector search for context retrieval",
      "Interactive data visualizations generated on the fly",
      "Automated PDF report generation via ARIMA forecasting",
    ],
    technologies: ["FastAPI", "Next.js", "ChromaDB", "Llama-3.3", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/VedantSinngh/neurovia",
    demoUrl: null,
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    subtitle: "Smart warehouse system with Dijkstra routing",
    tag: "MERN",
    image: imgInvenx,
    description:
      "A comprehensive Inventory Management System built with the MERN stack. This platform allows businesses to track stock levels in real-time across multiple warehouse locations. It incorporates advanced routing algorithms to optimize supply chain logistics.",
    features: [
      "Real-time inventory tracking and threshold alerts",
      "Dijkstra-based routing for optimal delivery paths",
      "Comprehensive dashboard for analytics and reporting",
      "Multi-warehouse support with transfer management",
      "Predictive stock forecasting with dynamic heuristics",
    ],
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/VedantSinngh/inventory-management",
    demoUrl: null,
  },
  {
    slug: "cloud-cost-analyser",
    title: "Cloud Cost Analyser",
    subtitle: "Forecasting cloud spend with ARIMA & anomaly detection",
    tag: "Python / ML",
    image: imgWeather,
    description:
      "An intelligent dashboard designed to help enterprises monitor and reduce their cloud computing expenses. By leveraging ARIMA time-series forecasting models, the system predicts future spending trends and identifies potential areas for cost optimization.",
    features: [
      "Integration with AWS and Azure billing APIs",
      "Time-series forecasting using ARIMA models",
      "Automated anomaly detection for unexpected spending spikes",
      "Actionable recommendations for rightsizing instances",
      "Multi-cloud infrastructure spend visualization",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "Chart.js", "AWS APIs"],
    githubUrl: "https://github.com/VedantSinngh/cloud-cost-analyser",
    demoUrl: null,
  },
];
