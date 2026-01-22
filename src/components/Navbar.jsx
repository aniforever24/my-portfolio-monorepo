import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Navbar({menuItems}) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 80);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${ scrolled
			? "bg-[#151515]/50 inset-shadow-sm shadow-white translate-y-0 backdrop-blur-md"
		    : "bg-transparent -translate-y-2"
		}
      `}
		>
			<nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
				{/* Logo */}
				<div className="font-bold text-xl text-gray-100">&lt; Animesh /&gt;</div>

				{/* Links */}
				<ul className={twMerge("flex gap-8 text-sm font-medium text-gray-400",
                    scrolled && "text-gray-300"
                )}>
					{menuItems.map((item) => (
						<li
							key={item}
							className="hover:text-white text-shadow cursor-pointer transition-colors "
						>
							<a className="font-[Poppins]">{item}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
