/**
 * Footer Component
 *
 * Responsibilities:
 * - Site footer with brand, tagline, navigation columns, and copyright
 * - Social links are placeholder — only add real URLs before publishing
 * - Works correctly in both light and dark themes
 * - Responsive: 4-column on desktop, 2-col on tablet, 1-col on mobile
 */

const FOOTER_NAV = [
  {
    heading: 'Company',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Digital Strategy', href: '#services' },
      { label: 'Web Development', href: '#services' },
      { label: 'UI/UX Design', href: '#services' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

// Only include social links when real URLs are available.
// These are placeholder hrefs — remove or replace before publishing.
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Twitter / X', href: '#', icon: '𝕏' },
  { label: 'GitHub', href: '#', icon: '⌥' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleScroll(e, href) {
    if (!href.startsWith('#') || href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">

        {/* ── Footer Grid ── */}
        <div className="footer__inner">

          {/* Brand Column */}
          <div className="footer__brand">
            <a
              href="#home"
              className="footer__brand-logo"
              aria-label="Prodesk IT — Back to top"
              onClick={(e) => handleScroll(e, '#home')}
            >
              <div className="footer__logo-mark" aria-hidden="true">P</div>
              <span className="footer__wordmark">
                Prodesk <span>IT</span>
              </span>
            </a>

            <p className="footer__tagline">
              A digital solutions company helping businesses transform ideas
              into powerful products through strategy, design, and technology.
            </p>

            {/* Social Links — only shown; replace with real URLs before launch */}
            <nav className="footer__social" aria-label="Social media links">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer__social-link"
                  aria-label={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true">{link.icon}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Navigation Columns */}
          {FOOTER_NAV.map((col) => (
            <nav key={col.heading} className="footer__col" aria-label={col.heading}>
              <h3 className="footer__col-heading">{col.heading}</h3>
              <ul className="footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer__link"
                      onClick={(e) => handleScroll(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        </div>

        {/* ── Footer Bottom ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Prodesk IT. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Privacy</a>
            <a href="#" className="footer__bottom-link">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
