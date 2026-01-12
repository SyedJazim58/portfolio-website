import React from 'react';
import { PORTFOLIO_DATA } from '../../utils/constants';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2>Experience</h2>
        <div className={styles.timeline}>
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <div className={styles.companyInfo}>
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <span className={styles.duration}>{exp.duration}</span>
              </div>
              <div className={styles.description}>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;