import './Header.css';
import birdLogo from '../assets/flying-phoenix.jpg';
import { useState } from 'react';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	// const [isSmall, setIsSmall] = useState(false);

	return (
		<>
			<nav className="header">
				<div className="header-name">
					<img src={birdLogo} className="bird-logo" />
					<h4>Emmanuel</h4>
				</div>

				<div className="header-links">
					<p className="header-links-text">Home</p>
					<p className="header-links-text">About</p>
					<p className="header-links-text">Services</p>
					<p className="header-links-text">projects</p>
				</div>

				<div className="contact-me">contact Me</div>

				<div
					className="small-screen-section"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					☰
				</div>
			</nav>
		</>
	);
}
