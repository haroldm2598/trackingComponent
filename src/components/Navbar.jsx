import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.svg';

function Navbar() {
	const { navbarLink } = useSelector((state) => state.pageTemplate);

	return (
		<nav className='max-w-7xl mx-auto p-10 md:py-10 flex flex-row justify-between items-center'>
			<figure>
				<img src={Logo} alt='Logo brand' />
			</figure>

			<div className='hidden lg:flex items-center gap-4'>
				<ul className='flex gap-10 navbarFont font-bold uppercase'>
					{navbarLink?.map((item, index) => (
						<li key={index} className='navbarItems'>
							{item}
						</li>
					))}
				</ul>

				<h1 className='navbarItems navbarFont font-bold uppercase mx-10'>
					login
				</h1>
			</div>

			<section className='navbar-end flex lg:hidden'>
				<nav className='dropdown dropdown-end'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className='flex flex-col gap-10 menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-base-100 rounded-box min-w-[25rem] h-[20rem]'
					>
						{navbarLink?.map((item, index) => (
							<li key={index}>
								<a className='text-2xl'>{item}</a>
							</li>
						))}
						<h1 className='px-4 text-2xl font-bold uppercase'>login</h1>
					</ul>
				</nav>
			</section>
		</nav>
	);
}

export default Navbar;
