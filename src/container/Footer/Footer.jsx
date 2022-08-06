import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact US</h1>
        <p className="p__opensans">Tamale - Ghana.</p>
        <p className="p__opensans">+233 20 772 8823</p>
        <p className="p__opensans">+233 24 024 5872</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className="p__opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: 8AM - 11PM</p>
        <p className="p__opensans">Sat - Sun: 10AM - 5PM</p>

      </div>
    </div> 
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
</div>
  </div>
);

export default Footer;
