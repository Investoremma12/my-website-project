import workPic from '../assets/work-profile-pic.png';
import { motion } from 'framer-motion';
import './IntroSection.css';

export function IntroSection() {
	return (
		<>
			<motion.div
				className="intro-section"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<div className="intro-text-image">
					<div className="intro-text">
						<p className="my-name">
							Hi! i am <span className="name">Emmanuel Onyibe</span>
						</p>
						<p className="my-profession">A web developer</p>
						<div className="my-bio">
							<p className="bio-text">
								I specialize in building bespoke, high-performance web
								solutions.
							</p>
							<p className="bio-text">
								From sleek landing pages to complex platforms, I combine expert
							</p>
							<p className="bio-text">
								technical skill with modern design to bring any digital vision
								to life.
							</p>
						</div>
					</div>
					<img src={workPic} className="work-profile-pic" />
				</div>
			</motion.div>
		</>
	);
}
