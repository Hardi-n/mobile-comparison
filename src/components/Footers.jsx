import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="2" width="14" height="20" rx="2"
                    stroke="currentColor" strokeWidth="2" />
                  <path d="M9 6H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="footer-logo-text">SmartChoice</span>
            </div>
            <p className="footer-description">
              AI-Powered Smartphone Performance & Recommendation System
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/recommendations">Get Recommendations</Link></li>
              <li><Link to="/compare">Compare Devices</Link></li>
              <li><Link to="/analytics">Analytics Dashboard</Link></li>
            </ul>
          </div>

          {/* Project Team */}
          <div className="footer-section">
            <h3 className="footer-heading">Project Team</h3>
            <p className="footer-text">B.Tech Final Year Project</p>
            <p className="footer-text">CSE Department, SLIET Longowal</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 SmartChoice — CSE Department, SLIET Longowal
          </p>
          <p className="footer-note">
            All data used for educational and research purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
