import { useState, useEffect } from 'react';

/**
 * Navbar Component
 *
 * Responsibilities:
 * - Renders the site navigation with branding, links, theme toggle
 * - Manages mobile hamburger menu open/close state (useState)
 * - Closes mobile menu on link click or viewport resize
 * - Reads/saves dark mode preference to localStorage (useEffect)
 * - Adds a scrolled class for a subtle nav shadow on scroll (useEffect)
 * - Updates aria-expanded for accessibility
 */

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onThemeToggle }) {
  // Controls whether the mobile menu drawer is open
  const [menuOpen, setMenuOpen] = useState(false);
  // Controls the navbar shadow after scrolling
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu and scroll smoothly when a nav link is clicked
  function handleNavLinkClick(e, href) {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const isDark = theme === 'dark';

  return (
    <header
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      role="banner"
    >
      <div className="container">
        <div className="navbar__inner">

          {/* ── Brand ── */}
          <a href="#home" className="navbar__brand" aria-label="Prodesk IT — home">
            <div className="navbar__logo-mark" aria-hidden="true">P</div>
            <span className="navbar__wordmark">
              Prodesk <span>IT</span>
            </span>
          </a>

          {/* ── Desktop Navigation ── */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Actions (theme toggle + CTA) ── */}
          <div className="navbar__actions">
            <button
              className="navbar__theme-toggle"
              onClick={onThemeToggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <a
              href="#contact"
              className="navbar__cta"
              onClick={(e) => handleNavLinkClick(e, '#contact')}
            >
              Get in touch
            </a>

            {/* ── Mobile Hamburger ── */}
            <button
              className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span className="navbar__hamburger-line" aria-hidden="true" />
              <span className="navbar__hamburger-line" aria-hidden="true" />
              <span className="navbar__hamburger-line" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="navbar__mobile-nav" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleNavLinkClick(e, link.href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navbar__mobile-actions">
          <button
            className="navbar__theme-toggle"
            onClick={onThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="btn btn--primary"
            style={{ fontSize: 'var(--text-sm)' }}
            onClick={(e) => handleNavLinkClick(e, '#contact')}
            tabIndex={menuOpen ? 0 : -1}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
