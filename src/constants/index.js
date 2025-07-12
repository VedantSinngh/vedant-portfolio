import project4 from "../assets/projects/EliteFit.png";
import project5 from "../assets/projects/NeuroviaAI.png";
import project6 from "../assets/projects/Invenx.png";
import logo1 from '../assets/logo.png';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Currently, I am pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, where I am in my second year. Prior to this, I completed my schooling at DAV, achieving a score of 93.2% in my 12th grade. My goal is to leverage my expertise and academic background to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//     {
//         year: "2024 - Present",
//         role: "Lead",
//         company: "Hack The Box SRMIST",
//         image: logo1,
//         description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//         technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
//     },
//     {
//         year: "May 2025- Present",
//         role: "Intern",
//         company: "DRDO",
//         image: logo1,
//         description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//         technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
//     },
//     // Add additional experience entries as needed
// ];

export const PROJECTS = [
    {
        title: "EliteFit",
        image: project4,
        description: "A fitness app with real-time streak tracking, leaderboard, and AI-driven workout suggestions.",
        technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Node.js", "Express"],
        link: "https://github.com/VedantSinngh/Elitefit",
    },
    {
        title: "Neurovia.AI",
        image: project5, // Add corresponding image import
        description: "Disease detection using ResNet50 and GenAI-based DNA analysis with voice interaction.",
        technologies: ["TensorFlow", "Python", "Flask", "Next.js", "TypeScript", "GROQ", "Phidata"],
        link: "https://github.com/VedantSinngh/neurovia",
    },
    {
        title: "InvenX",
        image: project6, // Add corresponding image import
        description: "Smart warehouse system with ML forecasting, GenAI placement, and dynamic delivery routing.",
        technologies: ["Next.js", "MySQL", "Scikit-learn", "XGBoost", "GROQ", "Phidata", "TomTom API", "OpenWeather API"],
        link: "https://github.com/Adityapratapsingh28/InvenX",
    },
];


export const CONTACT = {
    phoneNo: "+91 9399789804",
    email: "vedaantsinngh@gmail.com",
    address: "Chennai , India"
};
