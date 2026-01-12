import React from 'react';
import { PORTFOLIO_DATA } from '../../utils/constants';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Contact Me</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Get In Touch</h3>
            <p>I'm currently looking for new opportunities. Feel free to reach out!</p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <strong>Email:</strong>
                <a href={`mailto:${PORTFOLIO_DATA.contactInfo.email}`}>
                  {PORTFOLIO_DATA.contactInfo.email}
                </a>
              </div>
              <div className={styles.detailItem}>
                <strong>LinkedIn:</strong>
                <a href={PORTFOLIO_DATA.contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className={styles.detailItem}>
                <strong>GitHub:</strong>
                <a href={PORTFOLIO_DATA.contactInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h4>Connect With Me</h4>
            <div className={styles.links}>
              <a
                href={PORTFOLIO_DATA.contactInfo.email.replace('syedjazim@example.com', 'mailto:syedjazim@example.com')}
                className={styles.link}
                aria-label="Email"
              >
                Email
              </a>
              <a
                href={PORTFOLIO_DATA.contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={PORTFOLIO_DATA.contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={PORTFOLIO_DATA.contactInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;