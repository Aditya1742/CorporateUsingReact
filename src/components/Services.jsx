/**
 * Services Component
 *
 * Responsibilities:
 * - Renders the Services section with a heading and three service cards
 * - Each card has an icon, number, title, description, and a learn-more link
 * - Three-column desktop grid, responsive to 2-col on tablet, 1-col on mobile
 * - Hover and focus states handled by CSS
 */

const SERVICES = [
  {
    id: 'service-strategy',
    num: '01',
    icon: '◎',
    title: 'Digital Strategy',
    description:
      'We craft data-driven digital strategies that align technology investments with your business goals. From market positioning to digital transformation roadmaps, we help you navigate complexity with clarity.',
    link: '#contact',
  },
  {
    id: 'service-webdev',
    num: '02',
    icon: '⬡',
    title: 'Web Development',
    description:
      'We build fast, scalable, and accessible web applications using modern technologies. From marketing sites to complex web platforms, every line of code is crafted for performance and maintainability.',
    link: '#contact',
  },
  {
    id: 'service-design',
    num: '03',
    icon: '◈',
    title: 'UI/UX Design',
    description:
      'We design intuitive digital experiences that delight users and drive measurable results. Our design process is grounded in research, business strategy, and meticulous attention to detail.',
    link: '#contact',
  },
];

export default function Services() {
  function handleScroll(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">

        {/* Section header */}
        <div className="services__header">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-heading" id="services-heading">
            Services Built for<br />Modern Businesses
          </h2>
          <p className="section-subheading services__intro">
            We combine strategy, creativity, and engineering to deliver complete
            digital solutions — from concept through to launch and beyond.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="services__grid" role="list">
          {SERVICES.map((service) => (
            <article
              className="service-card"
              key={service.id}
              id={service.id}
              role="listitem"
            >
              {/* Card top: number + icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="service-card__num" aria-hidden="true">
                  {service.num}
                </span>
                <div className="service-card__icon" aria-hidden="true">
                  {service.icon}
                </div>
              </div>

              <h3 className="service-card__title">{service.title}</h3>

              <p className="service-card__description">{service.description}</p>

              <a
                href={service.link}
                className="service-card__link"
                onClick={(e) => handleScroll(e, service.link)}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
