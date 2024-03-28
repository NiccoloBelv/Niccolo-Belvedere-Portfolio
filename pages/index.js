import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import Footer from '@components/Footer';
import FeedbackForm from '@components/FeedbackForm';
import JokeBlock from '@components/JokeBlock';
import styles from '@styles/Home.module.css';

export default function Home() {
  
  

  
  return (
    <div>
      <Head>
        <title>Niccolò Belvedere - Portfolio Personale</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Welcome to my personal portfolio. Explore now to learn more about Niccolò Belvedere's expertise and experiences. Discover projects, achievements, and professional journey about me." />
        <meta property="og:title" content="Niccolò Belvedere - Portfolio Professionale" />
        <meta property="og:description" content="Insights on my academic and professional background." />
        <meta property="og:image" content="https://www.niccolobelvedere.com/_next/image?url=Picture.png&w=256&q=75" />
        <meta property="og:url" content="https://www.niccolobelvedere.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
      </Head>
      
      <header className={styles.header}>
        <br />
        <div className={styles.profileContainer}>
          <Image
            src="Picture.png"
            alt="Niccolò Belvedere"
            width={210}
            height={210}
            className={styles.profileImage}
          />
          <br />
          <h1> Hello, I am Niccolò Belvedere. Welcome to my personal portfolio.</h1>
        </div>

            
        <a href="https://www.linkedin.com/in/niccolo-belvedere/" target="_blank" rel="noopener noreferrer">
            <img 
            src="linkedin.png" 
            alt="LinkedIn" 
            width= "35"
            className={styles.linkedinicon}
            />
        </a>

        <br />      
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about"><strong>About Me</strong></a></li>
            <li><a href="#projects"><strong>Projects</strong></a></li>
            <li><a href="#certificates"><strong>Certificates</strong></a></li>
            <li><a href="#languagesandskills"><strong>Languages and Skills</strong></a></li>
            <li><a href="#trips"><strong>Trips Gallery</strong></a></li>
            <li><a href="#contact"><strong>Contacts</strong></a></li>
          </ul>
        </nav>
      </header>

            
      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>About Me</h2>
          <br />
          <div className={styles.aboutGrid}>
            <div className={styles.aboutColumn}>
              {/* Contenuti della prima colonna */}
              <p>In 2019, after years living in my home country, Maratea, I moved to Milan to pursue my studies in Business Administration and Management at Bocconi University. 
              In the following years I took part in several projects, which can be consulted in the Projects area of this portfolio, 
              until I spent an exchange semester in Ottawa (Canada) during my third year of Bachelor, at the Telfer School of Management. 
              Subsequently, in 2022 I started my Master of Science in Management, which led me to an internship at Amazon Business from June 2023 to December 2023 in the area of Business Development and Account Management.</p>
            </div>
            <div className={styles.aboutColumn}>
              {/* Contenuti della seconda colonna */}
              <p>From early on I developed a passion for tech and innovation: during my third year of high school science (2017) I took part in a school work experience on how to develop a startup from 0, 
              creating a prototype and a business model. In 2022, a colleague and I won a "Call4Ideas", drafting an idea about a platform to improve the supply chain of NGOs and presenting the project in front of a jury at the SDA School of Management. 
              Afterwards, I am taking courses and doing self-taught practices to learn coding with various languages.
              I strongly believe that this new technological era will change the course of our lives, and I want to be part of this change.</p>
            </div>
          <br />
          </div>
            <div className={styles.buttonContainer}>
              <a href="CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadbutton}>Curriculum Vitae</a>
              <a href="Bachelor's Transcript.pdf" target="_blank" className={styles.downloadbutton} rel="noopener noreferrer">My Bachelor's academic transcript</a>
              <a href="Master's Transcript.pdf" target="_blank" className={styles.downloadbutton} rel="noopener noreferrer">My Master's academic transcript</a>
              </div>
        </section>

        <hr className={styles.hrzigzag} />
        <br />
            
       
        <section id="contact" className={styles.contactSection}>
          <h2>Contacts</h2>
          <br />
          <div className={styles.contactBar}>
            <div className={styles.contactIcon}>
              <img src="email.png" alt="Email" width= "40" />
              <p>niccolobelvedere01@gmail.com<br />niccolo.belvedere@studbocconi.it</p>
            </div>
            <div className={styles.contactIcon}>
              <img src="position.png" alt="Address" width= "40" />
              <p>Milan, Italy</p>
            </div>
            <div className={styles.contactIcon}>
              <img src="phone.png" alt="Phone" width= "40" />
              <p>(+39) 3347227607</p>
            </div>
          </div>
                  
        <FeedbackForm />
        <JokeBlock />
        </section>
        
                  
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Niccolò Belvedere. All rights reserved.</p>
      </footer>
    </div>
  );
}
