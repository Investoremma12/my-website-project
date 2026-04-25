import aboutImage from '../assets/about-image.png';
import reactLogo from '../assets/react-logo.svg';
import tailwindLogo from '../assets/tailwind-logo.svg';
import viteLogo from '../assets/vite-logo.svg';

export function TechStack() {
	const logos = [
		{ name: 'React', url: reactLogo },
		{ name: 'Vite', url: viteLogo }, // Now using the "Shield" SVG
		{ name: 'Tailwind', url: tailwindLogo },
	];

	return (
		<div className="flex gap-10 items-center justify-center py-3">
			{logos.map((logo) => (
				<div key={logo.name} className="relative group">
					{/* Optional: Tiny glow behind the icon on hover */}
					<div className="absolute inset-0 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

					<div
						className="w-9 h-9 icon-gold transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
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
			<section>
				<h1 className="text-3xl text-center lg:text-7xl bg-gold-gradient bg-clip-text text-transparent font-bold mt-20 mb-10">
					ABOUT ME
				</h1>

				<div
					className="relative h-150 w-[98%] mx-auto  rounded-xl text-[#cecbcb] flex items-center justify-center overflow-hidden
	bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a]"
				>
					{/* 🌌 Moon glow */}
					<div className="absolute -top-25 -right-25 w-75 h-75 bg-[#D9B46C] opacity-10 blur-3xl rounded-full"></div>

					{/* ✨ Stars */}
					<div className="absolute inset-0 pointer-events-none">
						<div className="stars"></div>
						<div className="stars2"></div>
					</div>
					<div className="flex items-center">
						<div className="w-1/2">
							<div className="flex justify-center flex-col items-center">
								<div className="relative p-0.5 rounded-xl bg-gold-gradient shadow-[0_0_20px_rgba(255,69,0,0.3)] mt-5 ml-5 w-fit">
									<img
										src={aboutImage}
										className="h-100 object-cover rounded-lg bg-black"
									/>
								</div>
								<TechStack />
							</div>
						</div>

						<div className="w-1/2 space-y-3">
							<p className="text-lg text-[#D9B46C]">THE STORY SO FAR</p>
							<p className="text-6xl font-bold  max-w-160">
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
							<p className="text-md max-w-150 uppercase">
								I am a FRONTEND architect obsessed with the feel of the web.
								While most developers focus on code. I treat every pixel as part
								of a larger brand narrative using high performnace tools like{' '}
								<span className="text-[#D9B46C]">vite</span> and the fluidy of{' '}
								<span className="text-[#D9B46C]">framer motion</span>, i build
								experiences that just don't work-They resonate
							</p>
							<div className="flex text-[#D9B46C] gap-5">
								<div>
									<p className="text-xl">4+</p>
									<p>YEARS EXPERIENCE</p>
								</div>
								<div>
									<p className="text-xl">50+</p>
									<p>PROJECTS LAUNCHED</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
