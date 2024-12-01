// import React, { useState } from 'react';
// import { RiReactjsLine } from 'react-icons/ri';
// import {
//     SiHtml5,
//     SiCss3,
//     SiJavascript,
//     SiTailwindcss,
//     SiPython,
//     SiCplusplus,
//     SiMongodb
// } from 'react-icons/si';

// const TechnologyCard = ({ Icon, name, description, proficiency, colors }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className="group relative p-6 rounded-xl border border-white/[0.08]
//                 transition-all duration-500 cursor-pointer overflow-hidden
//                 hover:border-white/[0.12] hover:bg-white/[0.02]"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="relative z-10">
//                 <div className="flex items-start justify-between">
//                     <div className="flex items-center space-x-4">
//                         <div
//                             className="p-3 rounded-xl border border-white/[0.08]
//                         transition-all duration-300 group-hover:border-white/[0.12]"
//                         >
//                             <Icon className="w-7 h-7 transition-colors duration-300"
//                                 style={{ color: isHovered ? colors.primary : '#fff' }} />
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-medium text-white/90">{name}</h3>
//                             <div className="mt-3 flex items-center space-x-3">
//                                 <div className="w-32 h-1 bg-white/[0.03] rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full transition-all duration-700 ease-out"
//                                         style={{
//                                             width: `${isHovered ? proficiency : 0}%`,
//                                             background: `linear-gradient(90deg, ${colors.primary}40, ${colors.primary}80)`
//                                         }}
//                                     />
//                                 </div>
//                                 <span className="text-sm font-medium text-white/40">
//                                     {proficiency}%
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={`mt-4 text-sm text-white/60 transition-all duration-500 $ {
//         isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
//         }`}>
//                     {description}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Technologies = () => {
//     const technologies = [
//         {
//             Icon: SiHtml5,
//             name: 'HTML5',
//             colors: {
//                 primary: '#E34F26',
//                 secondary: '#F06529'
//             },
//             description: 'Semantic markup, accessibility, modern HTML5 features',
//             proficiency: 95
//         },
//         {
//             Icon: SiCss3,
//             name: 'CSS3',
//             colors: {
//                 primary: '#264DE4',
//                 secondary: '#2965F1'
//             },
//             description: 'Advanced animations, Flexbox, Grid layouts',
//             proficiency: 90
//         },
//         {
//             Icon: SiJavascript,
//             name: 'JavaScript',
//             colors: {
//                 primary: '#F7DF1E',
//                 secondary: '#F0DB4F'
//             },
//             description: 'ES6+, async/await, DOM manipulation',
//             proficiency: 88
//         },
//         {
//             Icon: RiReactjsLine,
//             name: 'React',
//             colors: {
//                 primary: '#61DAFB',
//                 secondary: '#00D8FF'
//             },
//             description: 'Hooks, Context, Redux, Next.js',
//             proficiency: 92
//         },
//         {
//             Icon: SiTailwindcss,
//             name: 'Tailwind',
//             colors: {
//                 primary: '#06B6D4',
//                 secondary: '#38BDF8'
//             },
//             description: 'Custom configurations, component patterns',
//             proficiency: 85
//         },
//         {
//             Icon: SiPython,
//             name: 'Python',
//             colors: {
//                 primary: '#3776AB',
//                 secondary: '#FFD43B'
//             },
//             description: 'Django, Flask',
//             proficiency: 80
//         },
//         {
//             Icon: SiCplusplus,
//             name: 'C++',
//             colors: {
//                 primary: '#00599C',
//                 secondary: '#004482'
//             },
//             description: 'OOP',
//             proficiency: 75
//         },
//         {
//             Icon: SiMongodb,
//             name: 'MongoDB',
//             colors: {
//                 primary: '#47A248',
//                 secondary: '#4DB33D'
//             },
//             description: 'CRUD operations, aggregation, indexing',
//             proficiency: 82
//         }
//     ];

