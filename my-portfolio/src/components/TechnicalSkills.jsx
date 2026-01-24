import React from "react";
import { motion } from "framer-motion";
import {
	Code2,
	Monitor,
	Cloud,
	Database,
	Cpu,
	Hammer,
	Zap,
	Box,
} from "lucide-react";

const skillGroups = [
	{
		title: "Languages",
		icon: <Code2 className="text-[#a855f7]" size={24} />,
		skills: ["JavaScript", "Python", "HTML", "CSS"],
	},
	{
		title: "Frontend",
		icon: <Monitor className="text-[#a855f7]" size={24} />,
		skills: ["React", "Tailwind CSS"],
	},
	{
		title: "Backend",
		icon: <Database className="text-[#a855f7]" size={24} />,
		skills: ["Node.js", "Express.js"],
	},
	{
		title: "Database",
		icon: <Box className="text-[#a855f7]" size={24} />,
		skills: ["MongoDB", "Mongoose ODM"],
	},
	{
		title: "Tools & Others",
		icon: <Hammer className="text-[#a855f7]" size={24} />,
		skills: ["Git", "GitHub", "REST APIs",  "Webhooks", "LLMs", "jQuery"],
	},
	{
		title: "Integrations",
		icon: <Zap className="text-[#a855f7]" size={24} />,
		skills: ["RESTful APIs", "Frontend-Backend Data Flow", "JWT-based Authentication", "Environment & Config Management", "Third-party API integration","Stripe"],
	},
];

const TechnicalSkills = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	const tagVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	};

	return (
		<section className="py-24 px-6 bg-[#05070a] text-white">
			<div className="max-w-7xl mx-auto">
				{/* Animated Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-['Baloo_2']">
						Technical{" "}
						<span className="bg-clip-text text-transparent bg-gradient-linear animate-smooth-flow [animation-duration:4s] bg-[length:200%_auto]">
							Skills
						</span>
					</h2>
				</motion.div>

				{/* Grid Layout */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.1 }}
					className="grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					{skillGroups.map((group, idx) => (
						<motion.div
							key={idx}
							variants={cardVariants}
							whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.3)" }}
							className="bg-[#0b0e14] border border-gray-800/50 p-8 rounded-2xl flex flex-col gap-6 transition-colors duration-300"
						>
							<div className="flex items-center gap-4">
								<div className="p-2 bg-purple-500/10 rounded-lg">{group.icon}</div>
								<h3 className="text-xl font-semibold tracking-tight">{group.title}</h3>
							</div>

							<div className="flex flex-wrap gap-2">
								{group.skills.map((skill, sIdx) => (
									<motion.span
										key={sIdx}
										variants={tagVariants}
										whileHover={{
											scale: 1.05,
											backgroundColor: "rgba(168, 85, 247, 0.2)",
										}}
										className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#b76cfe] text-sm font-medium transition-colors cursor-default"
									>
										{skill}
									</motion.span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TechnicalSkills;
