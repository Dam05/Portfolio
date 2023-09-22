import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='logo'>
				<h2>Gunal Bondre</h2>
			</div>
			<ul className='menu'>
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
		</div>
	);
};

export default Footer;
