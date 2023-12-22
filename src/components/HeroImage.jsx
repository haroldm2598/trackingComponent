import HeroImg from '../assets/images/illustration-devices.svg';

function HeroImage() {
	return (
		<section className='order-1 md:order-2 max-w-6xl w-[50rem] h-[10rem] md:h-[25rem] mx-auto mb-64 md:mb-0 relative'>
			<figure>
				<img
					src={HeroImg}
					alt='Hero Background Image'
					className='w-full h-96 absolute top-[-20%] md:top-0 md:right-[-30%] z-10'
				/>
			</figure>
		</section>
	);
}

export default HeroImage;
