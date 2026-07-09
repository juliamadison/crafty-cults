import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/how-to-play">How to Play</Link>
        <Link to="/team">Team</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/support">Support</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Crafty Cults by Blobfishy Games</p>
    </footer>
  );
}

export default Footer;
