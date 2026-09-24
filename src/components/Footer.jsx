import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

const services = [
  ["Bio-CNG / CBG Plants", "/capabilities"],
  ["Solar EPC", "/solar-epc"],
  ["Hybrid Solar + Biogas", "/solar-epc"],
  ["Execution & O&M", "/execution"],
];

const company = [
  ["About", "/about"],
  // ["Leadership", "/leadership"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ADDRESS = "288/12, Zakir Nagar, New Delhi - 110025";

const contact = [
  {
    label: "Office Address",
    value: ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    external: true,
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+91 98118 05922",
    href: "tel:+919811805922",
    icon: (
      <svg {...iconProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "asim@rrev.in",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=asim@rrev.in",
    external: true,
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
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
          <Link to="/" className="footer-brand" onClick={scrollTop} aria-label="RREV home">
            <img
              src="/assets/brand/rrev-logo-full.png"
              alt="Renewable Rise Energy Venture — Clean energy. Green tomorrow."
              width="600"
              height="260"
              loading="lazy"
            />
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

      {/* CONTACT DETAILS */}
      <div className="container footer-contact">
        {contact.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="footer-contact-item"
            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="footer-contact-icon" aria-hidden="true">
              {c.icon}
            </span>
            <span className="footer-contact-text">
              <small>{c.label}</small>
              <strong>{c.value}</strong>
            </span>
          </a>
        ))}
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
