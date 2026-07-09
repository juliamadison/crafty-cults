import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

const cultData = {
  'cult-1': {
    name: 'Cult 1',
    tagline: 'Placeholder tagline for Cult 1',
    symbol: '✦',
    lore: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    ],
  },
  'cult-2': {
    name: 'Cult 2',
    tagline: 'Placeholder tagline for Cult 2',
    symbol: '◈',
    lore: [
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.',
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
    ],
  },
  'cult-3': {
    name: 'Cult 3',
    tagline: 'Placeholder tagline for Cult 3',
    symbol: '⬡',
    lore: [
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.',
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    ],
  },
  'cult-4': {
    name: 'Cult 4',
    tagline: 'Placeholder tagline for Cult 4',
    symbol: '⧖',
    lore: [
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit.',
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur vel illum dolorem eum fugiat quo voluptas nulla pariatur.',
    ],
  },
};

const cultOrder = ['cult-1', 'cult-2', 'cult-3', 'cult-4'];

function CultPage() {
  const { cultId } = useParams();
  const cult = cultData[cultId];

  const titleRef = useScrollReveal();
  const loreRef = useScrollReveal();
  const traitsRef = useScrollReveal();
  const navRef = useScrollReveal();

  if (!cult) {
    return (
      <section className="page-section">
        <h1 className="section-title">Cult Not Found</h1>
        <p style={{ textAlign: 'center' }}>
          <Link to="/cults/cult-1">Return to the cults</Link>
        </p>
      </section>
    );
  }

  const currentIndex = cultOrder.indexOf(cultId);
  const prevCult = currentIndex > 0 ? cultOrder[currentIndex - 1] : null;
  const nextCult = currentIndex < cultOrder.length - 1 ? cultOrder[currentIndex + 1] : null;

  return (
    <>
      <div className="cult-hero">
        <div className="cult-hero-symbol">{cult.symbol}</div>
        <h1 className="cult-hero-title" ref={titleRef} style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.7s, transform 0.7s' }}>
          {cult.name}
        </h1>
        <p className="cult-hero-tagline">{cult.tagline}</p>
      </div>

      <section className="page-section">
        <div className="cult-layout">
          <div className="cult-lore reveal" ref={loreRef}>
            <h2 className="cult-section-heading">Lore</h2>
            <div className="divider"><span className="divider-line" /><span className="divider-symbol">{cult.symbol}</span><span className="divider-line" /></div>
            {cult.lore.map((para, i) => (
              <p key={i} className="cult-lore-para">{para}</p>
            ))}
          </div>

          <aside className="cult-traits reveal" ref={traitsRef}>
            <h3 className="cult-traits-heading"></h3>
            <ul className="cult-traits-list">
              {cult.traits.map(({ label, value }) => (
                <li key={label} className="cult-trait-item">
                  <span className="cult-trait-label">{label}</span>
                  <span className="cult-trait-value">{value}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <nav className="cult-page-nav reveal" ref={navRef}>
          {prevCult ? (
            <Link to={`/cults/${prevCult}`} className="cult-nav-link cult-nav-prev">
              ← {cultData[prevCult].name}
            </Link>
          ) : <span />}
          <Link to="/about" className="cult-nav-back">All Cults</Link>
          {nextCult ? (
            <Link to={`/cults/${nextCult}`} className="cult-nav-link cult-nav-next">
              {cultData[nextCult].name} →
            </Link>
          ) : <span />}
        </nav>
      </section>
    </>
  );
}

export default CultPage;
