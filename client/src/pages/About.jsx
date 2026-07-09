import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  const contentRef = useScrollReveal();
  const featuresRef = useScrollReveal();

  return (
    <section className="page-section">
      <h1 className="section-title">About Crafty Cults</h1>

      <div ref={contentRef} className="about-content reveal">
        <p>
          Crafty Cults is the brainchild of Matthew Berlin- a Long Island University graduate in Game Design and Development and passionate fan of board games. They spent their senior year working on their thesis project, creating the first version of Crafty Cults. With a team of talented artists, designers, and playtesters, he debuted the game at LIU’s Student Game Showcase (INSERT YEAR HERE) and won the award for best visuals. Matt and the team continue to work on Crafty Cults, shaping it into the game it is today.
        <p>
        </p>
          In this casual strategy game, players can enjoy roleplaying as deceptive cult leaders with the goal of controlling the world to become the biggest cult before anyone else. By hijacking preestablished cults and recruiting their members, players can grow their cult with powerful spells, rituals, and attacks. 
        </p>
      </div>

      <div ref={featuresRef} className="about-features stagger-children reveal">
        <div className="card feature-card">
          <h3>2-4 Players</h3>
          <p>Face off in 1v1 cult battles or a free-for-all brawl</p>
        </div>
        <div className="card feature-card">
          <h3>30-40 Minutes</h3>
          <p>Challenge your friends in rapid duels with quick setup</p>
        </div>
        <div className="card feature-card">
          <h3>Ages 13+</h3>
          <p>Easy and exciting gameplay for most aspiring cult leaders</p>
        </div>
      </div>
    </section>
  );
}

export default About;
