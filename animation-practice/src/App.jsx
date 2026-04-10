import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
	const [invisible, setInvisible] = useState(false);

	const switchButton = () => {
		if (invisible === true) {
			setInvisible(false);
		} else {
			setInvisible(true);
		}
	};
	return (
		<>
			<div id="center">
				<button onClick={switchButton}>toggle button</button>
				{invisible && (
					<motion.button
						initial={{ y: -10, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 4 }}
					>
						invisble
					</motion.button>
				)}
			</div>

			{/* <motion.div id="center">
				<motion.h1
					initial={{ opacity: 0, y: -200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 3 }}
				>
					Get started
				</motion.h1>
			</motion.div> */}
		</>
	);
}

export default App;
