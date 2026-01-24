import React, { useEffect } from "react";
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
import AIChatBot from "./components/AIchatbot";
import BackgroundGlow from "./components/BackgroundGlow";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
	const menuItems = ["Home", "About", "Skills", "Projects", "Hobbies", "Connect"];

	return (
		<>
			<BackgroundGlow/>

			<div className="h-500">
				<div className="sm:block hidden">
					<Navbar menuItems={menuItems} />
				</div>
				<div className="sm:hidden block">
					<HamburgerMenu menuItems={menuItems} />
				</div>

				<HeroSection />

				<WaveDivider />

				<AboutMeSection />

				<LoopingDotDivider />

				<TechnicalSkills />

				<GlowingDivider centralGlow={false} />

				<ProjectsSection/>

				<LoopingDotDivider />

				<HobbiesSection />

				{/* <LoopingDotDivider/> */}

				<ECGDivider />

				<ConnectSection />
			</div>
			<AIChatBot/>
		</>
	);
};

export default App;
