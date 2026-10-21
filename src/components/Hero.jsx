/**
 * Hero Component
 *
 * Responsibilities:
 * - Displays the above-the-fold hero section
 * - Two-column layout: text content (left) + hero image (right)
 * - Eyebrow label, main headline, description, two CTAs
 * - Hero image loaded from public/assets/images/hero-visual.webp
 * - Fade-in-up animation applied via CSS keyframes
 * - Stacks vertically on mobile via responsive CSS
 */
export default function Hero() {
  function handleScroll(e, href) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section className="hero section" id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero__inner">

          {/* ── Left: Text Content ── */}
          <div className="hero__content">
            <div className="hero__eyebrow" aria-hidden="true">
              <span className="hero__eyebrow-dot" />
              Digital Solutions
            </div>

            <h1 className="hero__title" id="hero-heading">
              We Build Digital{' '}
              <span className="hero__title-accent">Experiences</span>{' '}
              That Drive Real Growth
            </h1>

            <p className="hero__description">
              We help businesses transform ideas into powerful digital products
              through strategy, design, and technology.
            </p>

            <div className="hero__actions">
              <a
                href="#contact"
                className="btn btn--primary"
                onClick={(e) => handleScroll(e, '#contact')}
              >
                Start a Project →
              </a>
              <a
                href="#services"
                className="btn btn--secondary"
                onClick={(e) => handleScroll(e, '#services')}
              >
                Explore Services →
              </a>
            </div>

            <div className="hero__scroll-hint" aria-hidden="true">
              <span className="hero__scroll-line" />
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* ── Right: Hero Image ── */}
          <div className="hero__image-wrap">
            <div className="hero__image-frame">
              <img
                src="/assets/images/hero-visual.webp"
                alt="Abstract digital technology visualization representing Prodesk IT's approach to strategy, design, and development"
                className="hero__image"
                width="720"
                height="540"
                fetchpriority="high"
                decoding="sync"
              />

              {/* Floating badge overlay */}
              <div className="hero__image-badge">
                <div className="hero__image-badge-icon" aria-hidden="true">✦</div>
                <div className="hero__image-badge-text">
                  <strong>Digital-first solutions</strong>
                  <span>Strategy · Design · Development</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
