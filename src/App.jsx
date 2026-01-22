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
import { ECGDivider, GlowingDivider, LoopingDotDivider, WaveDivider } from "./components/ui/animations";
import ConnectSection from "./components/ConnectSection";


const App = () => {
	const menuItems = ["Home", "About", "Skills", "Hobbies", "Connect"];

	return (
		<div className="h-500">
			<div className="sm:block hidden">
				<Navbar menuItems={menuItems} />
			</div>
			<div className="sm:hidden block">
				<HamburgerMenu menuItems={menuItems} />
			</div>

			<HeroSection />
			
			<WaveDivider/>
			
			<AboutMeSection/>

			<LoopingDotDivider/>

			<TechnicalSkills/>

			<GlowingDivider centralGlow={false}/>

			<HobbiesSection/>

			{/* <LoopingDotDivider/> */}

			<ECGDivider/>

			<ConnectSection/>
		</div>
	);
};

export default App;
