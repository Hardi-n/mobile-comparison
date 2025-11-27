import React from "react";
// import "./AboutPage.css"; // external CSS file

export default function AboutPage() {
  return (
    <main className="about-container">
      <section className="about-wrapper">
        <header className="about-header">
          {/* <div className="logo-box">S</div> */}
          <div>
            <h1 className="title">About This Project</h1>
            <p className="subtitle">
              Final year project — Sant Longowal Institute of Engineering &
              Technology (SLIET)
            </p>
          </div>
        </header>

        <article className="about-card">
          <h2 className="card-title">Project Summary</h2>
          <p className="card-text">
            This project has been developed as a final year project in the
            fulfillment of the Degree at SLIET. It demonstrates the students'
            ability to design, implement, and document a complete software
            solution.
          </p>

          <h3 className="authors-title">Authors</h3>
          <div className="authors-grid">
            <div className="author-box">
              <p className="author-label">Student</p>
              <p className="author-name">SUBHAGYA</p>
            </div>

            <div className="author-box">
              <p className="author-label">Student</p>
              <p className="author-name">YASIR</p>
            </div>

            <div className="author-box">
              <p className="author-label">Student</p>
              <p className="author-name">URSHITA</p>
            </div>
          </div>

          <p className="order-note">
            Listed as: <strong>SUBHAGYA &gt; YASIR &gt; URSHITA</strong>. This
            project was completed jointly in partial fulfillment of the Degree
            requirements.
          </p>

          <footer className="footer-section">
            <p className="faculty">Supervising Faculty: — Dr. JATINDER PAL SINGH —</p>
            <p className="year">
              Year: <strong>{new Date().getFullYear()}</strong>
            </p>
          </footer>
        </article>

        <nav className="nav-buttons">
          <a href="/" className="btn-primary">
            Home
          </a>
          <a href="/contact" className="btn-outline">
            Contact
          </a>
        </nav>
      </section>
    </main>
  );
}
