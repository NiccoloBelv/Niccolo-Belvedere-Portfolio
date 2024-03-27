// ContactSection.js
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
    <div className={styles.contactinfo}>
      <div className={styles.contactitem}>
        <FaEnvelope />
        <p>niccolobelvedere01@gmail.com</p>
      </div>
      <div className={styles.contactitem}> 
        <FaMapMarkerAlt />
        <p>Milan, Italy</p>
      </div>
      <div className={styles.contactitem}>
        <FaPhone />
        <p>(+39) 3347227607</p>
      </div>
    </div>
    <form className={styles.contactform}>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message" />
      <button type="submit">
        <FaPaperPlane />
          Send Message
      </button>
    </form>
};

export default ContactSection;
