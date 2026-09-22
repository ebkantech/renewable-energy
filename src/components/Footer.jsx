import { Link } from "react-router-dom";
import React from "react";

const services = [
  ["Bio-CNG / CBG Plants", "/capabilities"],
  ["Solar EPC", "/solar-epc"],
  ["Hybrid Solar + Biogas", "/solar-epc"],
  ["Execution & O&M", "/execution"],
];

const company = [
  ["About", "/about"],
  ["Leadership", "/leadership"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      {/* Tri-colour line: biogas green · solar blue · sun amber */}
      <div className="footer-stripe" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MAIN COLUMNS */}
      <div className="container footer-main">
        <div className="footer-about">
          <Link to="/" className="footer-brand" onClick={scrollTop}>
            <span className="brand-mark">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <b>RREV</b>
          </Link>

          <p>
            Renewable Rise Energy Venture — turnkey Bio-CNG plant execution
            and Solar EPC, from concept to long-term operations.
          </p>

          <div className="footer-chips">
            <span className="chip bio">Bio-CNG</span>
            <span className="chip solar">Solar EPC</span>
          </div>

          <Link to="/contact" className="footer-cta-btn" onClick={scrollTop}>
            Start a Conversation <span>↗</span>
          </Link>
        </div>

        <nav className="footer-col" aria-label="Services">
          <span className="footer-label">Services</span>
          <ul>
            {services.map(([label, to]) => (
              <li key={label}>
                <Link to={to} onClick={scrollTop}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <span className="footer-label">Company</span>
          <ul>
            {company.map(([label, to]) => (
              <li key={label}>
                <Link to={to} onClick={scrollTop}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <span className="footer-label">Current Project</span>
          <div className="footer-project">
            <b>12 TPD</b>
            <span>Compressed Biogas (CBG) Plant — proposed</span>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Renewable Rise Energy Venture. All rights reserved.</span>

        <button type="button" className="to-top" onClick={scrollTop}>
          Back to top <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
