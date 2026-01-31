import React, { useEffect, useRef } from "react";
import TechnicalSkills from "./components/TechnicalSkills";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HamburgerMenu from "./components/HamburgerMenu";
import useWindowWidth from "./customHooks/useWindowWidth";
import ChillDev from "./components/ui/ChillDev";
import AboutMeSection from "./components/AboutMeSection";
import Divider from "./components/Divider";
import HobbiesSection from "./components/MyHobbies";
import {
	ECGDivider,
	GlowingDivider,
	LoopingDotDivider,
	WaveDivider,
} from "./components/ui/animations";
import ConnectSection from "./components/ConnectSection";
import AIChatBot from "./components/AIChatbot";
import BackgroundGlow from "./components/BackgroundGlow";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
	const menuItems = [
		"Home",
		"About",
		"Skills",
		"Projects",
		"Hobbies",
		"Connect",
	];

	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const hobbiesRef = useRef(null);
	const connectRef = useRef(null);

	const wakeServer = async () => {
		const hasWokenServer = sessionStorage.getItem("server_woken");

		if (hasWokenServer) return;

		const url = `${import.meta.env.VITE_SERVER_URL}/health`;

		try {
			fetch( url, { keepalive: true, cache: "no-store" }).catch((er) => {});
			sessionStorage.setItem("server_woken", "true");
		} catch (error) {
			console.log("error in waking server:", error);
		}
	};

	useEffect(() => {
		wakeServer();
	}, []);

	return (
		<>
			<BackgroundGlow />

			<div className="h-500">
				<div className="sm:block hidden">
					<Navbar
						menuItems={menuItems}
						sectionRefs={[
							homeRef,
							aboutRef,
							skillsRef,
							projectsRef,
							hobbiesRef,
							connectRef,
						]}
					/>
				</div>
				<div className="sm:hidden block">
					<HamburgerMenu
						menuItems={menuItems}
						sectionRefs={[
							homeRef,
							aboutRef,
							skillsRef,
							projectsRef,
							hobbiesRef,
							connectRef,
						]}
					/>
				</div>

				<section ref={homeRef}>
					<HeroSection />
				</section>

				<WaveDivider />

				<section ref={aboutRef}>
					<AboutMeSection />
				</section>

				<LoopingDotDivider />

				<section ref={skillsRef}>
					<TechnicalSkills />
				</section>

				<GlowingDivider centralGlow={false} />

				<section ref={projectsRef}>
					<ProjectsSection />
				</section>

				<LoopingDotDivider />

				<section ref={hobbiesRef}>
					<HobbiesSection />
				</section>

				{/* <LoopingDotDivider/> */}

				<ECGDivider />

				<section ref={connectRef}>
					<ConnectSection />
				</section>
			</div>
			<AIChatBot />
		</>
	);
};

export default App;
