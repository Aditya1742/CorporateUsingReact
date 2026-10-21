/**
 * Contact Component
 *
 * Responsibilities:
 * - Renders a prominent contact CTA section
 * - Left: headline, description, CTA buttons
 * - Right: contact info items (email, location, hours)
 * - No fake form submissions — CTAs link to mailto or scroll to section
 */

const CONTACT_INFO = [
  {
    id: 'contact-email',
    icon: '✉',
    label: 'Email Us',
    value: 'hello@prodeskIT.com',
  },
  {
    id: 'contact-location',
    icon: '◎',
    label: 'Based In',
    value: 'India — Available Globally',
  },
  {
    id: 'contact-hours',
    icon: '◷',
    label: 'Working Hours',
    value: 'Mon – Fri, 9am – 6pm IST',
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">

          {/* ── Left: CTA content ── */}
          <div className="contact__content">
            <span className="eyebrow">Let's Work Together</span>

            <h2 className="contact__title" id="contact-heading">
              Ready to Start Your Next Digital Project?
            </h2>

            <p className="contact__description">
              Whether you have a clear brief or just a spark of an idea, we'd
              love to hear from you. Let's find out how we can help you grow.
            </p>

            <div className="contact__actions">
              {/* 
                Real contact destination — uses mailto.
                Replace with an actual form service (e.g. Formspree) before launch.
              */}
              <a
                href="mailto:hello@prodeskIT.com"
                className="btn btn--primary"
              >
                Let's Talk →
              </a>
              <a
                href="tel:+910000000000"
                className="btn btn--secondary"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* ── Right: Contact Info ── */}
          <div className="contact__info" role="list">
            {CONTACT_INFO.map((item) => (
              <div
                className="contact__info-item"
                key={item.id}
                id={item.id}
                role="listitem"
              >
                <div className="contact__info-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <p className="contact__info-label">{item.label}</p>
                  <p className="contact__info-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
