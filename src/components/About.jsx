/**
 * About Component
 *
 * Responsibilities:
 * - Renders the About section with company introduction and stats
 * - Two-column layout: text + stats grid on desktop, stacked on mobile
 * - Four statistics displayed in a 2×2 grid
 * - "Learn More" CTA that scrolls to contact
 *
 * NOTE: Statistics are illustrative. Replace with real verified figures.
 */

const ABOUT_STATS = [
  { number: '150+', label: 'Projects Completed', id: 'about-stat-projects' },
  { number: '98%',  label: 'Client Satisfaction', id: 'about-stat-satisfaction' },
  { number: '5+',   label: 'Years in Business', id: 'about-stat-years' },
  { number: '20+',  label: 'Industries Served', id: 'about-stat-industries' },
];

export default function About() {
  function handleScroll(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="about section" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about__inner">

          {/* ── Left: Text Content ── */}
          <div className="about__content">
            <span className="eyebrow">Who We Are</span>

            <h2 className="about__title" id="about-heading">
              We're More Than Just Another Digital Agency
            </h2>

            <p className="about__description">
              At Prodesk IT, we sit at the intersection of strategy, design, and
              engineering. We don't just build websites — we solve business
              problems through thoughtful digital products that create real,
              measurable impact for our clients.
            </p>

            <p className="about__description" style={{ marginBottom: 'var(--space-10)' }}>
              From startups launching their first product to established companies
              undergoing digital transformation, we bring the same level of care,
              precision, and strategic thinking to every engagement.
            </p>

            <a
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              Learn More About Us →
            </a>
          </div>

          {/* ── Right: Stats Grid ── */}
          <div>
            <dl className="about__stats">
              {ABOUT_STATS.map((stat) => (
                <div className="about__stat" key={stat.id} id={stat.id}>
                  <dt className="about__stat-number">
                    {stat.number}
                  </dt>
                  <dd className="about__stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
