import React, { useState, useEffect } from 'react';
import styles from '@styles/JokeBlock.module.css'; // Update this path if necessary

const JokeBlock = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('/api/joke');
      const data = await response.json();
      setJoke(data);
    };

    fetchJoke();
  }, []);

  return (
    <article className={styles.jokeBlock}>
      <blockquote className={styles.blockquote}>
        <p>{joke}</p>
      </blockquote>
    </article>
  );
};

export default JokeBlock;
