import React from "react";
import { Link } from "react-router-dom";

const stages = [
  {
    no: "01",
    title: "Concept",
    text: "Understanding the opportunity, resource base, project objectives and overall feasibility.",
  },
  {
    no: "02",
    title: "Engineering",
    text: "Developing the technical framework, systems, layouts and engineering requirements.",
  },
  {
    no: "03",
    title: "Procurement",
    text: "Coordinating equipment, vendors, materials and project requirements with a focus on quality.",
  },
  {
    no: "04",
    title: "Construction",
    text: "Managing site execution, civil works, installation, safety and schedule coordination.",
  },
  {
    no: "05",
    title: "Commissioning",
    text: "Bringing systems online through testing, integration, performance checks and controlled start-up.",
  },
  {
    no: "06",
    title: "Operations",
    text: "Supporting reliable plant performance with operational discipline and continuous improvement.",
  },
];

function Execution() {
  return (
    <>
      {/* HERO */}
      <section className="inner-hero execution-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            HOW WE EXECUTE
          </div>

          <h1>
            From first concept to
            <span> long-term operations.</span>
          </h1>

          <p>
            A disciplined execution approach helps convert clean-energy
            opportunities into reliable, commercially viable infrastructure.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container execution-intro">
          <div>
            <div className="eyebrow">
              <i></i>
              EXECUTION PHILOSOPHY
            </div>

            <h2>
              Projects succeed when
              <span> details connect.</span>
            </h2>
          </div>

          <p>
            Our execution model is designed around coordination. Technical
            decisions, procurement, site work, quality, safety, commissioning
            and operations all need to work together. We keep the entire
            project lifecycle in view from the beginning.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section soft-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i></i>
                PROJECT LIFECYCLE
              </div>

              <h2>
                Six stages.
                <span> One connected process.</span>
              </h2>
            </div>

            <p>
              A structured pathway designed to maintain clarity, accountability
              and execution quality throughout the project.
            </p>
          </div>

          <div className="execution-timeline">
            {stages.map((stage) => (
              <div className="execution-stage" key={stage.no}>
                <div className="execution-stage-top">
                  <span>{stage.no}</span>
                  <div></div>
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">
            <i></i>
            EXECUTION PRINCIPLES
          </div>

          <div className="principles-grid">
            <div>
              <span>01</span>
              <h3>Safety first</h3>
              <p>
                Safety and responsible site practices remain fundamental to
                project delivery.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Quality focused</h3>
              <p>
                Engineering and construction decisions are made with
                reliability and long-term performance in mind.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Schedule discipline</h3>
              <p>
                Clear sequencing and coordination help maintain momentum from
                planning through commissioning.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Operational thinking</h3>
              <p>
                We consider how the plant will perform long after construction
                has been completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              PROJECT DEVELOPMENT
            </div>

            <h2>
              Ready to move from idea
              <span> to execution?</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-lime">
            Discuss Your Project <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Execution;