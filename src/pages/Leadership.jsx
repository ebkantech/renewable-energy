import React from "react";
import { Link } from "react-router-dom";

const leaders = [
  {
    number: "01",
    name: "Mr. Mohd Asim Mirza",
    role: "Renewable Energy, Bioenergy & CBG Specialist",
    experience: "29+ years",
    tags: [
      "CBG & Biogas",
      "Policy",
      "PMU",
      "Government Coordination",
    ],
    text:
      "Experience across renewable energy, biogas, climate change, circular economy, environmental management and sustainable development.",
  },
  {
    number: "02",
    name: "Mr. M. S. Shaikhu",
    role: "Civil Engineering & Project Execution Expert",
    experience: "30+ years",
    tags: [
      "Civil Execution",
      "Site Management",
      "Quality",
      "Schedule",
    ],
    text:
      "Extensive experience in infrastructure, hydropower, renewable energy, construction management and large-scale project execution.",
  },
];

function Leadership() {
  return (
    <>
      {/* HERO */}
      <section className="inner-hero leadership-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            LEADERSHIP
          </div>

          <h1>
            Experience at the intersection of
            <span> energy and execution.</span>
          </h1>

          <p>
            RREV is supported by professionals with decades of experience
            across renewable energy, engineering, infrastructure and project
            delivery.
          </p>
        </div>
      </section>

      {/* LEADERS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i></i>
                OUR LEADERS
              </div>

              <h2>
                Knowledge that becomes
                <span> execution.</span>
              </h2>
            </div>

            <p>
              A combination of sector understanding and practical project
              experience supports RREV's approach to clean-energy development.
            </p>
          </div>

          <div className="leadership-page-grid">
            {leaders.map((leader) => (
              <article className="leader-page-card" key={leader.number}>
                <div className="leader-page-top">
                  <span>{leader.number}</span>
                  <span>{leader.experience}</span>
                </div>

                <div className="leader-initial">
                  {leader.name
                    .replace("Mr. ", "")
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word.charAt(0))
                    .join("")}
                </div>

                <h3>{leader.name}</h3>

                <strong>{leader.role}</strong>

                <div className="leader-tags">
                  {leader.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <p>{leader.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP APPROACH */}
      <section className="section soft-section">
        <div className="container leadership-message">
          <div className="leadership-message-number">RREV</div>

          <div>
            <div className="eyebrow">
              <i></i>
              LEADERSHIP APPROACH
            </div>

            <h2>
              Strategy is only valuable when
              <span> it can be executed.</span>
            </h2>

            <p>
              Our leadership philosophy combines long-term sustainability with
              practical project delivery. The objective is simple: build
              projects that make technical, commercial and operational sense.
            </p>

            <Link to="/execution" className="text-link">
              Discover our execution approach <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              CONNECT
            </div>

            <h2>
              Let's build meaningful
              <span> clean-energy projects.</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-lime">
            Start a Conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Leadership;