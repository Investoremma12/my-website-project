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
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export function ServiceSection() {
	return (
		<>
			<section>
				<h1 className="text-3xl text-center lg:text-7xl bg-gold-gradient bg-clip-text text-transparent font-bold mt-20 mb-10">SERVICES</h1>
				{/* <hr className="w-100 border-solid border-4 border-white mb-10 ml-5" /> */}

				<motion.div
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
					className="h-[20%] w-full  bg-[#1d1a1a] rounded-xl text-[#cecbcb] pt-10 pb-10"
				>
					{services.map((item, index) => (
						<motion.div key={index} variants={container}>
							<h3 className="text-2xl mb-3 ml-5">
								<span className="text-3xl text-white uppercase mb-1 block">
									{item.title} {item.emoji}
								</span>
								{item.description}
							</h3>

							<ul className="list-square text-xl ml-10 mb-10">
								<li>
									<span className=" font-semibold">Result:</span> {item.result}
								</li>
								<li>
									<span className=" font-semibold">The Goal:</span> {item.goal}
								</li>
							</ul>

							{/* Only show the HR if it's NOT the last item in the list */}
							{index !== services.length - 1 && (
								<hr className="my-15 border-gray-500 mx-5" />
							)}
						</motion.div>
					))}
				</motion.div>
			</section>
		</>
	);
}
