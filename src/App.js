import Navbar from './components/Navbar';
import About from './views/About';
import Download from './views/Download';
import Features from './views/Features';
import Hero from './views/Hero';
import HowWorks from './views/HowWorks';
import Pricing from './views/Pricing';

function App() {
	return (
		<div className='App'>
			<Navbar/>
			<Hero />
			<Features/>
			<About/>
			<HowWorks/>
			<Download/>
			<Pricing/>
		</div>
	);
}

export default App;
