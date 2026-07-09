import React from 'react';
import cultsData from '../data/cultsData';
import useScrollReveal from '../hooks/useScrollReveal';

function CultEntry({ cult, index }) {
  const ref = useScrollReveal();
  return (
    <div className="cult-entry reveal" ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="cult-entry-left">
        <div className="cult-entry-header">
          <div>
            <h2 className="cult-entry-name">{cult.name}</h2>
          </div>
        </div>
        <div className="cult-entry-lore">
          {cult.lore.map((para, i) => (
            <p key={i} className="cult-lore-para">{para}</p>
          ))}
        </div>
      </div>
      <aside className="cult-entry-sidebar">
        <div className="cult-entry-image-wrap">
          {cult.image
            ? <img src={cult.image} alt={cult.name} className="cult-entry-image" />
            : <div className="cult-entry-image-placeholder">{cult.symbol}</div>
          }
        </div>
        {cult.imageCredits && (
          <p className="cult-entry-credits">{cult.imageCredits}</p>
        )}
      </aside>
    </div>
  );
}

function Cults() {
  const titleRef = useScrollReveal();
  return (
    <section className="page-section">
      <h1 className="section-title reveal" ref={titleRef}>Meet the Cults</h1>
      <div className="cults-list">
        {cultsData.map((cult, i) => (
          <CultEntry key={cult.id} cult={cult} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Cults;
