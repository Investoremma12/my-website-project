import workPic from '../assets/profile-pic.avif';
import { motion } from 'framer-motion';
import { useState } from 'react';

// 1. Define GlowingLine OUTSIDE of the other function
export function GlowingLine() {
	return (
		<div className="hidden lg:flex justify-center w-full my-10 overflow-hidden ">
			<div
				className="relative h-px w-[80%] bg-zinc-900"
				style={{
					maskImage:
						'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
					WebkitMaskImage:
						'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
				}}
			>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: '100%' }}
					transition={{
						repeat: Infinity,
						duration: 4,
						ease: 'linear',
					}}
					className="absolute inset-0 w-full h-full"
					style={{
						background:
							'linear-gradient(90deg, transparent 0%, #ff4500 50%, transparent 100%)',
					}}
				/>
			</div>
		</div>
	);
}

export function IntroSection() {
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	return (
		<>
			<motion.section
				className="mx-12"
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="flex flex-col md:flex-row mt-10 gap-3 mx-auto bg-[#1d1a1a] w-[93%] p-5 rounded-sm">
					<div className="mt-7 order-2 md:order-1">
						<p className="text-[1.2rem] lg:text-[1.5rem] font-bold">
							Hi! i am
							<span className="bg-gold-gradient bg-clip-text text-transparent text-[1.6rem] lg:text-3xl ml-1">
								Emmanuel Onyibe
							</span>
						</p>
						<p className="text-xl lg:text-2xl font-bold">A web developer</p>
						<div className="mt-3 max-w-4xl">
							<p className="text-xl italic hidden sm:block md:block">
								I specialize in building bespoke, high-performance web
								solutions. From sleek landing pages to complex platforms, I
								combine expert technical skill with modern design to bring any
								digital vision to life.
							</p>
							<p className="text-xl italic sm:hidden md:hidden">
								I craft high-performance digital solutions, combining modern
								design with expert technical skill to bring bespoke web visions
								to life.
							</p>
						</div>
						{/* <div className="bg-gold-gradient mx-auto border-none px-2 py-1 font-bold w-fit rounded-lg cursor-pointer shadow-gold text-lg md:hidden">
							contact Me
						</div> */}
					</div>
					<div className="flex justify-center items-center  md:order-2">
						<div className="p-1.25 rounded-full w-fit bg-gold-gradient sm:rounded-4xl  md:bg-none ">
							<img
								src={workPic}
								className={`w-50 h-50 rounded-full object-cover border-4  border-[#1d1a1a] sm:w-60 sm:h-60 sm:rounded-4xl  md:h-auto md:rounded-lg lg:rounded-sm md:w-auto ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
								onLoad={() => setIsImageLoaded(true)}
							/>
						</div>
					</div>
				</div>
			</motion.section>

			<GlowingLine />
		</>
	);
}
