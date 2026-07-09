import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import homeArt from '../assets/homeart.png';
import card1 from '../assets/cards/card1.png';
import card2 from '../assets/cards/card2.png';
import card3 from '../assets/cards/card3.png';
import card4 from '../assets/cards/card4.png';

const cardImages = [card1, card2, card3, card4];

function Home() {
  const welcomeRef = useScrollReveal();
  const cardsRef = useScrollReveal();

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>

        {/* Left scrolling cards - moving down */}
        <div className="hero-card-track hero-card-track--left">
          <div className="hero-card-scroll hero-card-scroll--down">
            {[...Array(8)].map((_, i) => (
              <div className="hero-card-placeholder" key={i}>
                <img src={cardImages[i % cardImages.length]} alt={`Cultist Card ${(i % cardImages.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right scrolling cards - moving up */}
        <div className="hero-card-track hero-card-track--right">
          <div className="hero-card-scroll hero-card-scroll--up">
            {[...Array(8)].map((_, i) => (
              <div className="hero-card-placeholder" key={i}>
                <img src={cardImages[(i + 2) % cardImages.length]} alt={`Cultist Card ${((i + 2) % cardImages.length) + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <img src={homeArt} alt="Crafty Cults" className="hero-art" />
          <p className="hero-tagline">
            The Game of Brainwashing, Brutalizing, and Betrayal
          </p>
          <div className="hero-buttons">
            <Link to="/how-to-play" className="btn btn-primary">
              Learn to Play
            </Link>
            <Link to="/support" className="btn btn-outline">
              Support the Project
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-symbol">&#9681;</span>
          <span className="divider-line"></span>
        </div>

        <div ref={welcomeRef} className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2 className="section-title">welcome, cultist</h2>
          <p className="section-subtitle">
            Use your legion of followers to crush the competition and craft a manipulative cult
          </p>
        </div>

        <div ref={cardsRef} className="card-grid stagger-children reveal" style={{ marginTop: '2rem' }}>
          <div className="card">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}>
              Human-Made Monsterous Artwork
            </h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-text-muted)',
              textAlign: 'center'
            }}>
              Every card is of creepy and captivating art created by our team of artists
            </p>
          </div>
          <div className="card">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}>
              Strategic Gameplay
            </h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-text-muted)',
              textAlign: 'center'
            }}>
              Draft cards to build your own cult and take down your friends
            </p>
          </div>
          <div className="card">
            <h3 style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-gold)',
              textAlign: 'center',
              marginBottom: '0.5rem'
            }}>
              Deep Lore
            </h3>
            <p style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--color-text-muted)',
              textAlign: 'center'
            }}>
              Global cults combat for control over humanity, opening up the opportunity for you to ascend to the top- will you take it?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
