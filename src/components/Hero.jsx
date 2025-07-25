import React, { useState, useEffect } from 'react';
import Aurora from './Aurora';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%' }}>
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="hero-content-row">
        <img src="/io.png" alt="La mia foto" className="hero-img-square" />
        <h1 className="hero-greeting">Hi, I'm Alessandro di Martino</h1>
      </div>
    </section>
  );
} 