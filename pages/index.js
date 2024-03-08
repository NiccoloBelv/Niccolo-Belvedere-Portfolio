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
            width={180}
            height={180}
            className={styles.profileImage}
          />
          <h1>Hello, I am Niccolò Belvedere. Welcome to my personal portfolio.</h1>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#cv">Curriculum</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#languagesandskills">Languages and Skills</a></li>
            <li><a href="#contact">Contacts</a></li>
          </ul>
        </nav>
      </header>

            
      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            In 2019, after years living in my home country, Maratea, I moved to Milan to pursue my studies in Business Administration and Management at Bocconi University. 
            In the following years I took part in several projects, which can be consulted in the Projects area of this portfolio, 
            until I spent an exchange semester in Ottawa (Canada) during my third year of Bachelor, at the Telfer School of Management. 
            Subsequently, in 2022 I started my Master of Science in Management, which led me to an internship at Amazon Business from June 2023 to December 2023 in the area of Business Development and Account Management.<br /> 
            <br />
            From early on I developed a passion for tech and innovation: during my third year of high school science (2017) I took part in a school work experience on how to develop a startup from 0, 
            creating a prototype and a business model. In 2022, a colleague and I won a "Call4Ideas", going to present our idea about a platform to improve the supply chain of NGOs before a panel of judges at the SDA School of Management. 
            Afterwards, I am taking courses and doing self-taught practices to learn coding with various languages. <br />
            I strongly believe that this new technological era will change the course of our lives, and I want to be part of this change.
          </p>
        </section>

            
        <section id="cv" className={styles.cvSection}>
          <h2>Curriculum Vitae</h2>
          <a href="CV.pdf" target="_blank" className={styles.cvDownloadLink}>My Resume</a>: click here to download my CV.
          {/* Aggiungi qui un link o una visualizzazione del tuo CV */}
        </section>

          
        <section id="projects" className={styles.projectSection}>
          <h2>Projects</h2>
          <div className={styles.projectContainer}>
            <p>
              Master's thesis (Work in Progress): How financials and macroeconomics factors affect the volatility of personnel in Big Tech companies <br />
              Bachelor's thesis (2022): "The key role of People in Public Administration: How Civil Service Models affect the quality of a nation" <br />
              <br />
              Big Data for Business Decisions 2023: "Monetary Words, Market Echoes" & Presentation (co-authored) <br />
              Performance Measurement & Corporate Strategy (2023): How to innovate Microsoft's Corporate Strategy (co-authored) <br /> 
              Asset Management (2023): ESG Multi-Asset Fund E2 – EUR analysis (co-authored) <br />
              Financial Management & Corporate Banking (2023): Financial Analysis of IVECO Group (co-authored) <br />
              Business Law (Advanced) (2023): "Should Cash-Out mergers be available?" (co-authored) <br />
              Performance Measurement (2022): Toyota Analysis (co-authored) <br />
              Decathlon In-Company Training (2022): "Decathlon ad impatto zero" (co-authored) <br />
              Call 4 Ideas "Supporting Innovation at Pane Quotidiano" (2022): "Re-thinking Operations" & Presentation (co-authored) <br />
              Competitive Intelligence (2022): "Impact of Volkswagen's Trinity Project on Tesla" (co-authored) <br />
              Public Administration Management (2021): The allocation of PNRR funds for the National Health Service (co-authored) <br />
              Business Administration (2019): Telecom Italia S.p.A. analysis (co-authored) 
            </p>
          </div>
        </section>

          
        <section id="certificates" className={styles.certificatesSection}>
          <h2>Certificates</h2>
          <div className={styles.certificatesContainer}>
            {/* Dettagli delle Certificazioni. */}
          </div>
        </section>


        <section id="languagesandskills" className={styles.languagesandskillsSection}>
          <h2>Languages and Skills</h2>
          <div className={styles.languagesandskillsContainer}>
          <p>
            <strong>Languages:</strong> Italian (Native), English (Full proficient), French (B1 Business). <br />
            <strong>IT Skills:</strong> Excellent knowledge of Windows and Microsoft office; working with Macro & VBA Code on Excel; 
            excellent in Salesforce; Intermediate coding skills on R, Natural Languange Processing, JavaScript and C#.
          </p>
          </div>
        </section>
      
          
        <section id="contact" className={styles.contactSection}>
          <h2>Contacts</h2>
          <p>
              My LinkedIn profile: <a href="https://www.linkedin.com/in/niccolo-belvedere/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn</a><br />
              Personal email: niccolobelvedere01@gmail.com<br />
              Institutional email: niccolo.belvedere@studbocconi.it<br />
              Mobile: (+39) 3347227607
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Niccolò Belvedere. All rights reserved.</p>
      </footer>
    </div>
  );
}
