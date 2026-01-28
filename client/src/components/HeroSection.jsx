import React from "react";
import devIcon from "../assets/developer-icon.png";
import {
	PiLineVerticalBold,
	PiLineVerticalLight,
	PiGreaterThanThin,
} from "react-icons/pi";
import { ArrowDown } from "lucide-react";
import {
	DancingArrow,
	SkillsTypeAnimation,
	GradientTitle,
} from "./ui/animations";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "motion/react";

const HeroSection = () => {
	const parent = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 2,
			},
			delayChildren: 0.5,
			staggerChildren: 0.5,
		},
	};

	const nameVariant = {
		hidden: {
			y: 40,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				y: {
					type: "spring",
					stiffness: 120,
					damping: 18,
				},
				opacity: {
					duration: 0.25,
					ease: "easeOut",
				},
			},
		},
	};

	const imageVariant = {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};
	const titleVariant = {
		hidden: {
			opacity: 0,
			scale: 0.9,
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.2,
				duration: 0.75,
				ease: [0.16, 1, 0.3, 1], // easeOutExpo-ish
			},
		},
	};

	const taglineVariant = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 2,
				delay: 0.3,
			},
		},
	};

	return (
		<div className="sm:min-h-screen bg-transparent flex flex-col items-center justify-center gap-30 py-6 px-2">
			<motion.div
				variants={parent}
				initial="hidden"
				animate="show"
				className="mx-auto w-full flex flex-col items-center justify-center max-sm:pt-30 gap-2"
			>
				<motion.div
					variants={imageVariant}
					className="md:w-50 md:h-50 sm:w-40 sm:h-40 w-33 h-33 overflow-hidden border-4 border-gray-900 rounded-full"
				>
					<img className="animate-float" src={devIcon} alt="devop.png" />
				</motion.div>

				<motion.p
					variants={nameVariant}
					className="md:text-7xl sm:text-5xl text-3xl font-medium text-white mb-1.5"
				>
					Animesh Sharma
				</motion.p>

				<motion.div variants={titleVariant}>
					<GradientTitle
						title="Full Stack Web Developer"
						className="font-['Baloo_2']"
					/>
				</motion.div>

				<motion.p
					variants={taglineVariant}
					className="text-gray-400 font-[Montserrat] sm:text-lg text-sm text-shadow-lg text-center"
				>
					"Continuously learning, consistently building"
				</motion.p>

				<div className="flex flex-col items-center justify-start gap-7">
					<div className="flex items-center justify-center md:gap-6 gap-2 my-4 text-xl text-blue-500">
						<span className="">
							{" "}
							<PiLineVerticalLight size="35" />{" "}
						</span>
						<SkillsTypeAnimation />
						<span className="">
							{" "}
							<PiLineVerticalLight size="35" />{" "}
						</span>
					</div>

					<div className=" border-[1.5px] hover:border-purple-500 p-0.5 rounded-full group transition hover:shadow-[0_0_10px_4px_rgba(173,70,255,0.7)]">
						<a
							href="https://github.com/aniforever24"
							className="cursor-pointer"
							target="_blank"
						>
							<RiGithubLine
								size="30"
								className="text-gray-500 group-hover:text-gray-50 transition ease-out"
							/>
						</a>
						{/* <div className="absolute bg-purple-500 w-full h-full top-0 left-0 rounded-full -z-10"></div> */}
					</div>
				</div>
			</motion.div>

			<div className="">
				<DancingArrow />
			</div>
		</div>
	);
};

export default HeroSection;
