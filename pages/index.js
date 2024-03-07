// Importing necessary components and Head for meta tags
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Niccolò Belvedere - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <Image
            src="/profile.jpg" // Replace with your profile image path
            alt="Niccolò Belvedere"
            width={150} // Adjust size as needed
            height={150} // Adjust size as needed
            className={styles.profileImage}
          />
          <h1>Hello, I am Niccolò Belvedere. Welcome to my personal portfolio!</h1>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            As a passionate student with a proven track record in Business Development, I specialize in Tech Sales. 
            My innovative solutions have driven measurable results in my previous experiences, demonstrating a deep understanding of customers and markets. 
            Committed to continuous learning, I stay ahead in the dynamic tech landscape.
          </p>
        </section>

        {/* Add additional sections such as projects, CV, etc., here */}
      </main>

      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}
