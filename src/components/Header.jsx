import TechTroveSymbol from '../assets/techtrove.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
			document.documentElement.style.overflow = '';
		};
	}, [isOpen]);

	const navLinks = [
		{ name: 'HOME', href: '#intro' },
		{ name: 'SERVICES', href: '#services' },
		{ name: 'ABOUT', href: '#about' },
		{ name: 'PROJECTS', href: '#projects' },
	];
	return (
		<>
			<nav className="w-full bg-black/30 border-b border-white/10 px-4 sm:px-6 lg:px-10 py-4">
				<div className="flex justify-between items-center max-w-7xl mx-auto">
					<div className="flex items-center gap-2">
						<img src={TechTroveSymbol} className="w-11 h-11" />
						<p className="text-white font-semibold tracking-wide">TECH TROVE</p>
					</div>
					<div className="hidden lg:flex gap-8 text-sm font-medium justify-center">
						{navLinks.map((item) => (
							<motion.a
								href={item.href}
								key={item.name}
								className="relative cursor-pointer text-gray-300 hover:text-white transition"
								whileHover="hover"
								initial="rest"
								animate="rest"
							>
								<p>{item.name}</p>

								<motion.span
									variants={{
										rest: { width: 0 },
										hover: { width: '100%' },
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
									className="absolute left-0 -bottom-1 h-0.5 bg-gold-gradient"
								/>
							</motion.a>
						))}
					</div>

					<div className="flex items-center justify-end gap-3">
						<div className="hidden lg:block ">
							<a href="#contact">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="relative cursor-pointer px-4 py-2 rounded-lg font-semibold text-sm text-white overflow-hidden border border-[#b69573]/40"
								>
									<span className="absolute inset-0 bg-gold-gradient" />
									<span className="relative z-10">Contact Me</span>
								</motion.button>
							</a>
						</div>

						<button
							className={`top-4 right-4 z-999 flex items-center cursor-pointer justify-center w-12 h-12 rounded-full transition-all duration-300 outline-none border-none lg:hidden
        ${isOpen ? 'bg-black shadow-lg' : 'bg-transparent hover:bg-zinc-900'}`}
							onClick={() => setIsOpen(!isOpen)}
						>
							<div className="relative w-6 h-6 flex items-center justify-center">
								<motion.div
									className="absolute w-full h-0.5 rounded-full"
									style={{
										background:
											'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
										transformOrigin: 'center',
									}}
									animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -2 }}
									transition={{ type: 'spring', stiffness: 260, damping: 20 }}
								/>
								<motion.div
									className="absolute w-full h-0.5 rounded-full"
									style={{
										background:
											'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
										transformOrigin: 'center',
									}}
									animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
									transition={{ type: 'spring', stiffness: 260, damping: 20 }}
								/>
							</div>
						</button>
					</div>
				</div>
				<AnimatePresence>
					{isOpen && (
						<>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								onClick={() => setIsOpen(false)}
								className="fixed inset-0  bg-black/80 backdrop-blur-md z-40"
							/>

							<motion.div
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ type: 'spring', stiffness: 100, damping: 18 }}
								className="fixed top-0 right-0 h-screen w-full md:w-[50%] lg:hidden
				bg-linear-to-br from-[#0a0a0a] via-[#111] to-[#1a1a1a]
				text-white z-50 flex flex-col justify-between px-8 py-10 border-l border-white/10"
							>
								<div>
									<p className="text-xs tracking-widest text-[#b69573] mb-6">
									</p>

									<div className="space-y-8">
										{navLinks.map((item, index) => (
											<motion.a
												key={item.name}
												href={item.href}
												onClick={() => setIsOpen(false)}
												initial={{ opacity: 0, x: 60 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.1 }}
												className="group relative block text-3xl sm:text-4xl font-bold text-gray-400 hover:text-white transition"
											>
												{item.name}

												<span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-linear-to-r from-[#ffd700] to-[#ff4500] transition-all duration-300 group-hover:w-full" />
											</motion.a>
										))}
									</div>
								</div>

								<div className="space-y-6">
									<a href="#contact" onClick={() => setIsOpen(false)}>
										<motion.button
											whileHover={{ scale: 1.04 }}
											whileTap={{ scale: 0.96 }}
											className="relative w-full py-3 rounded-lg font-semibold text-sm overflow-hidden border border-[#b69573]/30"
										>
											<span className="absolute inset-0 bg-linear-to-r from-[#8b0000] via-[#ff4500] to-[#ffd700] opacity-80" />

											<span className="relative z-10 text-black">
												Start a Project →
											</span>
										</motion.button>
									</a>

									<div className="text-center text-xs text-gray-500">
										<p>Available for freelance</p>
										<p className="mt-1">Response within 24 hours</p>
									</div>
								</div>

								<div className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 bg-orange-500/20 blur-3xl" />
							</motion.div>
						</>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}
