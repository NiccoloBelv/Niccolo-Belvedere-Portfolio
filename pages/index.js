import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <Image
            src="/Picture.png"
            alt="Niccolò Belvedere"
            width={150}
            height={150}
            className={styles.profileImage}
          />
          <h1>Hello, I am Niccolò Belvedere. Welcome to my personal portfolio.</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#cv">Curriculum</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            Come studente appassionato con un comprovato track record in Business Development, mi specializzo in Tech Sales...
          </p>
        </section>
            
        <section id="cv" className={styles.cvSection}>
          <h2>Curriculum Vitae</h2>
          <a href="CV.pdf" target="_blank" className={styles.cvDownloadLink}>Download my CV</a>
          {/* Aggiungi qui un link o una visualizzazione del tuo CV */}
        </section>
          
        <section id="projects" className={styles.projectSection}>
          <h2>Projects</h2>
          <div className={styles.projectContainer}>
            {/* Dettagli dei progetti. Puoi aggiungere le informazioni di ogni progetto qui. */}
          </div>
        </section>

      

        <section id="contact" className={styles.contactSection}>
          <h2>Contacts</h2>
          <p>Personal email: niccolobelvedere01@gmail.com</p>
          <p>Institutional email: niccolo.belvedere@studbocconi.it</p>
          <p>Mobile: (+39) 3347227607</p>
          {/* Aggiungi qui ulteriori informazioni di contatto se necessario */}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Niccolò Belvedere. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
