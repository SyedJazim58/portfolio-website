import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Syed Jazim. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
          <a href="#github" aria-label="GitHub">GitHub</a>
          <a href="#twitter" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;