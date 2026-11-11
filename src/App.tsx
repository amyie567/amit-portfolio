import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Mail,
  Sparkles,
  Code2,
  BrainCircuit,
  Download,
  FileText,
} from "lucide-react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <nav className="navbar">
          <div className="container nav-content">
            <a href="#home" className="logo">
              <span className="logo-mark">A</span>
              <span>
                Amit<span className="logo-dot">.</span>
              </span>
            </a>

            <div className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#education">Education</a>
              <a href="#resume">Resume</a>
              <a href="#contact">Contact</a>
            </div>

            <a href="#contact" className="nav-cta">
              Let's Talk <ArrowRight size={16} />
            </a>
          </div>
        </nav>

        <section className="hero section-padding" id="home">
          <div className="container hero-grid">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="availability">
                <span className="availability-dot" />
                Available for opportunities
              </div>

              <p className="hero-greeting">HELLO, I'M AMIT RANJAN</p>

              <h1>
                Building the
                <span className="gradient-text"> Future with AI </span>&
                Technology.
              </h1>

              <p className="hero-description">
                Aspiring AI Engineer and Full Stack Developer passionate about
                creating intelligent applications and meaningful digital
                experiences.
              </p>

              <div className="hero-tags">
                <span>
                  <BrainCircuit size={15} /> AI Engineering
                </span>
                <span>
                  <Code2 size={15} /> Full Stack Development
                </span>
              </div>

              <div className="hero-actions">
                <a href="#projects" className="primary-btn">
                  Explore My Work <ArrowRight size={18} />
                </a>

                <a href="#contact" className="secondary-btn">
                  <Mail size={18} /> Contact Me
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/amyie567"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Code2 size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/amit-ranjan-aspiring-ai-engineer"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <span className="linkedin-icon">in</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="visual-glow" />

              <div className="profile-card">
                <div className="card-top">
                  <span className="card-dot purple" />
                  <span className="card-dot teal" />
                  <span className="card-dot pink" />
                  <span className="card-label">AMIT.DEV</span>
                </div>

                <div className="code-symbol">
                  <Sparkles size={54} />
                </div>

                <h2>Think. Build. Innovate.</h2>
                <p>Turning ideas into intelligent solutions.</p>

                <div className="tech-pills">
                  <span>Python</span>
                  <span>React</span>
                  <span>FastAPI</span>
                  <span>Machine Learning</span>
                </div>

                <div className="card-footer">
                  <span>PORTFOLIO 2026</span>
                  <span>01 / 05</span>
                </div>
              </div>

              <div className="floating-badge badge-ai">
                <BrainCircuit size={20} />
                <span>AI Powered</span>
              </div>

              <div className="floating-badge badge-code">
                <Code2 size={20} />
                <span>Full Stack</span>
              </div>
            </motion.div>
          </div>

          <a href="#about" className="scroll-indicator">
            <ArrowDown size={17} /> Scroll to explore
          </a>
        </section>

        <section className="about-section section-padding" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-visual">
                <div className="about-card">
                  <span className="about-number">01</span>
                  <Sparkles size={38} />
                  <h3>Curiosity drives innovation.</h3>
                  <p>
                    Learn continuously. Build practically. Improve every day.
                  </p>
                  <div className="about-decoration">A.</div>
                </div>
              </div>

              <div className="about-content">
                <span className="section-label">GET TO KNOW ME</span>
                <h2 className="section-title">
                  About <span className="gradient-text">Me</span>
                </h2>

                <p>
                  I am an aspiring AI Engineer and Full Stack Developer with a
                  Bachelor of Technology in Information Technology from Vinoba
                  Bhave University, graduated in 2023.
                </p>

                <p>
                  After graduation, I dedicated time to preparing for
                  competitive government examinations. I have now shifted my
                  focus towards technology, strengthening my programming skills
                  and building practical software projects.
                </p>

                <p>
                  I developed GameVerse AI, a full-stack AI-powered game
                  recommendation platform using Python, React, FastAPI,
                  PostgreSQL and Machine Learning.
                </p>

                <p>
                  My goal is to contribute to innovative technology teams, solve
                  real-world problems and grow as an AI Engineer and Full Stack
                  Developer.
                </p>

                <div className="about-details">
                  <div>
                    <span>Education</span>
                    <strong>B.Tech – IT</strong>
                  </div>
                  <div>
                    <span>Graduation</span>
                    <strong>2023</strong>
                  </div>
                  <div>
                    <span>Primary Focus</span>
                    <strong>AI + Full Stack</strong>
                  </div>
                  <div>
                    <span>Current Status</span>
                    <strong>Open to Opportunities</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="skills-section section-padding" id="skills">
          <div className="container">
            <div className="skills-heading">
              <span className="section-label">MY TECHNICAL EXPERTISE</span>
              <h2 className="section-title">
                Skills & <span className="gradient-text">Technologies</span>
              </h2>
              <p className="section-subtitle">
                Technologies and tools I use to build applications, explore AI
                and solve programming problems.
              </p>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-card-icon">
                  <BrainCircuit size={25} />
                </div>
                <h3>AI & Machine Learning</h3>
                <p>
                  Building intelligent solutions using machine learning
                  concepts.
                </p>
                <div className="skill-list">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>TF-IDF</span>
                  <span>Cosine Similarity</span>
                  <span>Hybrid Recommendation Systems</span>
                </div>
                <span className="skill-level">Hands-on Project Experience</span>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon teal-icon">
                  <Code2 size={25} />
                </div>
                <h3>Frontend Development</h3>
                <p>Creating responsive and user-friendly web interfaces.</p>
                <div className="skill-list">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JavaScript</span>
                  <span>React.js</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                </div>
                <span className="skill-level">Development Experience</span>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon">
                  <Code2 size={25} />
                </div>
                <h3>Backend Development</h3>
                <p>Developing APIs and application logic using Python.</p>
                <div className="skill-list">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>REST APIs</span>
                  <span>Java</span>
                  <span>C</span>
                  <span>OOP</span>
                </div>
                <span className="skill-level">Hands-on Project Experience</span>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon teal-icon">
                  <Code2 size={25} />
                </div>
                <h3>Database & Tools</h3>
                <p>Managing application data and development workflows.</p>
                <div className="skill-list">
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>VS Code</span>
                  <span>Vercel</span>
                  <span>Render</span>
                </div>
                <span className="skill-level">Practical Experience</span>
              </div>
            </div>
          </div>
        </section>
        {/* CERTIFICATIONS SECTION */}
        <section
          id="certifications"
          className="certifications-section section-padding"
        >
          <div className="container">
            <span className="section-label">MY ACHIEVEMENTS</span>

            <h2 className="section-title">
              Certifications &{" "}
              <span className="gradient-text">Achievements</span>
            </h2>

            <p className="section-subtitle">
              Certifications and learning achievements that support my technical
              journey.
            </p>

            <div className="certifications-grid">
              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>Java (Basic)</h3>
                <p>HackerRank</p>
                <span>Programming</span>
              </motion.div>

              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>CSS (Basic)</h3>
                <p>HackerRank</p>
                <span>Frontend Development</span>
              </motion.div>

              <motion.div
                className="certification-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3>Participation Certificates</h3>
                <p>Unstop</p>
                <span>Learning & Participation</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects-section section-padding" id="projects">
          <div className="container">
            <div className="projects-heading">
              <span className="section-label">MY RECENT WORK</span>
              <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                Practical projects where I turn ideas into working applications
                using modern technologies.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <div className="project-preview gameverse-preview">
                  <div className="project-preview-content">
                    <Sparkles size={42} />
                    <h3>GameVerse AI</h3>
                    <p>Intelligent Gaming Experience</p>
                    <div className="preview-tags">
                      <span>AI</span>
                      <span>ML</span>
                      <span>Full Stack</span>
                    </div>
                  </div>
                  <span className="project-index">PROJECT 01</span>
                </div>

                <div className="project-info">
                  <div className="project-category">AI + FULL STACK</div>
                  <h3>GameVerse AI</h3>
                  <p>
                    An AI-powered game recommendation platform featuring a
                    hybrid recommendation engine, AI chat assistant, player
                    profiles, achievements, mini-games and leaderboard.
                  </p>

                  <div className="project-tech">
                    <span>Python</span>
                    <span>React</span>
                    <span>FastAPI</span>
                    <span>PostgreSQL</span>
                    <span>Scikit-learn</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="https://game-verse-ai.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary-link"
                    >
                      Live Demo <ArrowRight size={16} />
                    </a>

                    <a
                      href="https://github.com/amyie567/GameVerse-AI"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Code2 size={17} /> Source Code
                    </a>
                  </div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-preview guess-preview">
                  <div className="project-preview-content">
                    <span className="guess-symbol">?</span>
                    <h3>Guess Number</h3>
                    <p>Interactive Number Challenge</p>
                    <div className="preview-tags">
                      <span>JavaScript</span>
                      <span>Web</span>
                    </div>
                  </div>
                  <span className="project-index">PROJECT 02</span>
                </div>

                <div className="project-info">
                  <div className="project-category">WEB DEVELOPMENT</div>
                  <h3>Guess Number</h3>
                  <p>
                    An interactive number guessing game built to demonstrate
                    JavaScript fundamentals, user interaction and frontend
                    development.
                  </p>

                  <div className="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                  </div>

                  <div className="project-actions">
                    <a
                      href="https://amyie567.github.io/GuessNumber.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary-link"
                    >
                      Live Demo <ArrowRight size={16} />
                    </a>

                    <a
                      href="https://github.com/amyie567"
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Code2 size={17} /> GitHub Profile
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div className="more-projects">
              <a
                href="https://github.com/amyie567"
                target="_blank"
                rel="noreferrer"
              >
                Explore More on GitHub <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>
        {/* EDUCATION SECTION */}
        <section id="education" className="education-section section-padding">
          <div className="container">
            <div className="education-heading">
              <span className="section-label">MY BACKGROUND</span>
              <h2 className="section-title">Education</h2>
              <p className="section-subtitle">
                My academic foundation in technology and computer science.
              </p>
            </div>

            <div className="education-card">
              <div className="education-icon">
                <Code2 size={28} />
              </div>

              <div className="education-details">
                <span className="education-year">2019 – 2023</span>
                <h3>Bachelor of Technology (B.Tech)</h3>
                <h4>Information Technology</h4>
                <p>Vinoba Bhave University, Hazaribagh, Jharkhand</p>
                <div className="education-score">CGPA: 7.2 / 10</div>
              </div>
            </div>
          </div>
        </section>
        {/* RESUME SECTION */}
        <section id="resume" className="resume-section section-padding">
          <div className="container">
            <div className="resume-card">
              <div className="resume-icon">
                <FileText size={35} />
              </div>

              <span className="section-label">MY RESUME</span>

              <h2 className="section-title">
                Interested in My <span className="gradient-text">Profile?</span>
              </h2>

              <p className="section-subtitle">
                Explore my educational background, technical skills, projects
                and qualifications in detail.
              </p>

              <div className="resume-actions">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-view-btn"
                >
                  <FileText size={18} />
                  View Resume
                </a>

                <a
                  href="/resume.pdf"
                  download="Amit_Ranjan_Resume.pdf"
                  className="resume-download-btn"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section section-padding">
          <div className="container">
            <div className="contact-content">
              <span className="section-label">GET IN TOUCH</span>

              <h2 className="section-title">
                Let's Build Something
                <span> Amazing Together.</span>
              </h2>

              <p className="section-subtitle">
                I'm looking for opportunities as an AI Engineer or Full Stack
                Developer. If you have an opportunity or want to collaborate,
                feel free to connect.
              </p>

              <div className="contact-actions">
                <a
                  href="mailto:amitranjanhzb7@gmail.com"
                  className="contact-button"
                >
                  <Mail size={18} />
                  Contact Me
                </a>

                <a
                  href="https://www.linkedin.com/in/amit-ranjan-aspiring-ai-engineer"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-secondary"
                >
                  LinkedIn <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Amit<span>.</span>
            </a>
            <p>Building with AI. Creating with Purpose.</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/amyie567"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/amit-ranjan-aspiring-ai-engineer"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#home">Back to Top ↑</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Amit Ranjan. All rights reserved.</p>
          <p>Designed & Built with React and TypeScript.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
