import React, { useState } from "react";

// Enquiries are delivered by FormSubmit (no backend needed). The very first
// submission sends an activation email to this inbox — confirm it once.
const COMPANY_EMAIL = "asim@rrev.in";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${COMPANY_EMAIL}`;

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

function Req() {
  return (
    <span className="req" aria-hidden="true">
      *
    </span>
  );
}

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [sentName, setSentName] = useState("");

  const update = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot: bots fill hidden fields, people don't
    if (e.target.elements._honey?.value) return;

    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New RREV enquiry — ${form.projectType} — ${form.name}`,
          _template: "table",
          _captcha: "false",
          _replyto: form.email,
          Name: form.name.trim(),
          Company: form.company.trim(),
          Email: form.email.trim(),
          Phone: form.phone.trim(),
          "Project Type": form.projectType,
          Message: form.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) === "false") {
        throw new Error(data.message || "Request failed");
      }

      setSentName(form.name.trim().split(/\s+/)[0]);
      setForm(emptyForm);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="inner-hero contact-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            LET'S BUILD WHAT'S NEXT
          </div>

          <h1>
            Have an opportunity in mind?
            <span> Let's talk.</span>
          </h1>

          <p>
            Tell us about your renewable energy, bioenergy, CBG or
            infrastructure project and start a conversation with RREV.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">
              <i></i>
              GET IN TOUCH
            </div>

            <h2>
              Let's explore the
              <span> opportunity.</span>
            </h2>

            <p>
              Whether you are exploring a new CBG project, evaluating
              feedstock, planning infrastructure or looking for project
              execution support, we would be happy to understand your
              requirements.
            </p>

            <div className="contact-points">
              <div>
                <span>01</span>
                <div>
                  <small>FOCUS</small>
                  <strong>Renewable Energy & Bioenergy</strong>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <small>PROJECT</small>
                  <strong>CBG & Sustainable Infrastructure</strong>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <small>APPROACH</small>
                  <strong>Concept to Operations</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status !== "success" ? (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                aria-busy={status === "sending"}
              >
                <p className="form-note">
                  All fields are required <Req />
                </p>

                {/* Honeypot field — hidden from people, catches spam bots */}
                <input
                  type="text"
                  name="_honey"
                  className="form-honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="form-row">
                  <label>
                    <span>
                      Name <Req />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Your name"
                      autoComplete="name"
                      minLength={2}
                      required
                    />
                  </label>

                  <label>
                    <span>
                      Company <Req />
                    </span>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={update}
                      placeholder="Company name"
                      autoComplete="organization"
                      required
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    <span>
                      Email <Req />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label>
                    <span>
                      Phone <Req />
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      pattern="\+?[\d\s\(\)\-]{10,18}"
                      title="Enter a valid phone number (at least 10 digits)"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>
                    Project Type <Req />
                  </span>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={update}
                    required
                  >
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option>CBG / Biogas</option>
                    <option>Solar EPC</option>
                    <option>Hybrid Solar + Biogas</option>
                    <option>Renewable Energy</option>
                    <option>Infrastructure</option>
                    <option>Project Execution</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  <span>
                    Tell us about your project <Req />
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows="6"
                    placeholder="Briefly describe your requirement..."
                    minLength={10}
                    required
                  ></textarea>
                </label>

                {status === "error" && (
                  <p className="form-error" role="alert">
                    We couldn't send your enquiry just now. Please try again,
                    or write to us directly at{" "}
                    <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      Sending… <i className="btn-spinner" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Send Enquiry <span>↗</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="form-success" role="status" aria-live="polite">
                <div className="success-icon">✓</div>

                <div className="eyebrow">
                  <i></i>
                  ENQUIRY SUBMITTED
                </div>

                <h3>
                  Thank you{sentName ? `, ${sentName}` : ""}!
                  <span> Your form has been submitted successfully.</span>
                </h3>

                <p>
                  Your enquiry is now with the Renewable Rise Energy Venture
                  team. We'll review your requirement and get back to you
                  within 1–2 business days with the next steps.
                </p>

                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Enquiry <span>↗</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section contact-bottom">
        <div className="container">
          <div className="contact-bottom-inner">
            <span>RREV</span>

            <div>
              <div className="eyebrow light">
                <i></i>
                RENEWABLE RISE ENERGY VENTURE
              </div>

              <h2>
                Clean energy.
                <span> Practical execution.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;