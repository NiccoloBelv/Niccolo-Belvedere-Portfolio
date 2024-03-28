import React from 'react';
import '@styles/FeedbackForm.css'; // Assicurati che il file CSS sia presente e correttamente importato

const FeedbackForm = () => {
  // Metodo per gestire il submit del form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Qui potresti integrare la logica per inviare il form, 
    // ad esempio usando `fetch` o una libreria come axios.
  };

  return (
    <div className="feedback-form">
      <form
        name="feedback"
        method="POST"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="feedback" />
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="feedback">What is your feedback?</label>
        <textarea id="feedback" wrap="soft" name="feedback" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
