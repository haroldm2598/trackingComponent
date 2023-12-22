import Button from './reusable/Button';

function Hero() {
	return (
		<section className='order-2 md:order-1 max-w-6xl mx-5 md:mx-0 [&>*]:my-4 md:[&>*]:my-8'>
			<div className='flex'>
				<span className='mr-4 px-2 bg-black uppercase rounded-full'>
					<h1 className='headingFont text-white'>New</h1>
				</span>
				<h1 className='uppercase tracking-wide opacity-70'>
					Monograph Dashboard
				</h1>
			</div>

			<h1 className='headingFont max-w-2xl text-6xl font-bold uppercase'>
				Powerful insights into your team
			</h1>
			<h2 className='max-w-xs'>
				Project planning and time tracking for agile teams
			</h2>

			<div className='[&>*]:mr-10'>
				<Button name='Schedule a demo' customStyle='redBtn btn uppercase' />
				<Button
					name='to see a live preview'
					customStyle='uppercase tracking-wide'
				/>
			</div>
		</section>
	);
}

export default Hero;
