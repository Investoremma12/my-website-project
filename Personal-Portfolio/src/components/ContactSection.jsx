import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import TechTroveSymbol from '../assets/techtrove.png';

export function ContactSection() {
	return (
		<footer
			className="relative w-full mt-40 text-white overflow-hidden
			bg-linear-to-br from-black via-[#0f0f0f] to-[#1a1a1a]"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-10 py-16">
				
				<div>
					<p className="text-[#D9B46C] text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
						LET'S CONNECT
					</p>

					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
						I transform ideas into <br />
						high-quality digital <br />
						experiences — you bring <br />
						the vision,{' '}
						<span className="bg-gold-gradient bg-clip-text text-transparent">
							I engineer the solution.
						</span>
					</h1>

					<div className="w-10 sm:w-12 h-0.5 bg-white mt-5 sm:mt-6 mb-5 sm:mb-6" />

					<p className="text-gray-400 max-w-md text-sm sm:text-base">
						I partner with ambitious individuals and businesses to craft
						premium, high-performance websites that drive results and leave a
						lasting impact.
					</p>
				</div>

				<div className="flex flex-col justify-center gap-6 sm:gap-8">
					
					<div className="flex items-start sm:items-center gap-4">
						<div className="p-3 sm:p-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur">
							<Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
						</div>
						<div>
							<p className="text-xs sm:text-sm text-gray-400">EMAIL</p>
							<p className="text-base sm:text-lg">hello@techtrove.dev</p>
							<p className="text-xs text-gray-500">
								I typically reply within 24 hours
							</p>
						</div>
					</div>

					<div className="flex items-start sm:items-center gap-4">
						<div className="p-3 sm:p-4 rounded-xl border border-white/30 bg-white/5 backdrop-blur">
							<Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
						</div>
						<div>
							<p className="text-xs sm:text-sm text-gray-400">PHONE</p>
							<p className="text-base sm:text-lg">+234 9067276340</p>
							<p className="text-xs text-gray-500">Mon – Sat, 10AM – 8PM</p>
						</div>
					</div>

					<button
						className="mt-4 sm:mt-6 w-full sm:w-auto flex items-center justify-between gap-4 px-5 sm:px-6 py-3 sm:py-4 rounded-xl border border-[#D9B46C]/40
						text-white hover:bg-[#b69573]/10 transition group"
					>
						<span className="text-sm sm:text-base">
							LET’S BUILD SOMETHING EXTRAORDINARY
						</span>
						<ArrowUpRight className="group-hover:translate-x-1 transition" />
					</button>
				</div>
			</div>

			<div className="border-t border-[#b69573]/20 px-4 sm:px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6 md:gap-0">
				
				<div className="flex items-center gap-3 text-center md:text-left">
					<img src={TechTroveSymbol} className="w-10 h-10 sm:w-12 sm:h-12" />
					<div>
						<p className="text-white font-semibold">TECH TROVE</p>
						<p className="text-xs">Crafting Digital Excellence</p>
					</div>
				</div>

				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
					<p className="hover:text-white cursor-pointer">HOME</p>
					<p className="hover:text-white cursor-pointer">SERVICES</p>
					<p className="hover:text-white cursor-pointer">ABOUT</p>
					<p className="hover:text-white cursor-pointer">PROJECTS</p>
				</div>
			</div>
		</footer>
	);
}