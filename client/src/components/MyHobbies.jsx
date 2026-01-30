import React from "react";
import { motion } from "framer-motion";
import {
	Waves,
	Wind,
	Zap,
	Grid3X3,
	PenTool,
	Lightbulb,
	Flower2,
	Grid,
	Apple,
	Footprints,
	Beaker,
} from "lucide-react";
import { YogaIcon, MeditationIcon } from "./ui/CustomIcons";

const hobbies = [
	{
		title: "Meditation",
		icon: <MeditationIcon size={24} />,
		description:
			"I enjoy meditation everyday keeps me energetic and calms my mind.",
	},
	{
		title: "Yoga",
		icon: <YogaIcon size={24} />,
		description:
			"I follow padmasan and pranayam everyday. It helps calms my mind and circulate +ive energy throughout my body and mind.",
	},
	{
		title: "Walking",
		icon: <Footprints size={24} />,
		description:
			"I walk every day, soaking in the surrounding vibes while enjoyng fresh air around.",
	},
	{
		title: "Learning & Experimenting",
		icon: <Lightbulb size={24} />,
		description:
			"I enjoy experimenting with new web technologies, animations, and building small side projects to explore ideas",
	},
];

const HobbiesSection = () => {
	// Container variants for staggered entrance
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	// Individual card variants
	const cardVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
	};

	return (
		<div className="sm:py-24 pt-24 pb-10 px-6 bg-[#05070a] text-white overflow-hidden flex justify-center items-center min-h-180">
			<div className="max-w-7xl mx-auto">
				{/* Header with your signature animated gradient text */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-['Baloo_2']">
						My{" "}
						<span className="bg-clip-text text-transparent bg-gradient-linear animate-smooth-flow [animation-duration:5s] bg-[length:200%_auto]">
							Hobbies
						</span>
					</h2>
				</motion.div>

				{/* Cards Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{hobbies.map((hobby, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{
								y: -10,
								borderColor: "rgba(168, 85, 247, 0.4)",
								boxShadow: "0 20px 40px -20px rgba(168, 85, 247, 0.15)",
							}}
							className="bg-[#0b0e14] border border-gray-800/50 rounded-2xl p-8 flex flex-col items-start transition-colors duration-300 group"
						>
							{/* Icon Circle */}
							<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-[#a855f7] mb-6 group-hover:bg-[#a855f7] group-hover:text-white transition-all duration-300">
								{hobby.icon}
							</div>

							{/* Title */}
							<h3 className="text-xl font-bold mb-3 group-hover:text-[#a855f7] transition-colors">
								{hobby.title}
							</h3>

							{/* Description */}
							<p className="text-gray-400 text-sm leading-relaxed">
								{hobby.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default HobbiesSection;
