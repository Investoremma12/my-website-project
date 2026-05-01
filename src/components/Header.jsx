import TechTroveSymbol from '../assets/techtrove.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
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
						<motion.div
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{
								opacity: 0,
								x: 100,
								transition: {
									duration: 0.8,
									delay: 0.2,
									ease: 'anticipate',
								},
							}}
							transition={{ duration: 0.6, ease: 'easeIn' }}
							className="fixed inset-0 w-full md:w-[50%] ml-auto
							bg-[#161616] text-white z-100 lg:hidden"
						>
							<div className="space-y-5 mt-15 mb-20 ml-5">
								{navLinks.map((item) => (
									<a href={item.href} key={item.name}>
										<p className="cursor-pointer text-[40px] font-black text-[#cecbcb] hover:text-white active:text-white transition-colors w-fit">
											{item.name}
										</p>
									</a>
								))}
							</div>

							<a href="#contact">
								<div className="bg-gold-gradient mx-auto  border-none px-3 py-1 font-bold w-fit rounded-lg cursor-pointer  shadow-gold text-lg ">
									contact Me
								</div>
							</a>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}
