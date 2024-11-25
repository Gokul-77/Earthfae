import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p>Feel free to reach out to us through any of the following platforms:</p>
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
          <li><a href="tel:+8838482302"><FaPhone /> Phone: +91 8838482302</a></li>
          <li><a href="mailto:gokul142003@gmail.com"><FaEnvelope /> Email: gokul142003.com</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
