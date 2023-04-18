import Navbar from './components/Navbar';
import About from './views/About';
import Features from './views/Features';
import Hero from './views/Hero';
import HowWorks from './views/HowWorks';

function App() {
	return (
		<div className='App'>
			<Navbar/>
			<Hero />
			<Features/>
			<About/>
			<HowWorks/>
		</div>
	);
}

export default App;
