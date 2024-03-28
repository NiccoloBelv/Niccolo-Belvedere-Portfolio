import React from 'react';
import styles from '@styles/FeedbackForm.module.css'; // Update this path if necessary

const FeedbackForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className={styles.feedbackForm}>
      <form
        name="feedback"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p className={styles.hidden}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="feedback" />
        <label htmlFor="name">Name</label>
        <input className={styles.input} id="name" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input className={styles.input} id="email" type="email" name="email" required />
        <label htmlFor="feedback">What is your feedback?</label>
        <textarea className={styles.textarea} id="feedback" wrap="soft" name="feedback" required></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
