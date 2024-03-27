import React from 'react';
import styles from '@styles/Home.module.css'; // Assicurati che il percorso sia corretto per il tuo CSS

const ContactSection = () => {
  // Gestore dell'invio del form che previene il comportamento di default del form
  // Se stai usando Netlify per il form, questa funzione può non essere necessaria
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gestire l'invio del modulo qui se necessario
  };

  return (
    
      <div className={styles.contactinfo}>
        <div className={styles.contactitem}>
          
          <p>niccolobelvedere01@gmail.com</p>
        </div>
        <div className={styles.contactitem}>
          
          <p>Milan, Italy</p>
        </div>
        <div className={styles.contactitem}>
          
          <p>(+39) 3347227607</p>
        </div>
      </div>
      
      <form name="contact" netlify onSubmit={handleSubmit} className={styles.contactform}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required></textarea>
        </p>
        <p>
          <button type="submit">Send Message</button>
        </p>
      </form>
    </section>
  );
};

export default ContactSection;
