/**
 * Stats Component
 *
 * Responsibilities:
 * - Renders a horizontal strip of four company statistics
 * - Each statistic has a number (with accent suffix) and a label
 * - Responsive: 4-column on desktop, 2-column on tablet, 1-column on mobile
 *
 * NOTE: These figures are illustrative placeholders.
 * Replace with verified company information before publishing.
 */

// Each stat has: a number, an optional suffix (+, %, etc.), and a label
const STATS = [
  { number: '150', suffix: '+', label: 'Projects Delivered' },
  { number: '80',  suffix: '+', label: 'Clients Served' },
  { number: '5',   suffix: '+', label: 'Years Experience' },
  { number: '20',  suffix: '+', label: 'Industries Covered' },
];

export default function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-label">
      <div className="container">

        {/* Section label row */}
        <div className="stats__label-row">
          <p className="stats__label" id="stats-label">
            Trusted by forward-thinking teams
          </p>
        </div>

        {/* Stats grid — uses .map() for clean, DRY rendering */}
        <dl className="stats__grid">
          {STATS.map((stat) => (
            <div className="stats__item" key={stat.label}>
              {/* dt = the "term" (the number), dd = the "description" (the label) */}
              <dt className="stats__number">
                {stat.number}
                <span className="stats__suffix" aria-hidden="true">
                  {stat.suffix}
                </span>
                {/* Screen reader gets the full text naturally */}
              </dt>
              <dd className="stats__stat-label">{stat.label}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
