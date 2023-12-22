import Hero from '../components/Hero';
import HeroImage from '../components/HeroImage';
import Navbar from '../components/Navbar';

function Layout() {
	return (
		<section className='relative'>
			<header>
				<Navbar />
			</header>

			<main className='max-w-7xl mx-auto my-10 flex flex-col md:flex-row'>
				<Hero />
				<HeroImage />
			</main>

			<div className='backgroundShape absolute top-[-38%] md:top-[-40%] right-[-40%] md:right-[-50%] z-[-10]'></div>
		</section>
	);
}

export default Layout;
