import { GlowingLine } from './IntroSection';
import { motion } from 'framer-motion';

const services = [
	{
		title: 'High-Performance Web Experiences',
		emoji: '🚀',
		description:
			'I don’t just build websites; I build digital storefronts that feel instantaneous. By using modern tools like Vite, I ensure your site loads at lightning speed, keeping your visitors engaged and improving your SEO rankings from day one.',
		result: 'Smooth transitions and zero lag.',
		goal: 'Converting passersby into loyal customers through a frictionless interface.',
	},
	{
		title: 'Scalable Frontend Architecture',
		emoji: '🧠',
		description:
			"Whether you’re a startup or an established brand, you need a codebase that can grow with you. I specialize in building robust, 'future-proof' applications using typed logic and efficient state management.",
		result: 'Clean, predictable code that’s easy to maintain.',
		goal: 'A reliable foundation that supports your business as it scales.',
	},
	{
		title: 'Immersive Motion & Brand Identity',
		emoji: '🎨',
		description:
			'Static sites are a thing of the past. I bring your brand’s personality to life through purposeful animation using industry-leading motion libraries to create subtle, sophisticated interactions.',
		result: 'A unique, premium feel that stands out from competitors.',
		goal: 'Creating a memorable visual identity that resonates with your audience.',
	},
	{
		title: 'Responsive, Mobile-First Design',
		emoji: '📱',
		description:
			'Your users are everywhere—on their phones, tablets, and monitors. I create fluid layouts that adapt perfectly to any screen size, focusing on accessibility and modern styling.',
		result: 'A consistent experience across every device.',
		goal: 'Reaching 100% of your audience with a polished, accessible design.',
	},
];

const container = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0 },
};

export function ServiceSection() {
	return (
		<section className="w-[95%] sm:w-[98%] mx-auto mt-24 sm:mt-32 text-white" id="services">

			<h1 className="text-3xl sm:text-5xl lg:text-7xl text-center 
			bg-gold-gradient bg-clip-text text-transparent font-bold mb-16">
				SERVICES
			</h1>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				className="flex flex-col gap-10"
			>

				{services.map((service, index) => (
					<motion.div
						key={index}
						variants={item}
						className="relative rounded-2xl overflow-hidden
						bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a]
						border border-white/10 p-6 sm:p-10 lg:p-14
						transition duration-300 group"
					>

						<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
							<div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(182,149,115,0.25)]" />
							<div className="absolute inset-0 border border-[#b69573]/40 rounded-2xl" />
						</div>

						<div className="relative z-10 max-w-4xl">

							<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
								{service.title} {service.emoji}
							</h3>

							<p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
								{service.description}
							</p>

							<div className="space-y-2 text-sm sm:text-base lg:text-lg">
								<p>
									<span className="text-[#b69573] font-semibold">Result:</span>{' '}
									{service.result}
								</p>
								<p>
									<span className="text-[#b69573] font-semibold">Goal:</span>{' '}
									{service.goal}
								</p>
							</div>

						</div>
					</motion.div>
				))}

			</motion.div>

			<div className="mt-16">
				<GlowingLine />
			</div>
		</section>
	);
}