//     return (
//         <section className="relative py-20">
//             <div className="relative max-w-6xl mx-auto px-4">
//                 <div className="space-y-2 mb-12">
//                 {/* <motion.div variants={item} className="flex flex-col items-center my-20">
//                     <h1 className='text-6xl font-thin mb-4 tracking-wider'>
//                         About
//                         <span className='ml-4 text-neutral-500'>
//                             Me
//                         </span>
//                     </h1>
//                     <div className="w-32 h-1 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full" />
//                 </motion.div> */}
//                     <h2 className="text-3xl font-bold text-center text-white/90">
//                         Technical Expertise
//                     </h2>
//                     <p className="text-white/50 text-center">
//                         Specialized in modern web technologies
//                     </p>
//                 </div>

//                 {/* Flexbox layout for Technology Cards */}
//                 <div className="flex flex-wrap justify-center gap-6">
//                     {technologies.map((tech) => (
//                         <TechnologyCard
//                             key={tech.name}
//                             {...tech}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Technologies;
import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiPython,
    SiCplusplus,
    SiMongodb
} from 'react-icons/si';

const TechnologyCard = ({ Icon, name, description, colors }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative group overflow-hidden rounded-2xl 
            backdrop-blur-lg bg-white/5 border border-white/10 
            transition-all duration-500 ease-in-out transform 
            hover:scale-105 hover:border-white/20 
            hover:shadow-2xl cursor-pointer p-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glowing background effect */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${colors.primary}20, transparent 40%)`,
                }}
            />

            <div className="relative z-10 flex flex-col items-center">
                <div 
                    className="mb-4 p-4 rounded-full transition-all duration-300"
                    style={{ 
                        backgroundColor: colors.primary + '20',
                        transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)'
                    }}
                >
                    <Icon 
                        className="w-10 h-10 transition-all duration-300" 
                        style={{ 
                            color: colors.primary,
                            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                        }} 
                    />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 
                    transition-all duration-300 
                    group-hover:text-opacity-100 
                    text-opacity-70">
                    {name}
                </h3>

                {isHovered && (
                    <div className="mt-4 text-center text-white/70 
                        text-sm opacity-0 translate-y-4 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

const Technologies = () => {
    const technologies = [
        {
            Icon: SiHtml5,
            name: 'HTML5',
            colors: {
                primary: '#E34F26',
                secondary: '#F06529'
            },
            description: 'Semantic markup, accessibility, modern HTML5 features'
        },
        {
            Icon: SiCss3,
            name: 'CSS3',
            colors: {
                primary: '#264DE4',
                secondary: '#2965F1'
            },
            description: 'Advanced animations, Flexbox, Grid layouts'
        },
        {
            Icon: SiJavascript,
            name: 'JavaScript',
            colors: {
                primary: '#F7DF1E',
                secondary: '#F0DB4F'
            },
            description: 'ES6+, async/await, DOM manipulation'
        },
        {
            Icon: RiReactjsLine,
            name: 'React',
            colors: {
                primary: '#61DAFB',
                secondary: '#00D8FF'
            },
            description: 'Hooks, Context, Redux, Next.js'
        },
        {
            Icon: SiTailwindcss,
            name: 'Tailwind',
            colors: {
                primary: '#06B6D4',
                secondary: '#38BDF8'
            },
            description: 'Custom configurations, component patterns'
        },
        {
            Icon: SiPython,
            name: 'Python',
            colors: {
                primary: '#3776AB',
                secondary: '#FFD43B'
            },
            description: 'Django, Flask'
        },
        {
            Icon: SiCplusplus,
            name: 'C++',
            colors: {
                primary: '#00599C',
                secondary: '#004482'
            },
            description: 'OOP'
        },
        {
            Icon: SiMongodb,
            name: 'MongoDB',
            colors: {
                primary: '#47A248',
                secondary: '#4DB33D'
            },
            description: 'CRUD operations, aggregation, indexing'
        }
    ];

    // Mouse movement tracking effect
    React.useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.group');
            
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white/90 mb-4">
                        Tech Ecosystem
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Exploring and mastering a diverse range of modern technologies
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {technologies.map((tech) => (
                        <TechnologyCard
                            key={tech.name}
                            {...tech}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;