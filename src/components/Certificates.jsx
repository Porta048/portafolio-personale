import React from 'react';
import './Certificates.css';

export default function Certificates() {
  return (
    <section className="certificates-section">
      <h2>My Certificates</h2>
      <div className="certificates-table-container">
        {/* Desktop/Tablet Table */}
        <table className="certificates-table">
          <thead>
            <tr>
              <th>Certificate</th>
              <th>Issuer</th>
              <th>Date</th>
              <th>Skills</th>
              <th>Verification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="certificate-name">
                <div className="certificate-info">
                  <div className="certificate-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                      <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                      <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Claude Code in Action</h3>
                    <p className="certificate-id">ID: jispc4ea7078</p>
                  </div>
                </div>
              </td>
              <td>Anthropic</td>
              <td>Jul 2025</td>
              <td className="skills-cell">
                <div className="skill-tags">
                  <span className="skill-tag">agentic coding</span>
                  <span className="skill-tag">terminal-based AI</span>
                  <span className="skill-tag">workflow automation</span>
                  <span className="skill-tag">github integration</span>
                </div>
              </td>
              <td>
                <a href="https://verify.skilljar.com/c/jispc4ea7o78" className="certificate-link" target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              </td>
            </tr>
            <tr>
              <td className="certificate-name">
                <div className="certificate-info">
                  <div className="certificate-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                      <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                      <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Claude with the Anthropic API</h3>
                    <p className="certificate-id">ID: dbhui7iyak8j</p>
                  </div>
                </div>
              </td>
              <td>Anthropic</td>
              <td>Jul 2025</td>
              <td className="skills-cell">
                <div className="skill-tags">
                  <span className="skill-tag">API integration</span>
                  <span className="skill-tag">prompt engineering</span>
                  <span className="skill-tag">function calling</span>
                  <span className="skill-tag">multimodal</span>
                </div>
              </td>
              <td>
                <a href="https://verify.skilljar.com/c/dbhui7iyak8j" className="certificate-link" target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              </td>
            </tr>
            <tr>
              <td className="certificate-name">
                <div className="certificate-info">
                  <div className="certificate-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                      <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                      <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Introduction to Model Context Protocol</h3>
                    <p className="certificate-id">ID: 7wihc5sh5bor</p>
                  </div>
                </div>
              </td>
              <td>Anthropic</td>
              <td>Jul 2025</td>
              <td className="skills-cell">
                <div className="skill-tags">
                  <span className="skill-tag">model context</span>
                  <span className="skill-tag">protocol design</span>
                  <span className="skill-tag">AI architecture</span>
                  <span className="skill-tag">context management</span>
                </div>
              </td>
              <td>
                <a href="https://verify.skilljar.com/c/7wihc5sh5bor" className="certificate-link" target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              </td>
            </tr>
            <tr>
              <td className="certificate-name">
                <div className="certificate-info">
                  <div className="certificate-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Machine Learning Crash Course</h3>
                    <p className="certificate-id">Google ML Course</p>
                  </div>
                </div>
              </td>
              <td>Google</td>
              <td>Jul 2025</td>
              <td className="skills-cell">
                <div className="skill-tags">
                  <span className="skill-tag">machine learning</span>
                  <span className="skill-tag">neural networks</span>
                  <span className="skill-tag">tensorflow</span>
                  <span className="skill-tag">keras</span>
                  <span className="skill-tag">supervised learning</span>
                  <span className="skill-tag">regression</span>
                  <span className="skill-tag">classification</span>
                  <span className="skill-tag">feature engineering</span>
                  <span className="skill-tag">model training</span>
                  <span className="skill-tag">gradient descent</span>
                  <span className="skill-tag">overfitting</span>
                  <span className="skill-tag">regularization</span>
                </div>
              </td>
              <td>
                <a href="https://developers.google.com/profile/u/dimartinodev05" className="certificate-link" target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              </td>
            </tr>
            <tr>
              <td className="certificate-name">
                <div className="certificate-info">
                  <div className="certificate-icon">
                    <img src="/icons8-google-cloud-48.png" alt="Google Cloud Logo" width="32" height="32" />
                  </div>
                  <div>
                    <h3>Introduction to Generative AI</h3>
                    <p className="certificate-id">Google Cloud Skills Boost</p>
                  </div>
                </div>
              </td>
              <td>Google Cloud</td>
              <td>Jul 2025</td>
              <td className="skills-cell">
                <div className="skill-tags">
                  <span className="skill-tag">generative AI</span>
                  <span className="skill-tag">large language models</span>
                  <span className="skill-tag">AI applications</span>
                  <span className="skill-tag">responsible AI</span>
                </div>
              </td>
              <td>
                <a href="https://www.cloudskillsboost.google/course_templates/536" className="certificate-link" target="_blank" rel="noopener noreferrer">
                  Verify
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Mobile Cards Layout */}
        <div className="mobile-certificate-card">
          <div className="mobile-certificate-header">
            <div className="mobile-certificate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
              </svg>
            </div>
            <div className="mobile-certificate-title">
              <h3>Claude Code in Action</h3>
              <p className="mobile-certificate-id">ID: jispc4ea7078</p>
            </div>
          </div>
          <div className="mobile-certificate-details">
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Issuer</span>
              <span className="mobile-detail-value">Anthropic</span>
            </div>
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Date</span>
              <span className="mobile-detail-value">Jul 2025</span>
            </div>
          </div>
          <div className="mobile-skills-section">
            <div className="mobile-skills-label">Skills</div>
            <div className="mobile-skill-tags">
              <span className="mobile-skill-tag">agentic coding</span>
              <span className="mobile-skill-tag">terminal-based AI</span>
              <span className="mobile-skill-tag">workflow automation</span>
              <span className="mobile-skill-tag">github integration</span>
            </div>
          </div>
          <div className="mobile-verify-section">
            <a href="https://verify.skilljar.com/c/jispc4ea7o78" className="mobile-certificate-link" target="_blank" rel="noopener noreferrer">
              Verify Certificate
            </a>
          </div>
        </div>

        <div className="mobile-certificate-card">
          <div className="mobile-certificate-header">
            <div className="mobile-certificate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
              </svg>
            </div>
            <div className="mobile-certificate-title">
              <h3>Claude with the Anthropic API</h3>
              <p className="mobile-certificate-id">ID: dbhui7iyak8j</p>
            </div>
          </div>
          <div className="mobile-certificate-details">
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Issuer</span>
              <span className="mobile-detail-value">Anthropic</span>
            </div>
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Date</span>
              <span className="mobile-detail-value">Jul 2025</span>
            </div>
          </div>
          <div className="mobile-skills-section">
            <div className="mobile-skills-label">Skills</div>
            <div className="mobile-skill-tags">
              <span className="mobile-skill-tag">API integration</span>
              <span className="mobile-skill-tag">prompt engineering</span>
              <span className="mobile-skill-tag">function calling</span>
              <span className="mobile-skill-tag">multimodal</span>
            </div>
          </div>
          <div className="mobile-verify-section">
            <a href="https://verify.skilljar.com/c/dbhui7iyak8j" className="mobile-certificate-link" target="_blank" rel="noopener noreferrer">
              Verify Certificate
            </a>
          </div>
        </div>

        <div className="mobile-certificate-card">
          <div className="mobile-certificate-header">
            <div className="mobile-certificate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="32" width="32">
                <path fill="#181818" d="m13.788825 3.932 6.43325 16.136075h3.5279L17.316725 3.932H13.788825Z" stroke-width="0.25"></path>
                <path fill="#181818" d="m6.325375 13.682775 2.20125 -5.67065 2.201275 5.67065H6.325375ZM6.68225 3.932 0.25 20.068075h3.596525l1.3155 -3.3886h6.729425l1.315275 3.3886h3.59655L10.371 3.932H6.68225Z" stroke-width="0.25"></path>
              </svg>
            </div>
            <div className="mobile-certificate-title">
              <h3>Introduction to Model Context Protocol</h3>
              <p className="mobile-certificate-id">ID: 7wihc5sh5bor</p>
            </div>
          </div>
          <div className="mobile-certificate-details">
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Issuer</span>
              <span className="mobile-detail-value">Anthropic</span>
            </div>
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Date</span>
              <span className="mobile-detail-value">Jul 2025</span>
            </div>
          </div>
          <div className="mobile-skills-section">
            <div className="mobile-skills-label">Skills</div>
            <div className="mobile-skill-tags">
              <span className="mobile-skill-tag">model context</span>
              <span className="mobile-skill-tag">protocol design</span>
              <span className="mobile-skill-tag">AI architecture</span>
              <span className="mobile-skill-tag">context management</span>
            </div>
          </div>
          <div className="mobile-verify-section">
            <a href="https://verify.skilljar.com/c/7wihc5sh5bor" className="mobile-certificate-link" target="_blank" rel="noopener noreferrer">
              Verify Certificate
            </a>
          </div>
        </div>

        <div className="mobile-certificate-card">
          <div className="mobile-certificate-header">
            <div className="mobile-certificate-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div className="mobile-certificate-title">
              <h3>Machine Learning Crash Course</h3>
              <p className="mobile-certificate-id">Google ML Course</p>
            </div>
          </div>
          <div className="mobile-certificate-details">
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Issuer</span>
              <span className="mobile-detail-value">Google</span>
            </div>
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Date</span>
              <span className="mobile-detail-value">Jul 2025</span>
            </div>
          </div>
          <div className="mobile-skills-section">
            <div className="mobile-skills-label">Skills</div>
            <div className="mobile-skill-tags">
              <span className="mobile-skill-tag">machine learning</span>
              <span className="mobile-skill-tag">neural networks</span>
              <span className="mobile-skill-tag">tensorflow</span>
              <span className="mobile-skill-tag">keras</span>
              <span className="mobile-skill-tag">supervised learning</span>
              <span className="mobile-skill-tag">regression</span>
              <span className="mobile-skill-tag">classification</span>
              <span className="mobile-skill-tag">feature engineering</span>
              <span className="mobile-skill-tag">model training</span>
              <span className="mobile-skill-tag">gradient descent</span>
              <span className="mobile-skill-tag">overfitting</span>
              <span className="mobile-skill-tag">regularization</span>
            </div>
          </div>
          <div className="mobile-verify-section">
            <a href="https://developers.google.com/profile/u/dimartinodev05" className="mobile-certificate-link" target="_blank" rel="noopener noreferrer">
              Verify Certificate
            </a>
          </div>
        </div>

        <div className="mobile-certificate-card">
          <div className="mobile-certificate-header">
            <div className="mobile-certificate-icon">
              <img src="/icons8-google-cloud-48.png" alt="Google Cloud Logo" width="32" height="32" />
            </div>
            <div className="mobile-certificate-title">
              <h3>Introduction to Generative AI</h3>
              <p className="mobile-certificate-id">Google Cloud Skills Boost</p>
            </div>
          </div>
          <div className="mobile-certificate-details">
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Issuer</span>
              <span className="mobile-detail-value">Google Cloud</span>
            </div>
            <div className="mobile-detail-item">
              <span className="mobile-detail-label">Date</span>
              <span className="mobile-detail-value">Jul 2025</span>
            </div>
          </div>
          <div className="mobile-skills-section">
            <div className="mobile-skills-label">Skills</div>
            <div className="mobile-skill-tags">
              <span className="mobile-skill-tag">generative AI</span>
              <span className="mobile-skill-tag">large language models</span>
              <span className="mobile-skill-tag">AI applications</span>
              <span className="mobile-skill-tag">responsible AI</span>
            </div>
          </div>
          <div className="mobile-verify-section">
            <a href="https://www.cloudskillsboost.google/course_templates/536" className="mobile-certificate-link" target="_blank" rel="noopener noreferrer">
              Verify Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 