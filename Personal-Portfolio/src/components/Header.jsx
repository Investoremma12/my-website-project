import TechTroveSymbol from '../assets/techtrove.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className="w-full bg-black/30 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-10 py-4">
				<div className="flex justify-between items-center max-w-7xl mx-auto">
					<div className="flex items-center gap-2">
						<img src={TechTroveSymbol} className="w-11 h-11" />
						<p className="text-white font-semibold tracking-wide">TECH TROVE</p>
					</div>
					<div className="hidden lg:flex gap-8 text-sm font-medium justify-center">
						{['HOME', 'SERVICES', 'ABOUT', 'PROJECTS'].map((item) => (
							<motion.div
								key={item}
								className="relative cursor-pointer text-gray-300 hover:text-white transition"
								whileHover="hover"
								initial="rest"
								animate="rest"
							>
								<p>{item}</p>

								<motion.span
									variants={{
										rest: { width: 0 },
										hover: { width: '100%' },
									}}
									transition={{ duration: 0.3, ease: 'easeOut' }}
									className="absolute left-0 -bottom-1 h-0.5 bg-gold-gradient"
								/>
							</motion.div>
						))}
					</div>

					<div className="flex items-center justify-end gap-3">
						
						<div className="hidden lg:block">
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="relative px-4 py-2 rounded-lg font-semibold text-sm text-white overflow-hidden border border-[#b69573]/40"
							>
								<span className="absolute inset-0 bg-gold-gradient" />
								<span className="relative z-10">Contact Me</span>
							</motion.button>
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
									animate={
										isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -2 } 
									}
									transition={{ type: 'spring', stiffness: 260, damping: 20 }}
								/>
								<motion.div
									className="absolute w-full h-0.5 rounded-full"
									style={{
										background:
											'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
										transformOrigin: 'center',
									}}
									animate={
										isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 } 
									}
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
							className="bg-[#161616] w-full rounded-sm z-100 fixed text-white right-0 bottom-0 top-1 lg:hidden md:w-[50%]"
						>
							<div className="space-y-5 mt-15 mb-20 ml-5">
								{['HOME', 'SERVICES', 'ABOUT', 'PROJECTS'].map((item) => (
									<p
										key={item}
										className="cursor-pointer text-[40px] font-black text-[#cecbcb] hover:text-white active:text-white transition-colors w-fit"
									>
										{item}
									</p>
								))}
							</div>

							<motion.div
								drag
								className="bg-gold-gradient mx-auto  border-none px-3 py-1 font-bold w-fit rounded-lg cursor-pointer  shadow-gold text-lg "
							>
								contact Me
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}
