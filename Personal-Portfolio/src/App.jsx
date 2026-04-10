import './App.css';
import { Header } from './components/Header';
import { IntroSection } from './components/IntroSection';

function App() {
	return (
		<div className="app-container">
			<Header />
			<IntroSection />

			{/* <div>
				<div>Services</div>
			</div> */}
		</div>
	);
}

export default App;
