import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

import crazedFollower from '../assets/gallery/cc june 8th 2026 - goo - crazed follower.jpg';
import masterSchemer from '../assets/gallery/cc june 8th 2026 - pyramid - master schemer.jpg';
import investor from '../assets/gallery/cc june 8th 2026 - pyramid - investor.jpg';
import forestSpirits from '../assets/gallery/cc june 8th 2026 - flower -  forest spirits.jpg';
import cardbackCivilian from '../assets/gallery/cc june 8th 2026 - cardback - civilian.jpg';
import cardbackRegular from '../assets/gallery/cc june 8th 2026 - cardback - regular.jpg';
import recruiter from '../assets/gallery/cc june 8th 2026 - goo - recruiter.jpg';
import forestGuardian from '../assets/gallery/cc june 8th 2026 - flower -  forest guardian.jpg';
import inquisitor from '../assets/gallery/cc june 8th 2026 - goo - inquisitor.jpg';
import corruptedVessel from '../assets/gallery/cc june 8th 2026 - eyes - corrupted vessel.jpg';
import creatureOfMadness from '../assets/gallery/cc june 8th 2026 - eyes - creature of madness.jpg';
import cruelExperiment from '../assets/gallery/cc june 8th 2026 - flower -  cruel experiment.jpg';
import securityGuard from '../assets/gallery/cc june 8th 2026 - pyramid - security guard.jpg';
import civilianB from '../assets/gallery/cc june 8th 2026 - civilian - B.jpg';
import divineGift from '../assets/gallery/cc june 8th 2026 - flower -  divine gift.jpg';

const galleryItems = [
  { title: 'Creature of Madness',  artist: 'Emily Kapsalis',    image: creatureOfMadness },
  { title: 'Crazed Follower',      artist: 'Tatiana Leon',     image: crazedFollower },
  { title: 'Corrupted Vessel',     artist: 'Chloe Lansing',    image: corruptedVessel },
  { title: 'Forest Guardian',      artist: 'Tatiana Leon',  image: forestGuardian },
  { title: 'Forest Spirits',       artist: 'Naomi Lynn',  image: forestSpirits },
  { title: 'Recruiter',            artist: 'Tatiana Leon',     image: recruiter },
  { title: 'Inquisitor',           artist: 'Isabelle Samudio',     image: inquisitor },
  { title: 'Divine Gift',          artist: 'Amanda Voskinarian',  image: divineGift },
  { title: 'Cruel Experiment',     artist: 'Emily Kapsalis',  image: cruelExperiment },
  { title: 'Investor',             artist: 'Chloe Lansing', image: investor },
  { title: 'Security Guard',       artist: 'Tatiana Leon', image: securityGuard },
  { title: 'Civilian',             artist: 'Chloe Lansing',     image: civilianB },
];

function Gallery() {
  const gridRef = useScrollReveal();

  return (
    <section className="page-section">
      <h1 className="section-title">Game Art Gallery</h1>

      <div ref={gridRef} className="gallery-card-grid stagger-children reveal">
        {galleryItems.map((item, index) => (
          <div className="gallery-card-item" key={index}>
            <div className="gallery-card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="gallery-card-info">
              <h3>{item.title}</h3>
              <p className="artist">Artwork by {item.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
