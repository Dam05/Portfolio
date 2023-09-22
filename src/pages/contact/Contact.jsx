import MailCard from '../../components/card/MailCard';
import './contact.scss';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { BiSolidLocationPlus } from 'react-icons/bi';

const Contact = () => {
	return (
		<div className='contact-page container section'>
			<div className='wrapper w-100'>
				<div className='contact-info'>
					<h2>Contact Info</h2>
					<MailCard icon={<AiOutlineMail />} title={'Mail Us'}>
						<p>bondre.gunal@gmail.com</p>
					</MailCard>
					<MailCard icon={<AiFillPhone />} title={'Contact Us'}>
						<p>123456789</p>
					</MailCard>
					<MailCard icon={<BiSolidLocationPlus />} title={'Find Us'}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
							dolor!
						</p>
					</MailCard>
				</div>
				<div className='contact-form'>
					<div className='card'>
						<h2 className='mb-20'>
							Lets work <span className='blue'>Together</span>
						</h2>
						<form action=''>
							<div className='form-group'>
								<input type='text' name='' id='' placeholder='Enter name' />
							</div>
							<div className='form-group'>
								<input type='email' name='' id='' placeholder='Enter email' />
							</div>
							<div className='form-group'>
								<input type='text' name='' id='' placeholder='Enter subject' />
							</div>
							<div className='form-group'>
								<textarea
									type='text'
									name=''
									id=''
									placeholder='Enter message'
									cols={40}
									rows={5}
								/>
							</div>
							<div className='form-group'>
								<button className='button w-100'>Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
