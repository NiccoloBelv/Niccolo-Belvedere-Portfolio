import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Niccolò Belvedere - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main>
        <Header title="Hello, I am Niccolò Belvedere. Welcome to my personal portfolio!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <section>
          <h2>About Me</h2>
          <p>
            As a passionate student with a proven track record in Business Development, I specialize in Tech Sales. 
            My innovative solutions have driven measurable results in my previous experiences, demonstrating a deep understanding of customers and markets. 
            Committed to continuous learning, I stay ahead in the dynamic tech landscape.
          </p>
        </section>

        <section>
          <h2>Download CV</h2>
          <p>
            <a href="/CV.pdf" download>
              Download My CV
            </a>
          </p>
        </section>

        <section>
          <h2>My Photo</h2>
          <img src="https://drive.google.com/drive/folders/1AFGSKnwOcE4MOfO9A8xAfjTRcY674ihc?hl=it" alt="Niccolò Belvedere" style={{ maxWidth: '100%' }} />
        </section>

        <section>
          <h2>Projects</h2>
          {/* Add your project components here */}
        </section>

        <section>
          <h2>Additional Downloads</h2>
          <ul>
            <li>
              <a href="/path-to-file-1.pdf" download>
                Download File 1
              </a>
            </li>
            <li>
              <a href="/path-to-file-2.pdf" download>
                Download File 2
              </a>
            </li>
            <li>
              <a href="/path-to-file-3.pdf" download>
                Download File 3
              </a>
            </li>
            <li>
              <a href="/path-to-file-4.pdf" download>
                Download File 4
              </a>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
