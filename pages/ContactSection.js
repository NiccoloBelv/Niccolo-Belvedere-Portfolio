import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from '@styles/Home.module.css'; // Assicurati che il percorso sia corretto per il tuo CSS

const ContactSection = () => {
  // Gestore dell'invio del form che previene il comportamento di default del form
  // Se stai usando Netlify per il form, questa funzione può non essere necessaria
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gestire l'invio del modulo qui se necessario
  };

  return (
    <section id="contact" className={`${styles.contactSection}`}>
      <h2>Contacts</h2>
      <p>
        My LinkedIn profile: <a href="https://www.linkedin.com/in/niccolo-belvedere/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a><br />
        Personal email: niccolobelvedere01@gmail.com<br />
        Institutional email: niccolo.belvedere@studbocconi.it<br />
        Mobile: (+39) 3347227607
      </p>
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
      <form className={styles.contactForm} onSubmit={handleSubmit} netlify data-netlify="true">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className={styles.submitButton}>
          <FaPaperPlane />
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
