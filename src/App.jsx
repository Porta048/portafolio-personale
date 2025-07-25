import React from 'react';
import './style.css';
import Hero from './components/Hero.jsx';
import Story from './components/Story.jsx';
import Socials from './components/Socials.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <Story />
        <Socials />
        <Projects />
      </div>
    </>
  );
} 