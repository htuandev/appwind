import Navbar from './components/Navbar';
import About from './views/About';
import Features from './views/Features';
import Hero from './views/Hero';

function App() {
	return (
		<div className='App'>
			<Navbar/>
			<Hero />
			<Features/>
			<About/>
		</div>
	);
}

export default App;
