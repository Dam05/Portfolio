import PropTypes from 'prop-types';
import './card.scss';
const InfoCard = ({ CardHeader, children }) => {
	return (
		<div className='info-card'>
			<div className='card'>
				<div className='title'>
					<h3>{CardHeader}</h3>
				</div>
				<div className='card-info-section'>{children}</div>
			</div>
		</div>
	);
};
InfoCard.propTypes = {
	CardHeader: PropTypes.string,
	children: PropTypes.node,
};

InfoCard.defaultProps = {};
export default InfoCard;
