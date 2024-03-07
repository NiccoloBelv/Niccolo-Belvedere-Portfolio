import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Niccolò Belvedere - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Hello, I am Niccolò Belvedere. Welcome to my personal portfolio!" />

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>About Me</h2>
          <p>
            As a passionate student with a proven track record in Business Development, I specialize in Tech Sales. 
            My innovative solutions have driven measurable results in my previous experiences, demonstrating a deep understanding of customers and markets. 
            Committed to continuous learning, I stay ahead in the dynamic tech landscape.
          </p>
        </section>

        <div className={styles.flexContainer}>
          <section className={styles.centeredSection}>
            <h2>My Photo</h2>
            <img
              src="/Picture.png"
              alt="Niccolò Belvedere"
              className={styles.profileImage}
            />
          </section>

          <section className={styles.centeredSection}>
            <h2>Download my CV</h2>
            <p>
              <a href="/CV.pdf" download>
                Click here to download!
              </a>
            </p>
          </section>

          <section className={styles.centeredSection}>
            <h2>Projects</h2>
            {/* Add your project components here */}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
