import React from "react";

const Footer = () => {
	return (
		<footer className="mt-24 pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm">
			<p>© {new Date().getFullYear()} Animesh Sharma. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
