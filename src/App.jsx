import './App.css'
import { useEffect } from 'react'
function App() {
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])
  return (

    <>
    <main>
      <section className="hero reveal" >
          <div className="container">
            <h1>Salauddin Titumir Uday</h1>
            <p className="tagline" >Computer Science & Engineering Student</p>
            <p className="intro">Building scalable web applications, machine learning research models, and developer tools. Focused on clean architecture, performance, and practical software craft.</p>
            <div className="actions">
                <a className="btn-primary" href="#">View Resume</a>
                <a className="link-accent" href="#projects">View Projects ↓</a>
                <a className="link-muted" href="#contact">Contact ↗</a>
            </div>
          </div>
      </section>
      <section className="projects reveal" id="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="project-grid">
              <article className="card">
                <div className="card-header">
                  <h3 className="card-title">Medicore</h3>
                  <span className="card-tag">Full-stack</span>
                </div>
                <div className="card-media"></div>
                <p className="card-outcome">One-line outcome goes here.</p>
                <div className="card-pills">
                  <span className="pill">HTML</span>
                  <span className="pill">ML</span>
                  <span className="pill">JavaScript</span>
                </div>
                <div className="card-links">
                  <a className="card-link" href="#">GitHub ↗</a>
                </div>
              </article>

              <article className="card">
                <div className="card-header">
                  <h3 className="card-title">Hospital Management System</h3>
                  <span className="card-tag">Full-stack</span>
                </div>
                <div className="card-media"></div>
                <p className="card-outcome">One-line outcome goes here.</p>
                <div className="card-pills">
                  <span className="pill">React</span>
                  <span className="pill">ASP.NET Core</span>
                </div>
                <div className="card-links">
                  <a className="card-link" href="#">GitHub ↗</a>
                </div>
              </article>

              <article className="card">
                <div className="card-header">
                  <h3 className="card-title">MOI</h3>
                  <span className="card-tag">Full-stack</span>
                </div>
                <div className="card-media"></div>
                <p className="card-outcome">One-line outcome goes here.</p>
                <div className="card-pills">
                  <span className="pill">HTML</span>
                  <span className="pill">JavaScript</span>
                  <span className="pill">Node.js</span>
                </div>
                <div className="card-links">
                  <a className="card-link" href="#">GitHub ↗</a>
                </div>
              </article>

              <article className="card">
                <div className="card-header">
                  <h3 className="card-title">Study-buddy</h3>
                  <span className="card-tag">Full-stack</span>
                </div>
                <div className="card-media"></div>
                <p className="card-outcome">One-line outcome goes here.</p>
                <div className="card-pills">
                  <span className="pill">HTML</span>
                  <span className="pill">JavaScript</span>
                </div>
                <div className="card-links">
                  <a className="card-link" href="#">GitHub ↗</a>
                </div>
            </article>
              <article className="card">
                <div className="card-header">
                  <h3 className="card-title">Tools</h3>
                  <span className="card-tag">Full-stack</span>
                </div>
                <div className="card-media"></div>
                <p className="card-outcome">One-line outcome goes here.</p>
                <div className="card-pills">
                  <span className="pill">Python</span>
                  <span className="pill">ML</span>
                </div>
                <div className="card-links">
                  <a className="card-link" href="#">GitHub ↗</a>
                </div>
              </article>            
          </div>
        </div>
      </section>
      <section className="skills reveal">
        <div className="container">
          <h2>Skills</h2>

          <div className="skill-group">
            <p className="skill-label">Languages</p>
            <div className="skill-row">
              <span className="skill-pill">JavaScript</span>
              <span className="skill-pill">C++</span>
            </div>
          </div>

          <div className="skill-group">
            <p className="skill-label">Frameworks</p>
            <div className="skill-row">
              <span className="skill-pill">React</span>
              <span className="skill-pill">Node.js</span>
            </div>
          </div>

          <div className="skill-group">
            <p className="skill-label">Tools</p>
            <div className="skill-row">
              <span className="skill-pill">Git</span>
              <span className="skill-pill">GitHub</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-inner">
          <p className="footer-name">© 2026 Salauddin Titumir Uday</p>
          <div className="footer-links">
            <a className="footer-link" href="mailto:you@example.com">Email</a>
            <a className="footer-link" href="https://github.com/tetumer">GitHub</a>
            <a className="footer-link" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  </>
)
  
}

export default App