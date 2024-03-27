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
          
          <p>niccolobelvedere01@gmail.com</p>
        </div>
        <div className={styles.contactitem}>
          
          <p>Milan, Italy</p>
        </div>
        <div className={styles.contactitem}>
          
          <p>(+39) 3347227607</p>
        </div>
      </div>
      
      <form name="contact" netlify onSubmit={handleSubmit}>
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
