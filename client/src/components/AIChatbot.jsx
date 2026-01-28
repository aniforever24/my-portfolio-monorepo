import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

const AIChatBot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			role: "model",
			parts: [
				{
					text:
						"Hi! I'm Animesh's AI agent. Ask me about his tech stack or projects!",
				},
			],
		},
	]);
	const [loading, setLoading] = useState(false);

	const scrollRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	useEffect(() => {
		if (isOpen) {
			console.log(inputRef.current);
			inputRef.current.focus();
		}
	}, [isOpen]);

	const handleSend = async () => {
		if (!input.trim()) return;
		const userMsg = { role: "user", parts: [{ text: input }] };
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setLoading(true);

		const url = `${import.meta.env?.VITE_SERVER_URL}/api/chat`;

		try {
			const res = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ message: input, history: messages }),
			});

			const data = await res.json();

			setMessages((prev) => [
				...prev,
				{ role: "model", parts: [{ text: data.data.reply }] },
			]);
		} catch (err) {
			setMessages((prev) => [
				...prev,
				{ role: "model", parts: [{ text: "Gemini is offline." }] },
			]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{/* Chat Window Container */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 50, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 50, scale: 0.9 }}
						className="fixed bottom-24 right-6 left-6 md:left-auto md:right-6 md:w-100 h-137.5 bg-[#0b0e14] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-90"
					>
						{/* Header with Smooth Gradient Animation */}
						<div className="p-4 bg-chat-header animate-smooth-flow flex justify-between items-center shadow-lg">
							<div className="flex items-center gap-2 text-white font-bold">
								<Sparkles size={18} className="animate-pulse text-yellow-300" />
								<span>Animesh AI Agent</span>
							</div>
						</div>

						{/* Chat Body */}
						<div className="flex-1 overflow-y-auto p-4 space-y-4">
							{messages.map((msg, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className={`flex ${msg.role === "user" ? "justify-end [word-spacing:2px]" : "justify-start [word-spacing:2.5px]"}`}
								>
									<div
										className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
											msg.role === "user"
												? "bg-[#a855f7] text-white text-shadow rounded-br-none"
												: "bg-gray-800/80 text-gray-200 border border-gray-700 rounded-bl-none"
										}`}
									>
										{msg.parts[0].text}
									</div>
								</motion.div>
							))}
							{loading && (
								<div className="text-[#a855f7] text-xs font-mono animate-pulse">
									Thinking...
								</div>
							)}
							<div ref={scrollRef} />
						</div>

						{/* Input Footer */}
						<div className="p-4 bg-[#0b0e14] border-t border-gray-800 flex gap-2">
							<input
								ref={inputRef}
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && handleSend()}
								placeholder="Ask me about Animesh..."
								className="flex-1 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#a855f7]"
							/>
							<button
								onClick={handleSend}
								className="p-3 bg-linear-to-r from-[#717cf5] to-[#a855f7] rounded-xl text-white"
							>
								<Send size={18} />
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* BUTTON LOGIC: SWAPPING FROM RIGHT TO LEFT */}
			<AnimatePresence>
				{!isOpen ? (
					/* RIGHT BUTTON (Message Icon) */
					<motion.button
						key="open-btn"
						initial={{ opacity: 0, x: 50, scale: 0.5 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: 50, scale: 0.5 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							setIsOpen(true);
						}}
						className="fixed bottom-6 right-6 w-16 h-16 bg-linear-to-tr from-[#717cf5] to-[#a855f7] rounded-full flex items-center justify-center text-white shadow-xl z-100 cursor-pointer"
					>
						<MessageSquare size={28} />
					</motion.button>
				) : (
					/* LEFT BUTTON (X Icon) */
					<motion.button
						key="close-btn"
						initial={{ opacity: 0, x: -100, scale: 0.5 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						exit={{ opacity: 0, x: -100, scale: 0.5 }}
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsOpen(false)}
						className="fixed bottom-6 right-6 w-16 h-16 bg-linear-to-tr from-[#717cf5] to-[#a855f7] rounded-full flex items-center justify-center text-white shadow-xl z-100 cursor-pointer"
					>
						<X size={28} />
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
};

export default AIChatBot;
