import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const steps = [
  `Separate all cards into their four cult piles and place them face-up in the center of the table.`,
  `Each player takes a board, a keyword card, and a candle. Place the candle on the starting spot.`,
  `Take turns in a circle, each picking one card from any cult pile until every player has 20 cards.`,
  `Shuffle your deck, place it face-down as your draw pile, then draw 4 cards to form your opening hand.`,
  `At the start of each turn, advance your candle to the corresponding turn marker.`,
  `Spend gold to play cultists from your hand and kidnap civilians to brainwash and convert them.`,
  `Disrupt your opponents with rituals and cultists that control, destroy, and hex their cult members.`,
  `The first player to end their turn with 5 cultists on the board wins!`,
];

function HowToPlay() {
  const ref = useScrollReveal();

  return (
    <section className="page-section">
      <h1 className="section-title">How to Play</h1>

      <div ref={ref} className="steps reveal">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <p>{step}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider" style={{ margin: '3rem auto' }}>
        <span className="divider-line"></span>
        <span className="divider-symbol">&#9681;</span>
        <span className="divider-line"></span>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          color: 'var(--color-text-muted)',
          fontSize: '1.1rem',
          fontStyle: 'italic'
        }}>
          Full rules and a downloadable PDF rulebook will be available soon!
        </p>
      </div>
    </section>
  );
}

export default HowToPlay;
