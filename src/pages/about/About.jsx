import Card from '../../components/card/Card';
import CardImg from '../../assets/imageme.jpg';
import './about.scss';
import Icon from '../../assets/icon2.png';
import InfoCard from '../../components/card/InfoCard';
import ContactCard from '../../components/card/ContactCard';
import ProfileCard from '../../components/card/ProfileCard';
import PortfolioCard from '../../components/card/PortfolioCard';

const About = () => {
	return (
		<div className='about-page section container'>
			<div className='about-page__wrapper '>
				<div className='about-top-section'>
					<div
						className='left-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<Card
							className='about-card'
							image={CardImg}
							showIcon={false}
							showInfo={false}
						/>
					</div>
					<div
						className='right-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<div className='title'>
							<h1>SELF-SUMMARY</h1>
						</div>
						<Card
							smallcard
							showIcon={false}
							title='Gunal Bondre'
							desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							 Ab reprehenderit, porro animi tempora iste inventore voluptatibus
							  natus a, error soluta adipisci minima placeat incidunt asperiores 
							  exercitationem doloremque quam reiciendis voluptatem velit? Neque 
							  aut totam quis in at? Facilis, velit veniam.
							'
						>
							<img src={Icon} alt='' className='icon2' />
						</Card>
					</div>
				</div>
				<div className='about-info-section'>
					<div
						className='left-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<InfoCard CardHeader={'Experience'}>
							<div className='experience'>
								<p>2018-2020</p>
								<h5>Frontend Developer</h5>
								<p>ITDevHub</p>
							</div>
							<div className='experience'>
								<p>2020-2021</p>
								<h5>Frontend Developer</h5>
								<p>Biz4Group</p>
							</div>
							<div className='experience'>
								<p>2021-2023</p>
								<h5>Frontend Developer</h5>
								<p>Neosoft Technology</p>
							</div>
						</InfoCard>
					</div>
					<div
						className='right-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<InfoCard CardHeader={'Education'}>
							<div className='education'>
								<p>2004-2005</p>
								<h5>10th with distinction</h5>
								<p>Maharashtra board</p>
							</div>
							<div className='education'>
								<p>2005-2006</p>
								<h5>12th with distinction</h5>
								<p>Maharashtra board</p>
							</div>
							<div className='education'>
								<p>2006-2010</p>
								<h5>Bachelor of engineering</h5>
								<p>Pune University</p>
							</div>
						</InfoCard>
					</div>
				</div>
				<div className='about-bottom-section'>
					<ProfileCard />
					<ContactCard />
					<PortfolioCard />
				</div>
			</div>
		</div>
	);
};

export default About;
