import Card from '../../components/card/Card';
import Landing1 from '../../assets/huddle.jpg';
import Landing2 from '../../assets/sunnyside.jpg';
import './portfolio.scss';

const Portfolio = () => {
	return (
		<div className='portfolio-page container section'>
			<h2>All Projects</h2>
			<div className='portfolio-grid'>
				<Card image={Landing1} title={'Huddle Landing Page'} smallcard />
				<Card image={Landing2} title={'Sunnyside Landing Page'} smallcard />
				<Card image={Landing1} title={'Huddle Landing Page'} smallcard />
				<Card image={Landing2} title={'Sunnyside Landing Page'} smallcard />
				<Card image={Landing1} title={'Huddle Landing Page'} smallcard />
				<Card image={Landing2} title={'Sunnyside Landing Page'} smallcard />
				<Card image={Landing1} title={'Huddle Landing Page'} smallcard />
				<Card image={Landing2} title={'Sunnyside Landing Page'} smallcard />
				<Card image={Landing2} title={'Sunnyside Landing Page'} smallcard />
			</div>
		</div>
	);
};

export default Portfolio;
