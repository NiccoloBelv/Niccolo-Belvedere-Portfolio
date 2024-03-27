import React from 'react';
import styles from '@styles/Home.module.css'; // Assicurati che il percorso sia corretto per il tuo CSS

const ContactSection = () => {
  // Since Netlify is handling the form submission, you may not need this handler.
  // If you do have additional handling, you can keep this function.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional handling here if necessary
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

      {/* Hidden form for Netlify */}
      <form name="contact" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      {/* Visible form */}
      <form name="contact" onSubmit={handleSubmit} className={styles.contactForm} data-netlify="true">
        {/* Hidden input required for forms managed by JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" className={styles.sendButton}>Send Message</button>
        </p>
      </form>
    </section>
  );
};

export default ContactSection;
