import './mailcard.scss';
import PropTypes from 'prop-types';

const MailCard = ({ icon, title, children }) => {
	return (
		<div className='mailcard'>
			<div className='icon-section'>
				<div className='card'>{icon}</div>
			</div>
			<div className='info-section'>
				<h5>{title}</h5>
				<div>{children}</div>
			</div>
		</div>
	);
};

MailCard.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.node,
};
export default MailCard;
