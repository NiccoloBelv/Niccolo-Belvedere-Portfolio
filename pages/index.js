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
            <li><a href="#about"><strong>About Me</strong></a></li>
            <li><a href="#cv"><strong>Curriculum & Documents</strong></a></li>
            <li><a href="#projects"><strong>Projects</strong></a></li>
            <li><a href="#certificates"><strong>Certificates</strong></a></li>
            <li><a href="#languagesandskills"><strong>Languages and Skills</strong></a></li>
            <li><a href="#contact"><strong>Contacts</strong></a></li>
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
            creating a prototype and a business model. In 2022, a colleague and I won a "Call4Ideas", drafting an idea about a platform to improve the supply chain of NGOs and presenting the project in front of a jury at the SDA School of Management. 
            Afterwards, I am taking courses and doing self-taught practices to learn coding with various languages. <br />
            I strongly believe that this new technological era will change the course of our lives, and I want to be part of this change.
          </p>
        </section>

        
        <hr />
            
        <section id="cv" className={styles.cvSection}>
          <h2>Curriculum Vitae & Documents</h2>
          <a href="CV.pdf" target="_blank" className={styles.cvDownloadLink}>My Resume</a>: click here to download my CV. <br /><br />
          <a href="Bachelor's Transcript.pdf" target="_blank" className={styles.cvDownloadLink}>My Bachelor's academic transcript</a>: click here to download my Bachelor's transcript. <br />
          <a href="Master's Transcript.pdf" target="_blank" className={styles.cvDownloadLink}>My Master's academic transcript</a>: click here to download my Master's transcript.
        </section>

          
        <section id="projects" className={styles.projectSection}>
          <h2>Projects</h2>
          <div className={styles.projectContainer}>
            <p>
              Master's thesis (Work in Progress): How financials and macroeconomics factors affect the volatility of personnel in Big Tech companies <br />
              Bachelor's thesis (2022): "The key role of People in Public Administration: How Civil Service Models affect the quality of a nation" <br />
              <br />
              <strong><a href="Big Data Report.pdf" target="_blank" rel="noopener noreferrer">Big Data for Business Decisions (2023): "Monetary Words, Market Echoes"</a> & <a href="Big Data presentation.pdf" target="_blank" rel="noopener noreferrer">Presentation (co-authored)</a></strong><br />
              <br />
              <strong><a href="Corporate Strategy Report.pdf" target="_blank" rel="noopener noreferrer">Performance Measurement & Corporate Strategy (2023): How to innovate Microsoft's Corporate Strategy (co-authored)</a></strong><br /> 
              <br />
              <strong><a href="Asset Management Report.pdf" target="_blank" rel="noopener noreferrer">Asset Management (2023): ESG Multi-Asset Fund E2 – EUR analysis (co-authored)</a></strong><br />
              <br />
              <strong><a href="Financial Analysis of IVECO Group.pdf" target="_blank" rel="noopener noreferrer">Financial Management & Corporate Banking (2023): Financial Analysis of IVECO Group (co-authored)</a></strong><br />
              <br />
              <strong><a href="Should Cash-Out mergers be available.pptx" target="_blank" rel="noopener noreferrer">Business Law (Advanced) (2023): "Should Cash-Out mergers be available?" (co-authored)</a></strong><br />
              <br />
              <strong><a href="Toyota Analysis.pdf" target="_blank" rel="noopener noreferrer">Performance Measurement (2022): Toyota Analysis (co-authored)</a></strong><br />
              <br />
              <strong><a href="Decathlon In-Company Training.pdf" target="_blank" rel="noopener noreferrer">Decathlon In-Company Training (2022): "Decathlon ad impatto zero" (co-authored)</a></strong><br />
              <br />
              <strong><a href="Pane Quotidiano Report.pdf" target="_blank" rel="noopener noreferrer">Call 4 Ideas "Supporting Innovation at Pane Quotidiano" (2022): "Re-thinking Operations"</a> & <a href="PQ - Presentation.pdf" target="_blank" rel="noopener noreferrer">Presentation (co-authored)</a></strong><br />
              <br />
              <strong><a href="Competitive Intelligence Report.pdf" target="_blank" rel="noopener noreferrer">Competitive Intelligence (2022): "Impact of Volkswagen's Trinity Project on Tesla" (co-authored)</a></strong><br />
              <br />
              <strong><a href="The allocation of PNRR funds for the National Health Service.pdf" target="_blank" rel="noopener noreferrer">Public Administration Management (2021): The allocation of PNRR funds for the National Health Service (co-authored)</a></strong><br />
              <br />
              <strong><a href="Telecom Italia S.p.A. analysis.pdf" target="_blank" rel="noopener noreferrer">Business Administration (2019): Telecom Italia S.p.A. analysis (co-authored)</a></strong><br /> 
            </p>
          </div>
        </section>

          
        <section id="certificates" className={styles.certificatesSection}>
          <h2>Certificates</h2>
          <div className={styles.certificatesContainer}>
            <p>
              <strong><a href="BCG Introduction to Strategy Consulting Virtual Experience Program.pdf" target="_blank" download>Boston Consulting Group – Strategy Consulting Virtual Experience Program on Forage</a> (February 2023)</strong><br />
              <em>Conducted market research, brainstorming session and adopting solutions with creative methods. </em><br />
              <br />
              <strong><a href="Competitive Intelligence.pdf" target="_blank" download>Competitive Intelligence Certificate on Voice of the Business</a> (April 2022)</strong><br />
              <em>Research Gathering Methods, CXM, building of KPIs, competitor analysis.</em><br />
              <br />
              <strong><a href="Certificate Bitcoin and Blockchain Fundamentals.pdf" target="_blank" download>Bitcoin and Blockchain Fundamentals</a> (March 2021)</strong> <br />
              <br />
              <strong><a href="ECDL and ICDL.pdf" target="_blank" download>ECDL & ICDL Full Standard (Use of Excel, PowerPoint, Word and Data Privacy)</a> (June 2020)</strong><br />
              <em>The certification consists of 7 topics that are divided into the following modules: Computer Essentials, Online Essentials, Word Processing, Spreadsheets, IT-Security & Cyber Security, Presentation, Online Collaboration.</em><br />
              <br />
              <strong><a href="Certificate Acrobat Professional.pdf" target="_blank" download>Document Management with Office and Acrobat Professional</a> (December 2019)</strong><br />
            </p>
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
