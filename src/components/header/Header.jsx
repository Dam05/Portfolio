import { useState } from 'react';
import './header.scss';
import { BiMenu, BiX } from 'react-icons/bi';

const Header = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<nav className={`header container`}>
			<div className='logo'>
				<a href='/'>
					<h2>GB</h2>
				</a>
			</div>
			<ul className={open ? 'menu-open menu' : 'menu'}>
				<li className='menu-item'>
					<a href='/'>
						<h5>Home</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/about'>
						<h5>about</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/portfolio'>
						<h5>Portfolio</h5>
					</a>
				</li>
				<li className='menu-item'>
					<a href='/contact'>
						<h5>Contact</h5>
					</a>
				</li>
			</ul>

			<button className='button'>Lets talk</button>
			<div className='hamburger'>
				{open ? (
					<BiX onClick={handleClick} />
				) : (
					<BiMenu onClick={handleClick} />
				)}
			</div>
		</nav>
	);
};

export default Header;
