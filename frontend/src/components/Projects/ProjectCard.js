import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.projectName}>
          <a
            href={project.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            {project.name}
          </a>
        </h3>
        <div className={styles.projectStats}>
          <span className={styles.starCount}>
            ⭐ {project.stargazersCount}
          </span>
          {project.language && (
            <span className={styles.language}>
              {project.language}
            </span>
          )}
        </div>
      </div>
      <p className={styles.projectDescription}>
        {project.description || 'No description provided'}
      </p>
      <div className={styles.cardFooter}>
        <a
          href={project.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.viewRepoBtn}
        >
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;