import React from 'react';
import './Story.css';
import NeuralNetworkBackground from './NeuralNetworkBackground';

export default function Story() {
  return (
    <section className="story-section" style={{position: 'relative', overflow: 'hidden'}}>
      <NeuralNetworkBackground />
      <div className="story-box">
        <h2>My Story</h2>
        <p>
          My name is Alessandro, I am a 20-year-old passionate about technology and innovation. Over the past few years, I have dedicated myself to studying and deepening my knowledge in the field of Artificial Intelligence and Machine Learning, obtaining several certifications that attest to my skills in these areas. In addition, I have completed certifications in Full Stack Development, which have allowed me to acquire a solid foundation in both frontend and backend technologies, as well as in the design and implementation of complete web applications.
        </p>
        <p>
          I graduated with a diploma in Computer Science, which provided me with a strong theoretical and practical background in programming, algorithms, and software engineering. My journey is driven by curiosity and the desire to always learn something new, with the goal of contributing to innovative projects and making a difference in the tech world. I am constantly looking for new challenges and opportunities to grow, both professionally and personally.
        </p>
        <p>
          Starting from January 2025, I have the exciting opportunity to work as a Software Developer for Tok tech TD, an innovative English company. This role allows me to apply my technical skills in a professional environment while continuing to expand my knowledge and contribute to cutting-edge projects in the technology sector.
        </p>
      </div>
    </section>
  );
} 