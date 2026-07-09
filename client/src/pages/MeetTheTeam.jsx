import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import mattImg from '../assets/teampics/matt_chibi.png';
import tatiImg from '../assets/teampics/tati_chibi.png';
import isaImg from '../assets/teampics/isa_chibi.png';
import mimiImg from '../assets/teampics/mimi_chibi.png';
import amandaImg from '../assets/teampics/amanda_chibi.png';
import chloeImg from '../assets/teampics/chloe_chibi_transparent.png';
import emilyImg from '../assets/teampics/emily_chibi.png';
import juliaImg from '../assets/teampics/julia_chibi.png';

const teamMembers = [
  {
    name: 'Matthew Berlin',
    role: 'Project Director and Game Designer',
    bio: `Hello, I am Matthew Berlin and I am the Lead Director and Designer of Crafty Cults! This started as a senior thesis project for my Digital Game Design degree. However it feels like it has become so much more, after all the work my amazing artist friends and I put in. And it feels great to show it off. The Crafty Cults game has evolved a lot. Starting as a TCG game where you are one of the 7 deadly sins, and gradually evolved into the game we have now! Thank you and we hope you enjoy all the details that went into creating Crafty Cults.`,
    image: mattImg,
    socials: [
      { label: 'Personal Email', href: 'mailto:mattberlin29@gmail.com', text: 'mattberlin29@gmail.com' },
      { label: 'Crafty Cults Email', href: 'mailto:craftycultssocial@gmail.com', text: 'craftycultssocial@gmail.com' },
      { label: 'Itch.io', href: 'https://awesomepogpog.itch.io/', text: 'awesomepogpog.itch.io' },
    ],
  },
  {
    name: 'Tatiana Leon',
    role: 'Art Director',
    bio: `"It was an honor to work on Crafty Cults, alongside a team of driven creatives. I've never done something like this before but I'm glad these were the people I was able to experience it with! I can't wait to see what else we can accomplish together! :)!"`,
    image: tatiImg,
    socials: [],
  },
  {
    name: 'Isabelle Samudio',
    role: 'Artist',
    bio: `"This was such a fun project to be a part of! It gave me the opportunity to relearn how to do digital art and just to have fun with art again. Thank you for having me!!"`,
    image: isaImg,
    socials: [],
  },
  {
    name: 'Naomi Lynn',
    role: 'Artist',
    bio: `"It was an honor to work on Crafty Cults, alongside a team of driven creatives. I've never done something like this before but I'm glad these were the people I was able to experience it with! I can't wait to see what else we can accomplish together! :)!"`,
    image: mimiImg,
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/poodlewools', text: '@poodlewools' },
      { label: 'Twitter', href: 'https://twitter.com/poodlewools', text: '@poodlewools' },
    ],
  },
  {
    name: 'Amanda Voskinarian',
    role: 'Card UI Artist and 3D Artist',
    bio: `Amanda created the card UI, the background of the cards, the front of the cards, the back of the cards, and 3D modeled the candle for the turn tracker.`,
    image: amandaImg,
    socials: [],
  },
  {
    name: 'Chloe Lansing',
    role: 'Artist',
    bio: `"It was a pleasure to help Matt and his closest friends on this project. For me, it was more of a challenge to see how far I could go with my skills. I hadn't created art in forever and this sounded like such a fun project to push myself to get back into it — and it was! Matt did a wonderful job directing the team and it allowed me to create pieces that I am happy to call a part of Crafty Cults. :] xx"`,
    image: chloeImg,
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/pweeeels', text: '@pweeeels' },
    ],
  },
  {
    name: 'Emily Kapsalis',
    role: 'Artist and Designer',
    bio: `"It was really fun working with everyone and seeing the art and concepts coming to life! Despite the limitations in art software, it was exciting to see how even in Microsoft Paint I could contribute to the game, and goes to show that you can do anything as long as you keep practicing."`,
    image: emilyImg,
    socials: [
      { label: 'Email', href: 'mailto:emilykap005@gmail.com', text: 'emilykap005@gmail.com' },
      { label: 'Itch.io', href: 'https://snowy-dragoon.itch.io/', text: 'snowy-dragoon.itch.io' },
    ],
  },
  {
    name: 'Julia Desimone',
    role: 'Game Piece Producer, Website Developer, Emotional Support',
    bio: `"i made this website👍🏻"`,
    image: juliaImg,
    socials: [],
  },
];

function MeetTheTeam() {
  const gridRef = useScrollReveal();

  return (
    <section className="page-section">
      <h1 className="section-title">The Team</h1>
      <p className="section-subtitle">Meet the artists and designers behind Crafty Cults!</p>

      <div ref={gridRef} className="team-grid stagger-children reveal">
        {teamMembers.map((member, index) => (
          <div className="card team-card" key={index}>
            <div className="team-photo">
              <img src={member.image} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
            {member.socials.length > 0 && (
              <div className="social-links">
                {member.socials.map((s, i) => (
                  <a key={i} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <span className="social-label">{s.label}:</span> {s.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;
