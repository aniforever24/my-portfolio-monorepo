// import React from "react";
// import ChillDev from "./ui/ChillDev";

// const AboutMeSection = () => {
// 	return (
// 		<section className="flex justify-center gap-20">
// 			<div>About section</div>
// 			<ChillDev />
// 		</section>
// 	);
// };

// export default AboutMeSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Zap, Server } from 'lucide-react';
import "./css/animations.css"

const skills = [
    { name: "React", level: 95 },
    { name: "AI-Assisted Development (LLMs)", level: 85 },
    { name: "HTML", level: 85 },
    { name: "CSS", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "Mongoose/MongoDB", level: 65 },
    { name: "Python", level: 55 },
].sort((a, b) => b.level - a.level);

const categories = [
  { icon: <Code2 size={24} />, title: "Frontend", desc: "React, Js, Tailwind", color: "text-blue-400" },
  { icon: <Server size={24} />, title: "Backend", desc: "Node, Express, REST API", color: "text-purple-400" },
  { icon: <Database size={24} />, title: "Database", desc: "MongoDB, Mongoose", color: "text-pink-400" },
];

const AboutSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="min-h-screen bg-[#05070a] text-white py-20 px-6 md:px-12 flex items-center">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
      >
        
        {/* LEFT COLUMN: TEXT & CARDS */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 font-['Baloo_2']">
             <div className="w-12 h-0.5 bg-purple-500"></div>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						<span className="bg-clip-text text-transparent bg-gradient-linear animate-smooth-flow [animation-duration:4s] bg-size-[200%_auto]">
						About{" "}
						</span>
							Me
					</h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-xl text-justify">
            I’m a self-taught full-stack MERN stack web developer who enjoys building modern, responsive, and engaging web applications using React, JavaScript, Node.js, Express, and MongoDB (Mongoose). I have a strong command of component-based UI development and semantic HTML, and I enjoy crafting clean interfaces with Tailwind CSS that feel intuitive and polished. I’m especially interested in enhancing user experience through thoughtful animations and micro-interactions, often using Framer Motion and modern UI patterns. On the backend, I’m comfortable designing real-world APIs and application logic, and I actively learn by building and iterating on practical projects. I’m driven by curiosity, continuous improvement, and the satisfaction of turning ideas into well-structured, usable products.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, borderColor: '#a855f7' }}
                className="p-6 bg-[#0b0e14] border border-gray-800/50 rounded-xl transition-colors cursor-default"
              >
                <div className={`${cat.color} mb-4`}>{cat.icon}</div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
                <p className="text-gray-500 text-xs mt-1 leading-tight">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: SKILLS CARD */}
        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          {/* Decorative Shadow Behind */}
          <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0b0e14] border border-gray-800/50 rounded-2xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 font-['Baloo_2']">TechStack</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level} %</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutSection;