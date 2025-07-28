import React, { useState, useEffect } from 'react';
import Aurora from './Aurora';
import './Hero.css';

export default function Hero() {
  const handleDownloadCV = () => {
    // Crea un link temporaneo per scaricare il CV
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Alessandro_Di_Martino_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <div className="hero-text-container">
          <h1 className="hero-greeting">Hi, I'm Alessandro di Martino</h1>
          <button className="download-cv-btn" onClick={handleDownloadCV}>
            <svg className="download-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
} 