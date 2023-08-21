import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
    return(
        <div className="footer">
            <h1>Construction.co</h1>
            <span className="line"></span>
            <div className='footer-text-section'>
                <div className='reach-us'>
                    <p className='footer-heading'>Reach Us</p>
                    <p><FontAwesomeIcon icon={faPhoneVolume} /> +91 123456789</p>
                    <p><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /> Constructionco@gmail.com</p>
                    <p><FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} /> No. 5/1, Durga Mata Mandir Road, Moti Nagar 110015 New Delhi, India</p>
                </div>
                <div className='company'>
                    <p className='footer-heading'>Company</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Blogs</p>
                </div>
                <div className='legal'>
                    <p className='footer-heading'>Legal</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Services</p>
                    <p>Terms of Use</p>
                    <p>Refund Policy</p>
                </div>
                <div className='quick-links'>
                    <p className='footer-heading'>Quick Links</p>
                    <p>Construction.co</p>
                    <p>Downloads</p>
                    <p>Forum</p>
                </div>
                <div className='newsletter'>
                    <div className='newsletter-box'>
                        <p className='footer-heading'>Join Our Newsletter</p>
                        <input type='text' placeholder='your email address'/>
                        <button type='submit'>Subscribe</button>
                        <p className='footer-info'>*  Will send you weekly updates for your better tool management.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;