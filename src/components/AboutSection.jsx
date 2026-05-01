import aboutImage from '../assets/about-image.png';
import reactLogo from '../assets/react-logo.svg';
import tailwindLogo from '../assets/tailwind-logo.svg';
import viteLogo from '../assets/vite-logo.svg';
import { motion } from 'framer-motion';

export function TechStack() {
	const logos = [
		{ name: 'React', url: reactLogo },
		{ name: 'Vite', url: viteLogo },
		{ name: 'Tailwind', url: tailwindLogo },
	];

	return (
		<div className="flex gap-10 items-center justify-center py-3">
			{logos.map((logo) => (
				<div key={logo.name} className="relative group">
					<div className="absolute inset-0 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

					<div
						className="hidden md:block md:w-9 lg:h-9 icon-gold transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
						style={{
							WebkitMaskImage: `url("${logo.url}")`,
							maskImage: `url("${logo.url}")`,
						}}
					/>
				</div>
			))}
		</div>
	);
}

export function AboutSection() {
	return (
		<>
			<section id="about">
				<h1 className="text-3xl text-center lg:text-7xl bg-gold-gradient bg-clip-text text-transparent font-bold mt-16 lg:mt-20 mb-8 lg:mb-10">
					ABOUT ME
				</h1>

				<div
					className="relative w-[95%] mx-auto rounded-xl text-[#cecbcb]
					bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a] px-5 py-10 lg:px-10 lg:py-16"
					
				>
					<div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D9B46C] opacity-10 blur-3xl rounded-full"></div>

					<div className="absolute inset-0 pointer-events-none">
						<div className="stars"></div>
						<div className="stars2"></div>
					</div>

					<motion.div
						className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: 'easeOut' }}
						viewport={{ once: true }}
					>
						<div className="w-full lg:w-1/2 flex flex-col items-center">
							<div className="relative p-0.5 rounded-xl bg-gold-gradient shadow-[0_0_30px_rgba(217,180,108,0.3)] w-fit">
								<img
									src={aboutImage}
									className="h-48 sm:h-64 md:h-80 lg:h-105 object-cover rounded-lg bg-black"
								/>
							</div>

							<div className="mt-4">
								<TechStack />
							</div>
						</div>

						<div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
							<p className="text-sm sm:text-base  lg:text-lg text-[#D9B46C] tracking-wide">
								THE STORY SO FAR
							</p>

							<p className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight max-w-xl mx-auto lg:mx-0">
								BRIDGING <span className="font-serif">THE</span> GAP BETWEEN{' '}
								<span className="font-serif bg-gold-gradient bg-clip-text text-transparent">
									LOGIC
								</span>{' '}
								AND{' '}
								<span className="font-serif bg-gold-gradient bg-clip-text text-transparent">
									ART
								</span>
								.
							</p>

							<p className="text-xs sm:text-sm lg:text-base uppercase max-w-lg mx-auto lg:mx-0 leading-relaxed">
								I am a FRONTEND architect obsessed with the feel of the web.
								While most developers focus on code, I treat every pixel as part
								of a larger brand narrative using high performance tools like{' '}
								<span className="text-[#D9B46C]">vite</span> and the fluidity of{' '}
								<span className="text-[#D9B46C]">framer motion</span>.
							</p>

							<div className="flex justify-center lg:justify-start gap-8 text-[#D9B46C] pt-2">
								<div>
									<p className="text-lg lg:text-xl font-semibold">4+</p>
									<p className="text-xs lg:text-sm">YEARS EXPERIENCE</p>
								</div>
								<div>
									<p className="text-lg lg:text-xl font-semibold">50+</p>
									<p className="text-xs lg:text-sm">PROJECTS LAUNCHED</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
}
