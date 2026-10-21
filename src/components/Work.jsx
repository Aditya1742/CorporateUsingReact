/**
 * Work Component
 *
 * Responsibilities:
 * - Renders the Portfolio/Work section with three illustrative project cards
 * - Each card has a visual placeholder, category badge, title, description,
 *   a technology tag, and an arrow CTA
 * - Three-column desktop grid, two columns on tablet, one on mobile
 *
 * IMPORTANT: These are illustrative sample projects only.
 * Do not present these as completed client work until verified.
 */

const PROJECTS = [
  {
    id: 'project-ecommerce',
    title: 'E-Commerce Platform Redesign',
    category: 'Web Development',
    description:
      'A full redesign of an online retail platform focusing on improved conversion rates, faster load times, and a more intuitive checkout experience.',
    tag: 'React · Node.js',
    icon: '🛍️',
  },
  {
    id: 'project-dashboard',
    title: 'Analytics Dashboard SaaS',
    category: 'UI/UX Design',
    description:
      'A data-rich analytics dashboard designed for clarity and usability. Complex datasets transformed into actionable insights through thoughtful information architecture.',
    tag: 'Figma · React',
    icon: '📊',
  },
  {
    id: 'project-brand',
    title: 'Corporate Brand Identity',
    category: 'Digital Strategy',
    description:
      'End-to-end brand identity and digital presence for a B2B technology company — from visual identity through to a fully responsive marketing website.',
    tag: 'Strategy · Design',
    icon: '◈',
  },
];

export default function Work() {
  return (
    <section className="work section" id="work" aria-labelledby="work-heading">
      <div className="container">

        {/* Section header */}
        <div className="work__header">
          <span className="eyebrow">Sample Work</span>
          <h2 className="section-heading" id="work-heading">
            Illustrative Project Examples
          </h2>
          <p className="section-subheading">
            The following cards are illustrative examples of the type of work we
            undertake. Verified project case studies available on request.
          </p>
        </div>

        {/* Project cards */}
        <div className="work__grid" role="list">
          {PROJECTS.map((project) => (
            <article
              className="project-card"
              key={project.id}
              id={project.id}
              role="listitem"
            >
              {/* Visual placeholder */}
              <div className="project-card__visual" aria-hidden="true">
                <div className="project-card__visual-pattern" />
                <div className="project-card__visual-icon">{project.icon}</div>
                <span className="project-card__category">{project.category}</span>
              </div>

              {/* Card body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
              </div>

              {/* Card footer */}
              <div className="project-card__footer">
                <span className="project-card__tag">{project.tag}</span>
                <div
                  className="project-card__arrow"
                  aria-hidden="true"
                  title={`View ${project.title}`}
                >
                  →
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="work__cta">
          <a href="#contact" className="btn btn--secondary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Discuss your project →
          </a>
        </div>

      </div>
    </section>
  );
}
