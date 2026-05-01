import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const { scrollYProgress } = useScroll();

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const translateY = useTransform(smoothProgress, [0, 1], ['100%', '0%']);

	useEffect(() => {
		const toggle = () => setIsVisible(window.pageYOffset > 300);
		window.addEventListener('scroll', toggle);
		return () => window.removeEventListener('scroll', toggle);
	}, []);

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{
				opacity: 1,
				scale: 1,
				rotate: [0, -1, 1, -1, 1, 0],
			}}
			transition={{ rotate: { repeat: Infinity, duration: 3, ease: 'linear' } }}
			onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			className="fixed bottom-10 right-10 z-50 cursor-pointer group"
		>
			<div className="relative w-16 h-16 rounded-full border-2 border-white/30 bg-[#0a0a0a] liquid-container overflow-hidden">
				<motion.div
					style={{ y: translateY }}
					className="absolute inset-0 w-full h-full will-change-transform"
				>
					{/* THE WAVE SURFACE (SVG for realism) */}
					<div className="absolute -top-3.75 left-0 w-[200%] h-5">
						<svg
							className="wave-svg w-full h-full"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
								fill="#ffd700"
							/>
						</svg>
					</div>

					{/* THE GOLD GRADIENT (Matches your Brand Text) */}
					<div
						className="w-full h-full"
						style={{
							background:
								'linear-gradient(to bottom, #ffd700 0%, #ff4500 60%, #8b0000 100%)',
						}}
					/>
				</motion.div>

				{/* THE ICON (Back to Top Arrow) */}
				<div className="absolute inset-0 flex items-center justify-center z-20">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="white"
						className="w-8 h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:-translate-y-1 transition-transform"
					>
						<path d="M12 4l-8 8h6v8h4v-8h6z" />
					</svg>
				</div>

				{/* INNER REFLECTION (Makes it look like glass) */}
				<div className="absolute inset-0 pointer-events-none rounded-full border border-white/10" />
			</div>

			{/* OUTER GLOW */}
			<div className="absolute inset-0 bg-gold-gradient blur-2xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
		</motion.div>
	);
}
