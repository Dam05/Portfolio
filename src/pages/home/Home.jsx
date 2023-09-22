import './home.scss';
import Card from '../../components/card/Card';
import CardImg from '../../assets/imageme.jpg';
import Sign from '../../assets/signature.png';
import BlogImg from '../../assets/featured.jpg';
import ContactCard from '../../components/card/ContactCard';
import ProfileCard from '../../components/card/ProfileCard';
import PortfolioCard from '../../components/card/PortfolioCard';
const Home = () => {
	return (
		<section>
			<section className='section  container'>
				<div className='hero-section'>
					<div
						className='left-section'
						data-aos='zoom-in'
						data-aos-delay='50'
						data-aos-duration='1000'
						data-aos-easing='ease-in-out'
					>
						<a href='/about'>
							<Card
								title='Gunal Bondre'
								subtitle='Web Developer'
								desc='I am a web developer based out of Pune, India'
								image={CardImg}
								direction={'row'}
							/>
						</a>
					</div>
					<div className='right-section'>
						<div className='top-section card'>
							<div className='banner'>
								<div className='marquee'>
									<div>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
										<span>
											<p>
												Latest Work <b>Featured</b>
											</p>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className='bottom-section'>
							<div
								className='card-section'
								data-aos='zoom-in'
								data-aos-delay='50'
								data-aos-duration='1000'
								data-aos-easing='ease-in-out'
							>
								<a href='/about'>
									<Card
										title='Credentials'
										subtitle='More about me'
										desc=''
										direction='column'
										image={Sign}
										smallcard
									/>
								</a>

								<PortfolioCard />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='middlesection container'>
				<div
					className='left'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card
						title='Blog'
						subtitle='What i write'
						smallcard
						image={BlogImg}
					/>
				</div>
				<div
					className='middle'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<Card title='TechStack' subtitle='what i know' smallcard>
						<div className='languages'>
							<h4>HTML</h4>
							<h4>CSS</h4>
							<h4>SCSS</h4>
							<h4>NodeJs</h4>
							<h4>React</h4>
							<h4>MongoDB</h4>
							<h4>Styled Components</h4>
							<h4>Express JS</h4>
							<h4>Javascript</h4>
							<h4>AWS Basics</h4>
						</div>
					</Card>
				</div>
				<ProfileCard />
			</section>
			<section className='bottom-section container'>
				<div
					className='left'
					data-aos='zoom-in'
					data-aos-delay='50'
					data-aos-duration='1000'
					data-aos-easing='ease-in-out'
				>
					<div className='card card-wrapper'>
						<div className='card'>
							<h1>5</h1>
							<h4>years of experience</h4>
						</div>
						<div className='card'>
							<h1>25+</h1>
							<h4>clients</h4>
						</div>
						<div className='card'>
							<h1>50+</h1>
							<h4>projects</h4>
						</div>
					</div>
				</div>
				<ContactCard />
			</section>
		</section>
	);
};

export default Home;
