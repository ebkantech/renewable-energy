import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container footer-grid">

        {/* BRAND */}
        <div>
          <Link to="/" className="footer-brand" onClick={scrollTop}>
            <span className="brand-mark">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <b>RREV</b>
          </Link>

          <p>Renewable Rise Energy Venture</p>
        </div>

        {/* FOCUS */}
        <div>
          <span className="footer-label">FOCUS</span>

          <p>
            Bioenergy & CBG
            <br />
            Solar EPC
            <br />
            Sustainable Infrastructure
          </p>
        </div>

        {/* PROJECT */}
        <div>
          <span className="footer-label">PROJECT</span>

          <p>
            Proposed 12 TPD
            <br />
            Compressed Biogas Plant
          </p>
        </div>

        {/* NAVIGATE */}
        <div>
          <span className="footer-label">NAVIGATE</span>

          <p>
            <Link to="/about" onClick={scrollTop}>
              About
            </Link>

            <br />

            <Link to="/capabilities" onClick={scrollTop}>
              Capabilities
            </Link>

            <br />

            <Link to="/solar-epc" onClick={scrollTop}>
              Solar EPC
            </Link>

            <br />

            <Link to="/execution" onClick={scrollTop}>
              Execution
            </Link>

            <br />

            <Link to="/projects" onClick={scrollTop}>
              Projects
            </Link>

            <br />

            <Link to="/leadership" onClick={scrollTop}>
              Leadership
            </Link>

            <br />

            <Link to="/contact" onClick={scrollTop}>
              Contact
            </Link>
          </p>
        </div>

      </div>

      <div className="container copyright">
        © {new Date().getFullYear()} Renewable Rise Energy Venture.
        Website concept based on the supplied project capability document.
      </div>
    </footer>
  );
}

export default Footer;