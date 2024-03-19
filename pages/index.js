import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  
  const [visibleSections, setVisibleSections] = useState({
    projects: false,
    certificates: false,
    languagesAndSkills: false,
    contact: false,
  });
  
  const [visibleDescriptions, setVisibleDescriptions] = useState({});
  
  // Funzione per cambiare la visibilità delle descrizioni dei progetti
  const toggleDescriptionVisibility = (projectId) => {
    console.log("Toggle visibility for: ", projectId); // Aggiungi questo per debug
    setVisibleDescriptions(prevState => ({
        ...prevState,
        [projectId]: !prevState[projectId]
    }));
  };
  
  
  return (
    <div>
      <Head>
        <title>Niccolò Belvedere - Portfolio Personale</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Welcome to my personal portfolio. Discover projects, achievements, and professional journey about me. Explore now to learn more about Niccolò Belvedere's expertise and experiences." />
        <meta property="og:title" content="Niccolò Belvedere - Portfolio Professionale" />
        <meta property="og:description" content="Insights on my academic and professional background." />
        <meta property="og:image" content="https://www.niccolobelvedere.com/_next/image?url=Picture.png&w=256&q=75" />
        <meta property="og:url" content="https://www.niccolobelvedere.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
      </Head>
      
      
      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <Image
            src="Picture.png"
            alt="Niccolò Belvedere"
            width={180}
            height={180}
            className={styles.profileImage}
          />
          <br />
          <h1>Hello, I am Niccolò Belvedere. Welcome to my personal portfolio.</h1>
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
            <li><a href="#contact"><strong>Contacts</strong></a></li>
          </ul>
        </nav>
      </header>

            
      <main className={styles.main}>
        <section id="about" className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            <br />In 2019, after years living in my home country, Maratea, I moved to Milan to pursue my studies in Business Administration and Management at Bocconi University. 
            In the following years I took part in several projects, which can be consulted in the Projects area of this portfolio, 
            until I spent an exchange semester in Ottawa (Canada) during my third year of Bachelor, at the Telfer School of Management. 
            Subsequently, in 2022 I started my Master of Science in Management, which led me to an internship at Amazon Business from June 2023 to December 2023 in the area of Business Development and Account Management.<br /> 
            <br />
            From early on I developed a passion for tech and innovation: during my third year of high school science (2017) I took part in a school work experience on how to develop a startup from 0, 
            creating a prototype and a business model. In 2022, a colleague and I won a "Call4Ideas", drafting an idea about a platform to improve the supply chain of NGOs and presenting the project in front of a jury at the SDA School of Management. 
            Afterwards, I am taking courses and doing self-taught practices to learn coding with various languages. <br />
            I strongly believe that this new technological era will change the course of our lives, and I want to be part of this change.<br />
            <br />
              <div className={styles.buttonContainer}>
                <a href="CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadbutton}>Curriculum Vitae</a>
                <a href="Bachelor's Transcript.pdf" target="_blank" className={styles.downloadbutton} rel="noopener noreferrer">My Bachelor's academic transcript</a>
                <a href="Master's Transcript.pdf" target="_blank" className={styles.downloadbutton} rel="noopener noreferrer">My Master's academic transcript</a>
              </div>
          </p>
        </section>

        <hr class={styles.hrzigzag} />
        <br />
            
        <section id="projects" className={`${styles.projectSection} ${visibleSections.projects ? 'visible-section' : 'hidden-section'}`}>
          <h2>Projects</h2>
          <div className={styles.projectContainer}>
            <br />
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project1')} className={styles.projectTitle}>
                Master's thesis (Work in Progress): How financials and macroeconomics factors affect the volatility of personnel in Big Tech companies
              </strong>
              {visibleDescriptions['project1'] && (
                <p>Work in progress. Estimated end date: 06/2024<br /></p>
              )}
            </div>

            <br />
            
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project2')} className={styles.projectTitle}>
                Bachelor's thesis (2022): "The key role of People in Public Administration: How Civil Service Models affect the quality of a nation"
              </strong>
              {visibleDescriptions['project2'] && (  
                <p>
                The thesis outlines the significance of interactions between public and private sectors in shaping a nation's economic condition, emphasizing that the essence of a nation's economy is not merely the sum of these sectors, but the result of their continual interplay. <br />Central to this dynamic is human capital. The public sector's regulatory role, financing, and infrastructure development are highlighted as influential factors on private sector activities. The paper focuses on the criticality of placing competent individuals within public organizations since their caliber directly impacts national performance across both sectors.
                The discourse pivots to a comparative analysis of two civil service systems: career-based and position-based. It includes an examination of how human resource (HR) management tools adapt to each system and a detailed exploration of HR practices in Italy and France (career-based) and Canada and England (position-based). <br />An interview with Dr. Trombetti Lilia from the Canadian Radio-television and Telecommunication Commission provides insights into the practical applications of Canada's position-based system.
                The discussion advances to various topics, such as the superior civil service system, evaluation methods for these systems, recruitment strategies for top talent in public institutions, and applicable lessons for Italy. The analysis concludes by revealing how the choice between the two models can underpin a nation's development under specific circumstances, and it reinforces the notion that human resources are pivotal to societal progress.
                <br /><br />
                <a href="Bachelor Degree Thesis.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a>
                <br /></p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project3')} className={styles.projectTitle}>
                Big Data for Business Decisions (2023): "Monetary Words, Market Echoes" - (co-authored)
              </strong>
              {visibleDescriptions['project3'] && (
                <p>
                The "Big Data Report" examines the European Central Bank's (ECB) communication strategies and their impact on financial markets. Focusing on the ECB presidencies of Mario Draghi and Christine Lagarde, the report analyzes speeches and monetary policy statements from November 2011 to June 2023.<br />It employs Latent Dirichlet Allocation (LDA) for topic modeling and linear regression models to investigate the relationship between ECB communication and various financial measures such as the IOS rate, EUR/USD exchange rate, and Italian and German government bond yields.<br />
                The study observes significant differences in the communication styles and focus areas of Draghi and Lagarde. Draghi's tenure is characterized by concise, direct communication, primarily addressing macroeconomic themes during the European financial crisis. In contrast, Lagarde's period is marked by longer, more detailed discussions, with a broader focus due to events like the COVID-19 pandemic and geopolitical instabilities. 
                The report identifies themes like "Asset Convergence," "Financial Conditions," "Structural Stability," and "Inflation Expectations" as significantly influencing financial metrics. The study concludes with a discussion of limitations and areas for future research, emphasizing the need for continuous examination of central bank communications and their financial implications.
                <br /><br />
                <a href="Big Data Report.pdf" class={styles.projectButton}  target="_blank" rel="noopener noreferrer">Download report</a>
                <a href="Big Data presentation.pdf" class={styles.projectButton}  target="_blank" rel="noopener noreferrer">Download presentation</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project4')} className={styles.projectTitle}>
                Performance Measurement & Corporate Strategy (2023): How to innovate Microsoft's Corporate Strategy - (co-authored)
              </strong>
              {visibleDescriptions['project4'] && (
                <p>
                In the "Corporate Strategy Report" for Microsoft Inc., a multifaceted analytical approach was employed to comprehensively evaluate the company’s operations and strategic direction. Initially, the report outlined Microsoft’s corporate strategy, emphasizing its synergic approach that integrates resources and operations across different segments like technology, marketing, and sales. This holistic view painted a picture of Microsoft's portfolio strategy.<br /> 
                The business analysis segment delved into Microsoft's various operational sectors, including software, cloud computing, gaming, and hardware. Each of these sectors was thoroughly examined to assess current performance, market position, and growth potential. The software segment, for example, was broken down into its constituent services and products, while cloud computing was highlighted, particularly Azure, for its profitability and growth trajectory.<br /> 
                A PESTEL analysis was then conducted to understand the external factors influencing Microsoft's business environment.
                Following this, a detailed micro-level analysis of each business segment was carried out. 
                One of the report's focal points was the strategy for integrating artificial intelligence across Microsoft's business units. The analysis here was twofold: it first assessed the strategic importance of AI integration and then explored potential avenues for acquiring AI capabilities.<br /> 
                The report also paid close attention to Microsoft’s commitments to social and environmental sustainability, underscoring its CSR initiatives and strategies.<br /> 
                Finally, the report wrapped up with a series of strategic recommendations. These recommendations were based on the comprehensive analyses conducted throughout the report, suggesting future directions and adjustments Microsoft could consider for continued growth and market leadership.
                <br /><br />
                <a href="Corporate Strategy Report.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a><br /> 
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project5')} className={styles.projectTitle}>
                Asset Management (2023): ESG Multi-Asset Fund E2 – EUR analysis - (co-authored)
              </strong>
              {visibleDescriptions['project5'] && (
                <p>
                The "Asset Management Report" focuses on the Blackrock ESG Multi Asset Fund, a multi-asset class fund with €5.428.14 million in net assets as of October 31, 2023. The fund's investment strategy includes a blend of global equities, fixed income, alternative instruments, and liquidity, prioritizing investments that adhere to environmental, social, and governance (ESG) principles.<br />
                The report is divided into two main parts: Style Analysis and Risk Measurement. In the Style Analysis section, the report examines the fund's investments in different geographical regions and sectors, employing Sharpe style analysis. It aims to determine the fund's position in terms of risk and return by comparing its cumulative returns with specific benchmarks and the efficient frontier.<br />
                In the Risk Measurement section, the report describes the absolute and relative risk measures for the fund, focusing on the Value at Risk (VaR) and Relative Value at Risk (ReVaR) indicators over a two-year period.<br />
                Overall, the report provides a detailed evaluation of the Blackrock ESG Multi Asset Fund, offering insights into its investment strategy, performance in varying market scenarios, and commitment to ESG principles. It also assesses the fund's risk-return characteristics and examines how it adapts and performs against benchmarks and market trends.
                <br /><br />
                <a href="Asset Management Report.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project6')} className={styles.projectTitle}>
                Financial Management & Corporate Banking (2023): Financial Analysis of IVECO Group - (co-authored)
              </strong>
              {visibleDescriptions['project6'] && (
                <p>
                The "Financial Analysis of IVECO Group" report focuses on the financial aspects of the IVECO Group. It covers detailed cash flow analysis, capital structure, cost of debt capital, and cost of equity capital. The report analyzes the company's financial performance over three years, noting how factors like capital expenditures, working capital management, and net free operating cash flows have influenced financial outcomes.<br />
                It also includes a thorough risk measurement analysis, examining the company's debt-to-equity ratio, interest coverage, and financial expenses. It delves into the beta calculation for IVECO Group, considering the company's market capitalization, net financial position, and comparable companies in the sector. Furthermore, the report assesses the Weighted Average Cost of Capital (WACC) and Enterprise Value (EV) of IVECO Group, providing a comprehensive view of the company's financial health and valuation.
                <br /><br />
                <a href="Financial Analysis of IVECO Group.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a><br />
                </p>
              )}
            </div>

            <br />

            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project7')} className={styles.projectTitle}>
                Business Law (Advanced) (2023): "Should Cash-Out mergers be available?" - (co-authored)
              </strong>
              {visibleDescriptions['project7'] && (
                <p>
                The presentation discusses the concept, pros and cons, and regulatory aspects of cash-out mergers.<br />
                The presentation delves into agency costs arising from the conflicting interests of controlling and minority shareholders and directors versus minority shareholders. It highlights how cash-out mergers can create advantages but also risks of injustices for minority shareholders.<br />
                Moreover, it compares long-form and short-form mergers in the U.S., with an analysis of the regulatory landscape in Europe. It discusses the various legal frameworks and protections in place to balance the interests of controlling and minority shareholders. Then, it lists points in favor of cash-out mergers and points against these mergers.<br />
                In conclusion, the presentation suggests that cash-out mergers can be beneficial if regulated properly, with sufficient protection for minority shareholders. It recommends following the U.S. model, particularly Delaware's jurisprudence, as an example of providing flexibility and protection in cash-out mergers.
                <br /><br />
                <a href="Should Cash-Out mergers be available.pptx" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download presentation</a><br />
                </p>
              )}
            </div>
            
            <br />

            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project8')} className={styles.projectTitle}>
                Performance Measurement (2022): Toyota Analysis - (co-authored)
              </strong>
              {visibleDescriptions['project8'] && (
                <p>
                The "Toyota Analysis" report provides an extensive examination of Toyota's business strategies, global market presence, and future outlook. It starts analyzing the company's diverse product portfolio and the Toyota Production System (TPS). Then the report examines Toyota's global supply chain and manufacturing strategies, emphasizing how these contribute to the company's competitive advantage in the automotive industry.<br />
                Furthermore, it explores Toyota's market strategies and presence in key regions, including North America, Europe, and Asia. It evaluates the company's financial performance, discussing revenue, profitability, and market share trends over recent years.<br />
                A significant portion of the analysis is dedicated to Toyota's innovation strategies, particularly its investments in sustainable mobility, autonomous driving technology, and advanced materials. The report underscores Toyota's commitment to innovation and its efforts to stay at the forefront of automotive technology developments.<br />
                In conclusion, the report outlines Toyota's future prospects and potential challenges. It suggests that Toyota's continued focus on innovation, combined with its efficient production system and strong global presence, positions the company well for future success despite the rapidly evolving automotive industry.
                <br /><br />
                <a href="Toyota Analysis.pdf" target="_blank" class={styles.projectButton} rel="noopener noreferrer">Download PDF</a><br />
                </p>
              )}
            </div>
            
            <br />
            
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project9')} className={styles.projectTitle}>
                Decathlon In-Company Training (2022): "Decathlon ad impatto zero" - (co-authored)
              </strong>
              {visibleDescriptions['project9'] && (
                <p>
                This project presents a detailed strategy for implementing sustainability and circular economy practices within Decathlon and aims to integrate a "Zero Waste" feature into Decathlon. This initiative is designed to guide customers on responsibly managing their used Decathlon products and encompasses a holistic approach to product lifecycle management.<br />
                The strategy incorporates a creative upcycling and repairing section in the app, where customers are encouraged to refurbish or repurpose their products using detailed tutorials available through links to Decathlon's YouTube channel. For products beyond repair, the app provides guidance on locating nearby waste collection centers to ensure responsible disposal. Additionally, customers have the option to return used products to Decathlon stores.<br />
                The plan includes setting up centralized repair hubs across Italy, optimized for various refurbishment processes like mechanics, electronics, painting, and welding.<br />
                The reconditioned products will be available for purchase or rental, expanding the reach of Decathlon's Rent division. This initiative not only aligns with the increasing consumer trend towards sustainable and second-hand products, particularly among Millennials and Gen Z, but also positions Decathlon as a leader in sustainable retail practices.<br /> 
                The overall strategy encompasses app development, content creation for repair and upcycling, hiring and training new staff for repair and in-store operations, and establishing the necessary infrastructure for the repair hubs and in-store rental and sales stations. Through this integrated approach, Decathlon aims to enhance its sustainability profile while increasing its market share in the refurbished product segment.
                <br /><br />
                <a href="Decathlon In-Company Training.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project10')} className={styles.projectTitle}>
                Call 4 Ideas "Supporting Innovation at Pane Quotidiano" (2022): "Re-thinking Operations" - (co-authored)
              </strong>
              {visibleDescriptions['project10'] && (
                <p>
                The "Pane Quotidiano Report" presents a strategic approach to enhancing the efficiency and effectiveness of Pane Quotidiano's (PQ) operations, particularly its supply chain, from relationships with suppliers to the management and organization of packages for distribution. The report emphasizes the use of innovative solutions in the supply chain as a means to increase the effectiveness of PQ's actions and reduce costs.<br />
                To achieve these objectives, the report proposes the implementation of a new communication platform for donors and suppliers, integrated with a database to provide real-time information on products in the warehouse. This platform aims to streamline the donation process, making it easier for suppliers and casual donors to meet PQ's demands. Additionally, the report suggests utilizing the "Microsoft Cloud for Non-Profit" to improve various areas of the organization, including logistics and donor management.
                Furthermore, a partnership with E-Mobility is recommended to address the need for vehicles in collecting and delivering goods more efficiently. This collaboration could provide PQ with access to vehicles at no cost, optimizing costs and freeing up resources for other tasks.
                <br />Another significant proposal is the "New Mobility Project," which aims to reach people in need in different areas of the city. This project would involve setting up a mobile unit in a strategic location to distribute pre-packaged goods. The report highlights the importance of careful planning in choosing the location and format of this distribution to maximize impact and efficiency.<br />
                In conclusion, the report posits that by adopting these innovative logistics and partnership strategies, PQ can reduce costs and reinvest the savings in improving the quality of its operations and extending its services.
                <br /><br />
                <a href="Pane Quotidiano Report.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download report</a>
                <a href="PQ - Presentation.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download presentation</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project11')} className={styles.projectTitle}>
                Competitive Intelligence (2022): "Impact of Volkswagen's Trinity Project on Tesla" - (co-authored)
              </strong>
              {visibleDescriptions['project11'] && (
                <p>
                The report details the potential impact of Volkswagen's Trinity Project on Tesla. It outlines Tesla's intelligence plan, focusing on Volkswagen's strategy for launching a new electric car model under the Trinity Project and discusses how this Project, one of Volkswagen's largest investments, could pose a significant challenge to Tesla in the electric car market.<br />
                The report delves into various components and characteristics that Volkswagen plans to enhance, such as advanced battery technology and autonomous driving features, aiming to understand where Tesla could improve to maintain its market leadership.<br />
                The report also includes an analysis of the partnership between Volkswagen and QuantumScape, a supplier of a new type of electric battery that offers significant improvements in capacity and charging times. It covers the steps Tesla might take to remain competitive, including strengthening partnerships, increasing research and development, and analyzing market structure changes. Additionally, the report provides insights into customer perceptions of Tesla and Volkswagen, especially in the context of the Trinity Project's launch.
                <br /><br />
                <a href="Competitive Intelligence Report.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download report</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project12')} className={styles.projectTitle}>
                Public Administration Management (2021): The allocation of PNRR funds for the National Health Service - (co-authored)
              </strong>
              {visibleDescriptions['project12'] && (
                <p>
                This report focuses on the distribution of funds from Italy's National Recovery and Resilience Plan (PNRR) to the National Health Service (SSN). It provides a detailed analysis of the current state of healthcare in different regions of Italy, evaluating performance across various metrics like the number of primary healthcare houses, general practitioners per capita, hospitalization rates for chronic diseases, elderly care, long-term care bed availability, and digital health infrastructure.<br />
                It highlights disparities in healthcare services between northern and southern regions, noting the need for improved primary care and better management of chronic conditions to reduce hospitalization rates. The report also emphasizes the digital divide in healthcare, suggesting a significant investment in telemedicine, digital competencies, and cybersecurity.<br />
                The PNRR funds are allocated to four strategic axes: Territorial Assistance, Digital Health, Hospital Network, and Technologies. Each axis addresses specific healthcare needs, with Territorial Assistance focusing on community healthcare structures, Digital Health aiming to improve digital infrastructure and capabilities, Hospital Network targeting the improvement and expansion of hospital facilities, and Technologies focusing on updating medical equipment and technology.<br />
                The report outlines a comprehensive plan for utilizing these funds, with a focus on reducing regional disparities and improving healthcare efficiency and quality.
                <br /><br />
                <a href="The allocation of PNRR funds for the National Health Service.pdf" class={styles.projectButton} target="_blank" rel="noopener noreferrer">Download PDF</a><br />
                </p>
              )}
            </div>
            
            <br />
              
            <div className={styles.projectItem}>
              <strong onClick={() => toggleDescriptionVisibility('project13')} className={styles.projectTitle}>
                Business Administration (2019): Telecom Italia S.p.A. analysis - (co-authored)
              </strong>
              {visibleDescriptions['project13'] && (
                <p>
                The project on Telecom Italia S.p.A. aims to provide an in-depth analysis of the company, encompassing a thorough evaluation of its history, economic combinations, and strategic positioning in the telecommunications sector. It delves into Telecom Italia's approach to gaining a competitive edge, focusing on differentiation and growth strategies like diversification and business expansion. 
                The study also assesses the company's commitment to innovation and development, particularly in areas like 5G technology and digital transformation. Additionally, it explores Telecom Italia's relationships with stakeholders and its corporate social responsibility initiatives, including its approach to human rights, environmental sustainability, and community engagement. This comprehensive analysis aims to offer a detailed understanding of Telecom Italia's business operations, strategies, and its role in the broader economic and technological landscape.<br /><br />
                <a href="Telecom Italia S.p.A. analysis.pdf" target="_blank" class={styles.projectButton} rel="noopener noreferrer">Download PDF</a><br /> 
                </p>            
              )}
            </div>
              
          </div>
        </section>

              
        <div className={styles.container}>
          <div className={styles.box}>
            <section id="certificates" className={`${styles.certificatesSection} ${visibleSections.certificates ? 'visible-section' : 'hidden-section'}`}>
            <h2>Certificates</h2>
              <p>
                <br />
                <strong><a href="BCG Introduction to Strategy Consulting Virtual Experience Program.pdf" target="_blank" rel="noopener noreferrer">Boston Consulting Group – Strategy Consulting Virtual Experience Program on Forage</a> <br />(February 2023)</strong><br />
                <em>Conducted market research, brainstorming session and adopting solutions with creative methods. </em><br />
                <br />
                <strong><a href="Competitive Intelligence.pdf" target="_blank" rel="noopener noreferrer">Competitive Intelligence Certificate on Voice of the Business</a> <br />(April 2022)</strong><br />
                <em>Research Gathering Methods, CXM, building of KPIs, competitor analysis.</em><br />
                <br />
                <strong><a href="Certificate Bitcoin and Blockchain Fundamentals.pdf" target="_blank" rel="noopener noreferrer">Bitcoin and Blockchain Fundamentals</a> <br />(March 2021)</strong> <br />
                <br />
                <strong><a href="ECDL and ICDL.pdf" target="_blank" rel="noopener noreferrer">ECDL & ICDL Full Standard (Use of Excel, PowerPoint, Word and Data Privacy)</a> <br />(June 2020)</strong><br />
                <em>The certification consists of 7 topics that are divided into the following modules: Computer Essentials, Online Essentials, Word Processing, Spreadsheets, IT-Security & Cyber Security, Presentation, Online Collaboration.</em><br />
                <br />
                <strong><a href="Certificate Acrobat Professional.pdf" target="_blank" rel="noopener noreferrer">Document Management with Office and Acrobat Professional</a> <br />(December 2019)</strong><br />
              </p>
            </section>
          </div>
      
          <div className={styles.box}>
            <section id="languagesandskills" className={`${styles.languagesandskillsSection} ${visibleSections.languagesAndSkills ? 'visible-section' : 'hidden-section'}`}>
            <h2>Languages and Skills</h2>
              <p>
                <br />
                <strong>Languages</strong><br />
                Italian (Native)<br />
                English (Full proficient)<br />
                 French (B1 Business)<br />
                <br />
                <strong>IT Skills</strong><br />
                Excellent knowledge of <em>Windows and Microsoft Office</em><br /> 
                Working with <em>Macro & VBA Code on Excel</em><br /> 
                Excellent in <em>Salesforce</em><br /> 
                Intermediate coding skills on <em>R, Natural Languange Processing, JavaScript and C#</em>
              </p>
            </section>
          </div>
        </div>

        <br />
              
        <section id="contact" className={`${styles.contactSection} ${visibleSections.contact ? 'visible-section' : 'hidden-section'}`}>
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
