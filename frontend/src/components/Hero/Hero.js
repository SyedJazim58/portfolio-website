import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, I'm Syed Jazim</h1>
        <h2 className={styles.heroSubtitle}>Full Stack Developer</h2>
        <p className={styles.heroDescription}>
          Passionate about creating innovative web applications with modern technologies
        </p>
        <div className={styles.ctaButtons}>
          <button className={styles.primaryBtn}>Get In Touch</button>
          <button className={styles.secondaryBtn}>View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;