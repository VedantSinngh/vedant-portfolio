import project2 from "../assets/projects/NeuroviaAI.png";
import project3 from "../assets/projects/Invenx.png";
import projectWeather from "../assets/projects/Weather.png"; // Placeholder/Substitute fallback image if needed

export const PROJECTS = [
  {
    title: "AnalystAI (RAG Platform)",
    image: project2,
    description:
      "An AI-powered platform featuring a RAG pipeline (ChromaDB + HuggingFace embeddings + Llama 3.3) for instant dataset insights, automated cleaning, time-series forecasting (ARIMA), and automated PDF reports.",
    technologies: ["FastAPI", "Next.js", "ChromaDB", "Llama-3.3", "PostgreSQL", "Docker"],
    github: "https://github.com/VedantSinngh/neurovia",
    deployed: "#",
  },
  {
    title: "Inventory Management System",
    image: project3,
    description:
      "Smart warehouse and inventory system featuring predictive forecasting, dynamic allocation heuristics, and responsive warehouse visualization.",
    technologies: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/VedantSinngh/inventory-management",
    deployed: "#",
  },
  {
    title: "Cloud Cost Analyser",
    image: projectWeather,
    description:
      "A clean visualization and analytics dashboard targeting optimization of multi-cloud infrastructure spends, forecasting anomalies, and outlining potential resource adjustments.",
    technologies: ["Next.js", "TypeScript", "Python", "Chart.js", "AWS APIs"],
    github: "https://github.com/VedantSinngh/cloud-cost-analyser",
    deployed: "#",
  },
];

export const RESEARCH = {
  label: "DRDO SAG — Quantum Computing Division",
  title: "Pulse-Level VQE for H₂ Ground State Energy Estimation",
  description:
    "Simulated pulse-level Variational Quantum Eigensolver for H₂ ground state energy in Qiskit Pulse. Shaped Gaussian and DRAG microwave pulses to drive qubit π-rotations, optimizing pulse parameters to minimize molecular energy estimates on noisy quantum hardware.",
  params: [
    { label: "Molecule", value: "H₂" },
    { label: "Method", value: "VQE" },
    { label: "Backend", value: "Qiskit Pulse" },
    { label: "Pulse Type", value: "Gaussian / DRAG" },
  ],
};

export const EXPERIENCES = [
  {
    date: "May 2025 — Present",
    role: "Research Intern",
    company: "SAG-DRDO",
    description:
      "Contributing to quantum machine learning research — pulse-level VQE simulation, QAOA optimization, and quantum circuit design using Qiskit and Python.",
    technologies: ["Python", "Qiskit", "Quantum ML"],
  },
  {
    date: "2024 — Present",
    role: "Admin-President",
    company: "Hack The Box SRMIST",
    description:
      "Led the development club, organized technical workshops and CTF competitions. Built and maintained web applications for club operations.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    date: "2025",
    role: "1st Place",
    company: "Hackademia'25",
    description:
      "Won first place building a full-stack solution under 24-hour constraints with a team of four.",
    technologies: ["React", "Node.js", "ML"],
  },
  {
    date: "2024",
    role: "Top 50 Nationally",
    company: "Smart India Hackathon 2024",
    description:
      "Selected among top 50 teams nationally for an AI-driven solution addressing real-world governance challenges.",
    technologies: ["Python", "TensorFlow", "Next.js"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    link: "#"
  }
];

export const CONTACT = {
  email: "vedaantsinngh@gmail.com",
  linkedin: "https://www.linkedin.com/in/vedant-singh-b90872286/",
  github: "https://github.com/VedantSinngh",
  resume: "https://drive.google.com/file/d/1poZU6_BrLKTP-pfVdHWN1cDPVND2LciW/view?usp=sharing",
};
