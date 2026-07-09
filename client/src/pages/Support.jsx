import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function Support() {
  const kickstarterRef = useScrollReveal();

  return (
    <section className="page-section">
      <div ref={kickstarterRef} className="support-section reveal-scale">
        <div className="kickstarter-banner">
          <h2>Kickstarter Campaign</h2>
          <div className="badge-coming-soon">Coming Soon</div>
        </div>
      </div>

      <div className="support-section">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          color: 'var(--color-gold)',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          Find Us at Conventions
        </h2>
        <p className="section-subtitle">Announcements coming soon!</p>
      </div>

      <div className="divider" style={{ margin: '2rem auto' }}>
        <span className="divider-line"></span>
        <span className="divider-symbol">&#9681;</span>
        <span className="divider-line"></span>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          color: 'var(--color-gold)',
          fontSize: '1.3rem',
          marginBottom: '1rem',
        }}>
          Follow Us
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'center' }}>
          <a href="https://www.instagram.com/craftycults" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-muted)', fontSize: '1rem', textDecoration: 'none' }}>
            Instagram: @craftycults
          </a>
          <a href="https://www.tiktok.com/@craftycults" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-muted)', fontSize: '1rem', textDecoration: 'none' }}>
            TikTok: @craftycults
          </a>
          <a href="https://x.com/craftycults" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-muted)', fontSize: '1rem', textDecoration: 'none' }}>
            X: @craftycults
          </a>
          <a href="mailto:craftycultsbusiness@gmail.com"
            style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-muted)', fontSize: '1rem', textDecoration: 'none' }}>
            Email: craftycultsbusiness@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Support;
