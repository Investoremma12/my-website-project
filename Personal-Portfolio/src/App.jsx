import './App.css';
import { Header } from './components/Header';
import { motion } from 'framer-motion';
import { IntroSection } from './components/IntroSection';
import { ServiceSection } from './components/ServiceSection';

const generateParticles = () => {
	return Array.from({ length: 10 }, () => {
		const size =
			Math.random() > 0.8 ? Math.random() * 12 + 8 : Math.random() * 5 + 3;
		const blur = size > 8 ? 'blur-[2px]' : 'blur-[0px]';
		const randomX = Math.random() * 100;
		const randomY = Math.random() * 100;
		const duration = Math.random() * 10 + 15;
		const xOffset = (Math.random() - 0.5) * 120;
		const yOffset = (Math.random() - 0.5) * 120;
		return { size, blur, randomX, randomY, duration, xOffset, yOffset };
	});
};

const particlesData = generateParticles();

const Particle = ({
	size,
	blur,
	randomX,
	randomY,
	duration,
	xOffset,
	yOffset,
}) => {
	return (
		<motion.div
			className={`fixed rounded-full pointer-events-none ${blur}`}
			style={{
				width: size,
				height: size,
				// Using your exact brand gradient: Dark Red -> Orange -> Gold
				background:
					'linear-gradient(45deg, #8b0000 0%, #ff4500 50%, #ffd700 100%)',
				left: `${randomX}%`,
				top: `${randomY}%`,
				// This shadow uses the middle "hot" color to create the glow
				boxShadow: `0 0 20px 2px rgba(255, 69, 0, 0.6)`,
			}}
			animate={{
				x: [0, xOffset, 0],
				y: [0, yOffset, 0],
				opacity: [0.4, 0.9, 0.4],
				scale: [1, 1.2, 1],
			}}
			transition={{
				duration: duration,
				repeat: Infinity,
				ease: 'linear',
			}}
		/>
	);
};

export function BackgroundParticles() {
	return (
		/* Changed fixed to absolute so it stays inside the section */
		<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden contrast-150 saturate-150">
			{particlesData.map((props, i) => (
				<Particle key={i} {...props} />
			))}
		</div>
	);
}
const SectionDivider = () => {
  return (
    <div className="relative w-full h-px flex justify-center items-center my-10">
      {/* The main fading line */}
      <div className="absolute w-full h-[1px] bg-[image:var(--bg-section-divider)]" />
      
      {/* A small central glow "dot" to signify the break */}
      <div className="absolute w-24 h-8 bg-yellow-500/20 blur-xl rounded-full" />
    </div>
  );
};
function App() {
	return (
		<main >
			<BackgroundParticles />
			<Header />
			<IntroSection />
			<SectionDivider/>
			<ServiceSection />
		</main>
	);
}

export default App;
