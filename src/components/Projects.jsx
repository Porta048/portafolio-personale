import React from 'react';
import './Projects.css';
import Threads from './Threads';

export default function Projects() {
  return (
    <section className="projects-section" style={{position: 'relative', overflow: 'hidden'}}>
      <Threads style={{position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0}} color={[0,0,0]} amplitude={1} distance={0.7} />
      <h2>I miei progetti</h2>
      <div className="projects-socials" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
        <a href="https://github.com/Porta048" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/alessandro-di-martino-a55752334/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z" fill="#0077B5"/>
          </svg>
        </a>
        <a href="https://x.com/Alessan45064151" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg viewBox="0 0 120 120" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="120" height="120" fill="white"/>
            <path d="M87.5 20H102L72.5 56.5L105 100H87.5L62.5 68.5L35 100H20L51.5 61.5L20 20H37.5L60 49L87.5 20ZM84.5 94H90.5L60 56.5L29.5 94H35.5L60 65.5L84.5 94ZM35.5 26H29.5L60 63.5L90.5 26H84.5L60 54.5L35.5 26Z" fill="black"/>
          </svg>
        </a>
      </div>
      <div className="projects-list" style={{position: 'relative', zIndex: 1}}>
        <div className="project-card">
          <h3><a href="https://github.com/Porta048/pokemon-AI" target="_blank" rel="noopener noreferrer" style={{color: '#222', textDecoration: 'none'}}>Pokemon AI Agent for Game Boy Color</a></h3>
          <p>
            Imagine having a robot friend that can play Pokémon for you! This project is exactly that: an artificial intelligence (AI) that learns to play Pokémon games for the Game Boy Color on its own.<br/><br/>
            <b>How does it work?</b> The AI agent is made up of 4 "brains":<br/>
          </p>
          <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
            <li><b>PokemonMemoryReader</b>: reads the game's memory to get data like money, Pokémon, badges.</li>
            <li><b>PokemonStateDetector</b>: analyzes the screen to understand if you are in battle, in a menu, or in a dialogue.</li>
            <li><b>PokemonDQN</b>: a neural network that learns to play by observing and rewarding the best actions.</li>
            <li><b>PokemonAI</b>: puts everything together, decides actions and learns from its own mistakes.</li>
          </ul>
          <p>
            <b>Technologies:</b> Deep Q-Network, Prioritized Experience Replay, Double DQN.<br/>
            <b>Goal:</b> to see how a computer can learn to catch Pokémon, win battles, and complete the game through trial and error, just like a child learning to play!<br/><br/>
            <a href="https://github.com/Porta048/pokemon-AI" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', verticalAlign: 'middle'}} aria-label="GitHub">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/>
              </svg>
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3><a href="https://github.com/Porta048/CV-posture" target="_blank" rel="noopener noreferrer" style={{color: '#222', textDecoration: 'none'}}>Advanced Real-Time Posture Analysis System</a></h3>
          <p>
            This project implements an advanced real-time posture detection system using a webcam. It leverages MediaPipe for pose estimation and an optimized machine learning model to classify sitting posture as "Correct" or "Incorrect".<br/><br/>
            <b>Project Overview:</b><br/>
            The system has been completely redesigned and improved over the original version, implementing:
          </p>
          <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
            <li>18 advanced features instead of the original 6</li>
            <li>Optimized algorithms with Grid Search (RandomForest, GradientBoosting, SVM)</li>
            <li>Advanced preprocessing with StandardScaler and handling of infinite values</li>
            <li>67% reduction in false negatives</li>
            <li>Alert system for incorrect posture</li>
          </ul>
          <p>
            <b>Main Components:</b>
          </p>
          <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
            <li><b>Improved Dataset Preparation</b>: Extracts 18 advanced features from each image using MediaPipe Pose and saves them for training.</li>
            <li><b>Optimized Model Training</b>: Uses Grid Search, 5-fold cross-validation, and advanced preprocessing for robust validation and model optimization.</li>
            <li><b>Real-Time Posture Analyzer</b>: Analyzes posture in real time via webcam, with visual and audio alerts for incorrect posture and confidence indicators.</li>
            <li><b>Analysis Tools</b>: Compare model performance and provide full technical documentation.</li>
          </ul>
          <p>
            <b>Results:</b><br/>
          </p>
          <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
            <li><b>Accuracy:</b> 88% (vs 71% original)</li>
            <li><b>False Negatives:</b> Reduced by 67% (from 6 to 2)</li>
            <li><b>Most important features:</b> head_y_offset, head_forward_distance, shoulder_slope</li>
          </ul>
          <p>
            <b>How to use:</b> Install requirements, generate the dataset, train the model, and run the real-time analyzer. Full instructions and code are available in the repository.<br/><br/>
            <a href="https://github.com/Porta048/CV-posture" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', verticalAlign: 'middle'}} aria-label="GitHub">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/>
              </svg>
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3><a href="https://github.com/Porta048/predict-client" target="_blank" rel="noopener noreferrer" style={{color: '#222', textDecoration: 'none'}}>Customer Churn Prediction - Explainable AI Experiment</a></h3>
          <img src="/churn_feature_importance.png" alt="Feature importance SHAP plot" className="responsive-img" style={{width: '100%', height: 'auto', maxWidth: '420px', margin: '0 auto 1rem auto', display: 'block', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)'}} />
          <p>
            This project demonstrates how to use modern machine learning and explainable AI (XAI) to predict customer churn and understand the main drivers behind it.<br/><br/>
            <b>Project Overview:</b><br/>
            <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
              <li><b>Data Simulation:</b> Synthetic customer data is generated to mimic real-world business scenarios, including features like satisfaction score, support calls, payment delays, contract length, and internet speed.</li>
              <li><b>Model Training:</b> An advanced neural network is trained to predict the probability that a customer will leave (churn), using the simulated data.</li>
              <li><b>Explainability:</b> SHAP (SHapley Additive exPlanations) is used to interpret the model's predictions, both globally (feature importance) and locally (individual customer explanations).</li>
              <li><b>Interactive Dashboard:</b> A Streamlit dashboard displays high-risk customers in real time, their main churn drivers, and a global feature importance plot. The dashboard can be extended with alerting and filtering features.</li>
            </ul>
            <b>Feature Importance Visualization:</b><br/>
            The SHAP plot shows the impact of each feature on the churn prediction. Each dot represents a customer; color indicates the feature value (blue = low, pink = high). Features at the top are the most influential for the model's decisions.<br/><br/>
            <b>About the Experiment:</b><br/>
            <ul style={{textAlign: 'left', margin: '0 0 0 1.2em'}}>
              <li><b>Data:</b> Simulated customer data with features such as satisfaction score, support calls, payment delays, contract length, and internet speed.</li>
              <li><b>Model:</b> Advanced neural network trained to predict churn probability.</li>
              <li><b>Explainability:</b> SHAP is used to interpret the model's predictions and highlight the main drivers of churn risk for each customer.</li>
            </ul>
            This experiment demonstrates how modern AI can not only predict business outcomes, but also provide actionable insights for customer retention strategies.<br/><br/>
            <a href="https://github.com/Porta048/predict-client" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', verticalAlign: 'middle'}} aria-label="GitHub">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="#181717"/>
              </svg>
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>Nome Progetto 2</h3>
          <p>Descrizione breve del progetto. Puoi aggiungere un link o una demo.</p>
        </div>
        {/* Aggiungi altri progetti qui */}
      </div>
    </section>
  );
} 