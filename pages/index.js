import Head from 'next/head';
import Header from '@components/Header'; // Imported Header should have a different name if this component is also called Header
import Footer from '@components/Footer';
import Image from 'next/image';
import styles from '@styles/Home.module.css'; // Make sure the CSS module exists

export default function HomePage() { // Renamed to HomePage to avoid conflict with imported Header
  return (
    <div>
      <Head>
        <title>Niccolò Belvedere - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header /> {/* Assuming Header is a separate component you created */}

      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>Chi Sono</h2>
          <p>
            Come studente appassionato con un comprovato track record in Business Development, mi specializzo in Tech Sales...
          </p>
        </section>

        <section id="projects" className={styles.projectSection}>
          <h2>Progetti</h2>
          {/* Dettagli dei progetti. Puoi aggiungere le informazioni di ogni progetto qui. */}
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

      <Footer /> {/* Assuming Footer is a separate component you created */}
    </div>
  );
}
