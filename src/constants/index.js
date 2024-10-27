import project1 from "../assets/projects/Weather.png";
import project2 from "../assets/projects/React.jpg";
import project3 from "../assets/projects/SIH.png";
import logo1 from '../assets/logo.png';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Currently, I am pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, where I am in my second year. Prior to this, I completed my schooling at DAV, achieving a score of 93.2% in my 12th grade. My goal is to leverage my expertise and academic background to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Associate",
        company: "Hack The Box SRMIST",
        image: logo1,
        description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
        technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
    },
    // Add additional experience entries as needed
];

export const PROJECTS = [
    {
        title: "Weather App",
        image: project1,
        description: "A weather application that provides real-time weather information based on location.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://vedantsinngh.github.io/Weather/", // Add the link to your project
    },
    {
        title: "React Authentication",
        image: project2,
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Bootstrap"],
        link: "https://react-authentication-beta.vercel.app/login", // Add the link to your project
    },
    {
        title: "Agri Tech Model",
        image: project3,
        description: "An agriculture technology model featuring tools for farmers to enhance productivity.",
        technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
        link: "https://your-agri-tech-model-link.com", // Add the link to your project
    },
];

export const CONTACT = {
    phoneNo: "+91 9399789804",
    email: "vedaantsinngh@gmail.com",
};
