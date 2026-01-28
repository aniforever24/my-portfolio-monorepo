import React from "react";
import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	Linkedin,
	Github,
	Twitter,
	Youtube,
	MessageCircle,
	Code,
	Share2,
	Globe,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import Footer from "./Footer";

const socialLinks = [
	//   { name: "LinkedIn", icon: <Linkedin size={20} />, color: "text-blue-500", href: "#" },
	//   { name: "Dev.to", icon: <Code size={20} />, color: "text-white", href: "#" },
	//   { name: "Discord", icon: <Share2 size={20} />, color: "text-indigo-400", href: "#" },
	//   { name: "Twitter", icon: <Twitter size={20} />, color: "text-sky-400", href: "#" },
	//   { name: "WhatsApp", icon: <MessageCircle size={20} />, color: "text-green-500", href: "#" },
	{ name: "GitHub", icon: <Github size={20} />, color: "text-white", href: "https://github.com/aniforever24" },
	//   { name: "YouTube", icon: <Youtube size={20} />, color: "text-red-500", href: "#" },
	//   { name: "Hacker News", icon: <Globe size={20} />, color: "text-orange-500", href: "#" },
];

const ConnectSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<div className="relative sm:py-24 pt-24 pb-10 px-6 bg-[#05070a] text-white overflow-hidden">
			{/* Decorative Floating Blobs (Matching your image's aesthetic) */}
			<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
			<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full animate-pulse delay-700" />

			<div className="max-w-4xl mx-auto relative z-10">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold tracking-tight">
						Connect With{" "}
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#717cf5] via-[#a855f7] to-[#f25c89] animate-gradient-flow bg-[length:200%_auto]">
							Me
						</span>
					</h2>
				</motion.div>

				{/* Contact Info (Email/Phone) */}
				<div className="flex flex-col items-center space-y-8 mb-20">
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -20 }}
						viewport={{ once: false }}
						className="flex items-center gap-2 sm:gap-6 group"
					>
						<div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white transition-all">
							<Mail size={24} />
						</div>
						<div>
							<p className="text-gray-500 text-sm font-medium">Email</p>
							<a
								href="mailto:animeshsharma5121@gmail.com"
								className="sm:text-lg text-sm font-semibold text-gray-200 cursor-pointer"
							>
								animeshsharma5121@gmail.com
							</a>
						</div>
					</motion.div>

					{/* <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            viewport={{ once: false }}
            className="flex items-center gap-6 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-[#a855f7] group-hover:bg-[#a855f7] group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">Phone</p>
              <p className="text-lg font-semibold text-gray-200">+91 9620107401</p>
            </div>
          </motion.div> */}
				</div>

				{/* Social Links Grid */}
				<div className="text-center mb-12">
					<h3 className="text-xl font-bold mb-10">Find Me Online</h3>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						className={twMerge(
							"grid  gap-6 ",
							socialLinks.length >= 4
								? "grid-cols-2 md:grid-cols-4"
								: "grid-flow-col justify-center",
						)}
					>
						{socialLinks.map((social, idx) => (
							<motion.a
								key={idx}
								href={social.href}
								target="_blank"
								variants={itemVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								className="flex items-center justify-center gap-3 p-4 bg-[#0b0e14] border border-gray-800/50 rounded-xl hover:border-purple-500/50 transition-colors group"
							>
								<span
									className={`${social.color} opacity-80 group-hover:opacity-100 transition-opacity`}
								>
									{social.icon}
								</span>
								<span className="font-medium text-gray-300 group-hover:text-white transition-colors">
									{social.name}
								</span>
							</motion.a>
						))}
					</motion.div>
				</div>

				{/* Footer Copyright */}
				<Footer/>
			</div>
		</div>
	);
};

export default ConnectSection;
