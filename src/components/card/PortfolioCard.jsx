import Card from './Card';
import PortfolioBanner from '../../assets/project.jpg';

const PortfolioCard = () => {
	return (
		<div className='portfolio-card'>
			<a
				href='/portfolio'
				data-aos='zoom-in'
				data-aos-delay='50'
				data-aos-duration='1000'
				data-aos-easing='ease-in-out'
			>
				<Card
					title='Portfolio'
					subtitle='See in action'
					desc=''
					direction='column'
					image={PortfolioBanner}
					smallcard
				/>
			</a>
		</div>
	);
};

export default PortfolioCard;
