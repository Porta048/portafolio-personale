import React from 'react';
import './Socials.css';

const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', alt: 'Java' },
];

export default function Socials() {
  return (
    <div className="socials-section">
      <div className="socials-track">
        {techLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className="tech-logo"
          />
        ))}
      </div>
    </div>
  );
} 