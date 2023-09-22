import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
