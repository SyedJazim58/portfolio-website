import React from 'react';
import { PORTFOLIO_DATA } from '../../utils/constants';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          {PORTFOLIO_DATA.skills.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.category}</h3>
              <ul className={styles.skillList}>
                {category.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;