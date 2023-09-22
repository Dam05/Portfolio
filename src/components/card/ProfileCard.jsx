import Card from './Card';
import './profilecard.scss';

const ProfileCard = () => {
	return (
		<div className='profile-card'>
			<div
				className='right'
				data-aos='zoom-in'
				data-aos-delay='50'
				data-aos-duration='1000'
				data-aos-easing='ease-in-out'
			>
				<Card title='Stay With Me' subtitle='Digital Address' smallcard>
					<div className='socialmedia'>
						<div className='card'>LinkedIn</div>
						<div className='card'>Facebook</div>
					</div>
					<div className='socialmedia'>
						<div className='card'>Twitter</div>
						<div className='card'>Instagram</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default ProfileCard;
