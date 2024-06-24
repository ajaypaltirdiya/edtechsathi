import { assets } from '../../../assets/assets';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer' id='contact'>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-5">
                    <div className="about-company">
                    <img src={assets.logo} alt="" />
                    <p>Welcome to Edtechsathi where we are dedicated to transforming the educational journey of students across India. Edtechsathi has been committed to providing free educational services to students, addressing their unique challenges and empowering them to achieve academic success. At Edtechsathi, 
                        we believe in equal access to quality education for all students, regardless of their background or financial means.</p>
                    </div>
                    <div className="social-links">
                        <a href="#" title='Linkdin' target='_blank'><img src={assets.linkedin} alt="icon" /></a>
                        <a href="#" title='Youtube'  target='_blank'><img src={assets.youtube} alt="icon" /></a>
                        <a href="#" title='Instagram'  target='_blank'><img src={assets.instagram} alt="icon" /></a>
                        <a href="#" title='Twitter'  target='_blank'><img src={assets.xTwitter} alt="icon" /></a>
                    </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                    <div className="ft-widget important_links">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#our-services">Our Services</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="ft-widget footer-address">
                        <h3>Address</h3>
                            <div className="address_item">
                                <img src={assets.locationIcon} alt="icon" />
                                <p>Shopping center,Near Ratlami namkeen shop, gumanpura, kota, Rajasthan</p>
                            </div>
                            <div className="address_item">
                                <img src={assets.emailIcon} alt="icon" />
                                <a href='mailto:edtechsathi@gmail.com'>edtechsathi@gmail.com</a>
                            </div>
                            <div className="address_item">
                                <img src={assets.callIcon} alt="icon" />
                                <a href='tel:+91-9351099947'>+91-9351099947</a>
                            </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <p>© All rights reserved 2024.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer