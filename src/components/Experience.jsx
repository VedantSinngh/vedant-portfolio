import React from 'react';
import { SiJavascript, SiReact, SiNextdotjs, SiMongodb } from 'react-icons/si';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const ExperienceCard = ({ role, company, duration, description, technologies, image }) => {
    return (
        <div className="group relative p-4 rounded-xl border border-white/[0.08] hover:border-white/[0.12] transition-all duration-500 max-w-xs mx-auto"> {/* Reduced padding and added max width */}
            {/* Company Logo/Image */}
            <div className="absolute -top-8 left-8">
                <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                    <img src={image} alt={`${company} logo`} className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Content */}
            <div className="mt-10"> {/* Adjusted margin-top to center logo and content */}
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-lg font-semibold text-white/90 mb-1">{role}</h3> {/* Reduced font size */}
                        <p className="text-white/60 font-medium text-sm">{company}</p> {/* Reduced font size */}
                    </div>
                    <span className="text-xs text-white/40 font-medium">{duration}</span> {/* Reduced font size */}
                </div>

                <p className="text-white/60 text-xs leading-relaxed mb-4"> {/* Reduced font size */}
                    {description}
                </p>

                <div className="flex flex-wrap gap-1"> {/* Reduced gap between technology badges */}
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-1 px-2 py-1 rounded-full 
                        border border-white/[0.08] bg-white/[0.02]
                    group-hover:border-white/[0.12] transition-all duration-300"
                        >
                            <tech.icon className="w-3 h-3" style={{ color: tech.color }} /> {/* Reduced icon size */}
                            <span className="text-xs font-medium text-white/60">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Associate",
            company: "Hack The Box SRMIST",
            duration: "2024 - Present",
            description: "Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases.",
            technologies: [
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "React.js", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#fff" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            ],
            image: logo,
        },
        // {
        //     role: "Web Developer",
        //     company: "Tech Solutions",
        //     duration: "2022 - 2024",
        //     description: "Contributed to various projects focusing on front-end development and user experience. Collaborated with design teams to create responsive and visually appealing websites.",
        //     technologies: [
        //         { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        //         { name: "React.js", icon: SiReact, color: "#61DAFB" },
        //         { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        //     ],
        //     image: logo,
        // },
        // Add more experiences as needed
    ];

    return (
        <section className="relative py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-white/90 mb-16 text-center">
                    Experience
                </h2>

                {/* Conditional layout for Experience Cards */}
                <div className={`grid ${experiences.length === 1 ? 'flex justify-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
