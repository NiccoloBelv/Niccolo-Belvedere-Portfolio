import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';
import styles from '@styles/Home.module.css'; // Assicurati di avere un file CSS corrispondente

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profileContainer}>
        <Image
          src="/Picture.jpg" // Sostituisci con il percorso corretto della tua immagine
          alt="Niccolò Belvedere"
          width={150}
          height={150}
          className={styles.profileImage}
        />
          <h1>Ciao, sono Niccolò Belvedere. Benvenuto nel mio portfolio personale!</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">Chi Sono</a></li>
            <li><a href="#projects">Progetti</a></li>
            <li><a href="#cv">Curriculum</a></li>
            <li><a href="#contact">Contatti</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>Chi Sono</h2>
          <p>
            Come studente appassionato con un comprovato track record in Business Development, mi specializzo in Tech Sales...
          </p>
        </section>

        <section id="projects" className={styles.projectSection}>
          <h2>Progetti</h2>
          <div className={styles.projectContainer}>
            {/* Dettagli dei progetti. Puoi aggiungere le informazioni di ogni progetto qui. */}
          </div>
        </section>

        <section id="cv" className={styles.cvSection}>
          <h2>Curriculum Vitae</h2>
          <a href="/path/to/your/cv.pdf" target="_blank">Scarica il Mio CV</a>
          {/* Aggiungi qui un link o una visualizzazione del tuo CV */}
        </section>

        <section id="contact" className={styles.contactSection}>
          <h2>Contatti</h2>
          <p>Email: tuo@email.com</p>
          {/* Aggiungi qui ulteriori informazioni di contatto se necessario */}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Niccolò Belvedere. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
