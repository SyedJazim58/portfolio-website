import React, { useState, useEffect } from 'react';
import GitHubService from '../../services/githubService';
import ProjectCard from './ProjectCard';
import { GITHUB_CONFIG } from '../../utils/constants';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const topProjects = await GitHubService.getTopRepositories(
          GITHUB_CONFIG.USERNAME,
          GITHUB_CONFIG.DEFAULT_REPO_COUNT
        );
        setProjects(topProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className={styles.projects}>
        <div className="container">
          <h2>Projects</h2>
          <div className={styles.loading}>Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className={styles.projects}>
        <div className="container">
          <h2>Projects</h2>
          <div className={styles.error}>{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className={styles.noProjects}>
              No projects found. Please check back later.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;