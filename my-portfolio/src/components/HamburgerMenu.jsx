import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './css/hamburgerMenu.css'

const HamburgerMenu = ({ menuItems }) => {
	const [isOpen, setIsOpen] = useState(false);

	if (!menuItems) {
		throw new Error("menuItems are required!");		
	}

	// Animation variants for the menu container
	const menuVariants = {
		closed: {
			opacity: 0,
			y: "-100%",
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
		open: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 40,
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		closed: { opacity: 0, y: 20 },
		open: { opacity: 1, y: 0 },
	};

	return (
		<nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#05070a]/80 backdrop-blur-md">
			{/* Logo Area */}
			<div className="text-white font-bold text-xl tracking-tighter">
				&lt; Animesh /&gt;
			</div>

			{/* The Hamburger Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="relative z-100 cursor-pointer w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none group"
			>
				<motion.span
					animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
					className="hamburgerBtn"
				/>
				<motion.span
					animate={isOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
					className="hamburgerBtn"
				/>
				<motion.span
					animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
					className="hamburgerBtn"
				/>
			</button>

			{/* Fullscreen Overlay Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
						className="fixed inset-0 h-screen bg-[#0b0e14] flex flex-col items-center justify-center space-y-8"
					>
						{menuItems.map((item, index) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase()}`}
								variants={itemVariants}
								onClick={() => setIsOpen(false)}
								className="text-3xl md:text-6xl font-bold text-gray-400 hover:text-white transition-colors relative group"
							>
								{/* Hover Gradient Effect */}
								<span className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#a855f7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
								{item}
							</motion.a>
						))}

						{/* Background Branding (Matches your gradient style) */}
						{/* <div className="absolute bottom-10 opacity-10 pointer-events-none">
                <h2 className="text-8xl font-black text-white select-none">MENU</h2>
            </div> */}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default HamburgerMenu;
