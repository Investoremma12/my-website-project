import { motion } from 'framer-motion';

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: 'easeOut' },
	},
};

export function ProjectSection() {
	return (
		<section className="relative w-[95%] sm:w-[92%] lg:w-[98%] mx-auto mt-32 text-white rounded-2xl overflow-hidden
		bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a]">

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="text-center pt-20 px-6"
			>
				<p className="text-[#b69573] tracking-widest text-sm mb-4">
					MY WORK
				</p>

				<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold mb-6 
				bg-linear-to-r from-[#ffd700] via-[#ff4500] to-[#8b0000] bg-clip-text text-transparent">
					Projects
				</h1>

				<p className="text-gray-400 max-w-2xl mx-auto">
					A showcase of my recent work. Crafted with precision, performance,
					and modern design.
				</p>
			</motion.div>

			<motion.div
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-16"
			>
				{[1, 2, 3].map((_, i) => (
					<motion.div
						key={i}
						variants={item}
						whileHover={{ y: -10 }}
						className="group relative rounded-xl overflow-hidden border border-white/10 
						bg-white/5 backdrop-blur transition duration-300"
					>
						<div className="h-48 relative overflow-hidden">
							<div className="absolute inset-0 bg-linear-to-br from-[#8b0000]/20 via-[#ff4500]/20 to-[#ffd700]/20" />

							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
							bg-[#b69573]/10 blur-2xl" />

							<div className="absolute inset-0 scale-100 group-hover:scale-110 transition duration-700 bg-black/40" />
						</div>

						<div className="p-6">
							<p className="text-xs text-[#b69573] mb-2">
								WEB DEVELOPMENT
							</p>

							<h3 className="text-xl font-semibold mb-2  transition">
								Project Title
							</h3>

							<p className="text-gray-400 text-sm mb-4">
								A modern high-performance web application built with cutting-edge technologies.
							</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{['Node.js', 'Tailwind', 'TypeScript'].map((tech, i) => (
									<span
										key={i}
										className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 
										group-hover:bg-[#b69573]/20 transition"
									>
										{tech}
									</span>
								))}
							</div>

							<motion.button
								whileHover={{ x: 5 }}
								className="text-[#b69573] text-sm flex items-center gap-2"
							>
								View Project →
							</motion.button>
						</div>

						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
						border border-[#b69573]/40 rounded-xl pointer-events-none" />
					</motion.div>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.2 }}
				className="px-6 pb-16"
			>
				<div className="flex flex-col md:flex-row justify-between items-center gap-6
				border border-[#b69573]/20 rounded-xl p-6 bg-white/5 backdrop-blur">

					<div>
						<h3 className="text-lg font-semibold mb-1">
							Have a project in mind?
						</h3>
						<p className="text-gray-400 text-sm">
							Let’s bring your ideas to life.
						</p>
					</div>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-6 py-3 rounded-lg border border-[#b69573]/40
						text-[#b69573] hover:bg-[#b69573]/10 transition"
					>
						Let’s Connect →
					</motion.button>
				</div>
			</motion.div>
		</section>
	);
}