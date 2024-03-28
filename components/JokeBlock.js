import React, { useState, useEffect } from 'react';
import '@styles/JokeBlock.css'; // Assicurati che il file CSS sia presente e correttamente importato

const JokeBlock = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('/api/joke');
      const data = await response.json();
      setJoke(data);
    };

    fetchJoke();
  }, []); // La lista vuota di dipendenze [] assicura che l'effetto venga eseguito solo al montaggio

  return (
    <article>
      <blockquote>
        <p>{joke}</p>
      </blockquote>
    </article>
  );
};

export default JokeBlock;
