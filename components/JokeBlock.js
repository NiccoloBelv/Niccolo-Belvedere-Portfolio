import React, { useState, useEffect } from 'react';
import styles from '@styles/JokeBlock.module.css'; // Ensure the path is correct based on your project structure

const JokeBlock = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch('/api/joke');
      const data = await response.json();
      setJoke(data);
    };

    fetchJoke();
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (
    <article className={styles.jokeBlock}>
      <blockquote className={styles.blockquote}>
        <p>{joke}</p>
      </blockquote>
    </article>
  );
};

export default JokeBlock;
