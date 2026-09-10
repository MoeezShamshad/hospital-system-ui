import isfLogo from '../../../assets/isf-logo.png';
import './styles.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__infoBox">
				<div className="footer__infoBox__row">
					<strong>GST HOSPITAL is an GST project</strong>
				</div>
				<div className="footer__infoBox__row">
					2005 - {new Date().getFullYear()} GST INTERNATIONAL
					APS
				</div>
				<div className="footer__infoBox__row">
				
				</div>
				<div className="footer__infoBox__row">
			
				</div>
				<div className="footer__infoBox__row"></div>
			</div>
			<a
				href={'https://www.informaticisenzafrontiere.org/'}
				title="Informatici Senza Frontiere"
				rel="noopener noreferrer"
				target="_blank"
			>
				<img
					src={isfLogo}
					className="ISF__logo"
					alt="Informatici Senza Frontiere"
				/>
			</a>
		</div>
	);
};

export default Footer;
