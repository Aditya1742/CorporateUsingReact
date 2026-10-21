import { useState, useEffect } from 'react';
import Navbar  from './components/Navbar';
import Hero    from './components/Hero';
import Stats   from './components/Stats';
import Services from './components/Services';
import About   from './components/About';
import Work    from './components/Work';
import Contact from './components/Contact';
import Footer  from './components/Footer';

/**
 * App Component — Root of the application
 *
 * Theme Logic:
 * 1. On first load, check localStorage for a previously saved theme.
 * 2. If nothing is saved, use the OS-level prefers-color-scheme preference.
 * 3. When the user clicks the toggle, flip the theme and save to localStorage.
 * 4. Apply the active theme as a `data-theme` attribute on <html>.
 *    CSS custom properties in variables.css react to this attribute change
 *    to switch the entire colour palette instantly.
 *
 * useState: Holds the current theme string ('light' | 'dark').
 * useEffect: Runs side-effects (updating the DOM / localStorage) when theme changes.
 */

// Determine the initial theme before React renders — avoids a flash of wrong theme
function getInitialTheme() {
  // Check for a user-saved preference first
  const saved = localStorage.getItem('prodesk-theme');
  if (saved === 'dark' || saved === 'light') return saved;

  // Fall back to OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function App() {
  // useState: the theme is a piece of state because changing it must re-render
  // child components (Navbar needs to know to show the correct icon).
  const [theme, setTheme] = useState(getInitialTheme);

  // useEffect: whenever theme changes, synchronise the DOM attribute and localStorage.
  // This is a "side effect" — work that reaches outside of React's rendering.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('prodesk-theme', theme);
  }, [theme]); // The dependency array [theme] means: run this only when `theme` changes

  // Flip the theme when the user clicks the toggle button
  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      {/* Skip link — allows keyboard users to jump past the navbar */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Navbar receives theme and the toggle handler as props */}
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      {/* Main page content */}
      <main id="main-content">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
