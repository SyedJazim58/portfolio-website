import React from 'react';
import { PORTFOLIO_DATA } from '../../utils/constants';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.personalInfo}>
            <h3>{PORTFOLIO_DATA.name}</h3>
            <p className={styles.title}>{PORTFOLIO_DATA.title}</p>
            <p className={styles.bio}>{PORTFOLIO_DATA.bio}</p>

            <div className={styles.contactInfo}>
              <h4>Contact Information</h4>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <strong>Email:</strong>
                  <a href={`mailto:${PORTFOLIO_DATA.contactInfo.email}`}>
                    {PORTFOLIO_DATA.contactInfo.email}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>LinkedIn:</strong>
                  <a href={PORTFOLIO_DATA.contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    {PORTFOLIO_DATA.contactInfo.linkedin}
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <strong>GitHub:</strong>
                  <a href={PORTFOLIO_DATA.contactInfo.github} target="_blank" rel="noopener noreferrer">
                    {PORTFOLIO_DATA.contactInfo.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;