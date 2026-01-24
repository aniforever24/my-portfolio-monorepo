import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Users, Info, Circle } from 'lucide-react';

const repos = [
  {
    path: "aniforever24/MERN-Binkeyit-FullStack-app",
    title: "MERN-Binkeyit-FullStack-app",
    desc: "A custom modified MERN stack clone of Binkeyit e-commerce website. It uses react, tailwindcss, redux, mongoose ODM etc and implented admin panel, stripe api, authentication and much more",
    stars: 3,
    forks: 0,
    language: "Javascript",
    langColor: "#3178c6",
    tag: "JAVASCRIPT",
    link: "https://github.com/aniforever24/MERN-Binkeyit-FullStack-app",
  },
  {
    path: "aniforever24/Spotify-clone",
    title: "Spotify-clone",
    desc: "A custom modified beautiful and functional Spotify music app in html, css, javascript. ",
    stars: 1,
    forks: 0,
    language: "Javascript",
    langColor: "#3178c6",
    tag: "JAVASCRIPT",
    link: "https://github.com/aniforever24/Spotify-clone",
  },
  {
    path: "aniforever24/react-Todo-list",
    title: "react-Todo-list",
    desc: "A simple yet powerful and elegant todo list app build with react and tailwindcss",
    stars: 0,
    forks: 0,
    language: "JavaScript",
    langColor: "#f1e05a",
    tag: "JAVASCRIPT",
    link: "https://github.com/aniforever24/react-Todo-list",
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 bg-[#05070a] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top GitHub Sync Badge */}
        {/* <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-800 bg-gray-900/50 text-gray-400 text-xs font-medium">
            <Github size={14} />
            <span>Synchronized with GitHub</span>
          </div>
        </motion.div> */}

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-linear animate-smooth-flow [animation-duration:5s] bg-[length:200%_auto]">Featured</span>
            {" "} Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Exploring solutions through code. Below are my some repositories.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {repos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-gray-800 bg-[#0b0e14] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* TOP HALF: LIGHT THEME REPO HEADER */}
              <div className="p-6 bg-gray-100 relative min-h-[180px]">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs font-mono">{repo.path.split('/')[0]} /</p>
                    <h3 className="text-gray-900 font-bold text-lg leading-tight">{repo.path.split('/')[1]}</h3>
                  </div>
                  {/* Avatar / Icon Corner */}
                  <div className="flex gap-2">
                     <a href={repo.link} target='_blank' className="w-10 h-10 rounded-lg bg-gray-300 flex items-center justify-center text-gray-600">
                        <Github size={20} />
                     </a>
                  </div>
                </div>

                <p className="text-gray-600 text-[11px] leading-relaxed mb-6">
                  {repo.desc.substring(0, 100)}...
                </p>

                {/* Light stats row */}
                <div className="flex gap-4 text-gray-400 text-[10px] font-bold">
                  <span className="flex items-center gap-1"><Users size={12} /> 1</span>
                  <span className="flex items-center gap-1"><Info size={12} /> 0</span>
                  <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                  <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
                </div>
                
                {/* Visual fade to the dark bottom half */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0b0e14] to-transparent"></div>
              </div>

              {/* BOTTOM HALF: DARK THEME DETAILS */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white group-hover:text-[#a855f7] transition-colors">
                    {repo.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {repo.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {repo.stars}</span>
                      <span className="flex items-center gap-1"><GitFork size={14} /> {repo.forks}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Circle size={8} fill={repo.langColor} stroke="none" />
                      <span>{repo.language}</span>
                    </div>
                  </div>
                  {/* Tech Tag Badge */}
                  <div className="inline-block px-3 py-1 rounded bg-gray-900 border border-gray-800 text-[10px] font-bold text-gray-400">
                    {repo.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;