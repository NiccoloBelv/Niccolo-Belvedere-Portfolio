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

        <hr class="hr-zigzag" />
            
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
              <strong>Master's thesis (Work in Progress): How financials and macroeconomics factors affect the volatility of personnel in Big Tech companies</strong><br />
              <br />
              
              <strong>Bachelor's thesis (2022): "The key role of People in Public Administration: How Civil Service Models affect the quality of a nation"</strong><br />
              The thesis outlines the significance of interactions between public and private sectors in shaping a nation's economic condition, emphasizing that the essence of a nation's economy is not merely the sum of these sectors, but the result of their continual interplay. <br />Central to this dynamic is human capital. The public sector's regulatory role, financing, and infrastructure development are highlighted as influential factors on private sector activities. The paper focuses on the criticality of placing competent individuals within public organizations since their caliber directly impacts national performance across both sectors.
              The discourse pivots to a comparative analysis of two civil service systems: career-based and position-based. It includes an examination of how human resource (HR) management tools adapt to each system and a detailed exploration of HR practices in Italy and France (career-based) and Canada and England (position-based). <br />An interview with Dr. Trombetti Lilia from the Canadian Radio-television and Telecommunication Commission provides insights into the practical applications of Canada's position-based system.
              The discussion advances to various topics, such as the superior civil service system, evaluation methods for these systems, recruitment strategies for top talent in public institutions, and applicable lessons for Italy. The analysis concludes by revealing how the choice between the two models can underpin a nation's development under specific circumstances, and it reinforces the notion that human resources are pivotal to societal progress.
              <br /><br />
              
              <strong><a href="Big Data Report.pdf" target="_blank" rel="noopener noreferrer">Big Data for Business Decisions (2023): "Monetary Words, Market Echoes"</a> & <a href="Big Data presentation.pdf" target="_blank" rel="noopener noreferrer">Presentation (co-authored)</a></strong><br />
              The "Big Data Report" examines the European Central Bank's (ECB) communication strategies and their impact on financial markets. Focusing on the ECB presidencies of Mario Draghi and Christine Lagarde, the report analyzes speeches and monetary policy statements from November 2011 to June 2023.<br />It employs Latent Dirichlet Allocation (LDA) for topic modeling and linear regression models to investigate the relationship between ECB communication and various financial measures such as the IOS rate, EUR/USD exchange rate, and Italian and German government bond yields.<br />
              The study observes significant differences in the communication styles and focus areas of Draghi and Lagarde. Draghi's tenure is characterized by concise, direct communication, primarily addressing macroeconomic themes during the European financial crisis. In contrast, Lagarde's period is marked by longer, more detailed discussions, with a broader focus due to events like the COVID-19 pandemic and geopolitical instabilities. 
              The report identifies themes like "Asset Convergence," "Financial Conditions," "Structural Stability," and "Inflation Expectations" as significantly influencing financial metrics. The study concludes with a discussion of limitations and areas for future research, emphasizing the need for continuous examination of central bank communications and their financial implications.
              <br /><br />
              
              <strong><a href="Corporate Strategy Report.pdf" class="download-link" target="_blank" rel="noopener noreferrer">Performance Measurement & Corporate Strategy (2023): How to innovate Microsoft's Corporate Strategy <span class="download-icon">⬇️</span> (co-authored)</a></strong><br /> 
              <br /><br />
              
              <strong><a href="Asset Management Report.pdf" target="_blank" rel="noopener noreferrer">Asset Management (2023): ESG Multi-Asset Fund E2 – EUR analysis (co-authored)</a></strong><br />
              The "Asset Management Report" focuses on the Blackrock ESG Multi Asset Fund, a multi-asset class fund with €5.428.14 million in net assets as of October 31, 2023. The fund's investment strategy includes a blend of global equities, fixed income, alternative instruments, and liquidity, prioritizing investments that adhere to environmental, social, and governance (ESG) principles.<br />
              The report is divided into two main parts: Style Analysis and Risk Measurement. In the Style Analysis section, the report examines the fund's investments in different geographical regions and sectors, employing Sharpe style analysis. It aims to determine the fund's position in terms of risk and return by comparing its cumulative returns with specific benchmarks and the efficient frontier.<br />
              In the Risk Measurement section, the report describes the absolute and relative risk measures for the fund, focusing on the Value at Risk (VaR) and Relative Value at Risk (ReVaR) indicators over a two-year period.<br />
              Overall, the report provides a detailed evaluation of the Blackrock ESG Multi Asset Fund, offering insights into its investment strategy, performance in varying market scenarios, and commitment to ESG principles. It also assesses the fund's risk-return characteristics and examines how it adapts and performs against benchmarks and market trends.
              <br /><br />
              
              <strong><a href="Financial Analysis of IVECO Group.pdf" target="_blank" rel="noopener noreferrer">Financial Management & Corporate Banking (2023): Financial Analysis of IVECO Group (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Should Cash-Out mergers be available.pptx" target="_blank" rel="noopener noreferrer">Business Law (Advanced) (2023): "Should Cash-Out mergers be available?" (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Toyota Analysis.pdf" target="_blank" rel="noopener noreferrer">Performance Measurement (2022): Toyota Analysis (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Decathlon In-Company Training.pdf" target="_blank" rel="noopener noreferrer">Decathlon In-Company Training (2022): "Decathlon ad impatto zero" (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Pane Quotidiano Report.pdf" target="_blank" rel="noopener noreferrer">Call 4 Ideas "Supporting Innovation at Pane Quotidiano" (2022): "Re-thinking Operations"</a> & <a href="PQ - Presentation.pdf" target="_blank" rel="noopener noreferrer">Presentation (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Competitive Intelligence Report.pdf" target="_blank" rel="noopener noreferrer">Competitive Intelligence (2022): "Impact of Volkswagen's Trinity Project on Tesla" (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="The allocation of PNRR funds for the National Health Service.pdf" target="_blank" rel="noopener noreferrer">Public Administration Management (2021): The allocation of PNRR funds for the National Health Service (co-authored)</a></strong><br />
              <br /><br />
              
              <strong><a href="Telecom Italia S.p.A. analysis.pdf" target="_blank" rel="noopener noreferrer">Business Administration (2019): Telecom Italia S.p.A. analysis (co-authored)</a></strong><br /> 
              The project on Telecom Italia S.p.A. aims to provide an in-depth analysis of the company, encompassing a thorough evaluation of its history, economic combinations, and strategic positioning in the telecommunications sector. It delves into Telecom Italia's approach to gaining a competitive edge, focusing on differentiation and growth strategies like diversification and business expansion. 
              The study also assesses the company's commitment to innovation and development, particularly in areas like 5G technology and digital transformation. Additionally, it explores Telecom Italia's relationships with stakeholders and its corporate social responsibility initiatives, including its approach to human rights, environmental sustainability, and community engagement. This comprehensive analysis aims to offer a detailed understanding of Telecom Italia's business operations, strategies, and its role in the broader economic and technological landscape.
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
