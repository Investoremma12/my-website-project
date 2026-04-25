import birdLogo from '../assets/flying-phoenix-color.png';
import whiteMailIcon from '../assets/mail-white.svg';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="flex justify-between items-center mx-2 ">
				<div className="flex items-center gap-1">
					<img src={birdLogo} className="w-13 rounded-xl" />
					<h4 className="text-lg">Emmanuel</h4>
				</div>

				<div className="hidden lg:flex gap-4 text-lg">
					{['HOME', 'SERVICES', 'ABOUT', 'PROJECTS'].map((item) => (
						<motion.p
							key={item}
							className="hover:bg-zinc-900 p-1 rounded-md cursor-pointer transition-colors"
							whileHover={{ scale: 1.02 }}
							transition={{ ease: "easeIn" }}
						>
							{item}
						</motion.p>
					))}
				</div>
				<div className="hidden lg:block bg-gold-gradient border-none px-2 py-1 font-bold  rounded-lg cursor-pointer transition-colors shadow-gold text-lg">
					contact Me
				</div>
				<button
					className={`fixed top-4 right-4 z-999 flex items-center cursor-pointer justify-center w-12 h-12 rounded-full transition-all duration-300 outline-none border-none lg:hidden
        ${isOpen ? 'bg-black shadow-lg' : 'bg-transparent hover:bg-zinc-900'}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="relative w-6 h-6 flex items-center justify-center">
						{/* Top Line */}
						<motion.div
							className="absolute w-full h-0.5 rounded-full" // Reduced from 3px to 2px
							style={{
								background:
									'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
								transformOrigin: 'center',
							}}
							animate={
								isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -2 } // Tight 2px gap (relative to center)
							}
							transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						/>
						{/* Bottom Line */}
						<motion.div
							className="absolute w-full h-0.5 rounded-full" // Reduced from 3px to 2px
							style={{
								background:
									'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
								transformOrigin: 'center',
							}}
							animate={
								isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 } // Tight 2px gap (relative to center)
							}
							transition={{ type: 'spring', stiffness: 260, damping: 20 }}
						/>
					</div>
				</button>
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
									delay: 0.2, // The "wait a little" part
									ease: 'anticipate',
								},
							}}
							transition={{ duration: 0.6, ease: 'easeIn' }}
							className="bg-[#161616] w-full rounded-sm z-100 fixed text-white right-0 bottom-0 top-1 lg:hidden md:w-[50%]"
						>
							<div className="space-y-5 mt-15 mb-20 ml-5">
								{['HOME', 'SERVICES', 'ABOUT',  'PROJECTS'].map((item) => (
									<p
										key={item}
										className="cursor-pointer text-[40px] font-black text-[#cecbcb] hover:text-white active:text-white transition-colors w-fit"
									>
										{item}
									</p>
								))}
							</div>

							<motion.div drag className="bg-gold-gradient mx-auto  border-none px-3 py-1 font-bold w-fit rounded-lg cursor-pointer  shadow-gold text-lg ">
								contact Me
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
}
