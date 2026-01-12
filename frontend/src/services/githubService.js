import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';

class GitHubService {
  constructor() {
    this.username = process.env.REACT_APP_GITHUB_USERNAME || 'SyedJazim58';
    this.token = process.env.REACT_APP_GITHUB_TOKEN || null;

    this.api = axios.create({
      baseURL: GITHUB_API_BASE,
      headers: {
        ...(this.token && { 'Authorization': `token ${this.token}` }),
        'Accept': 'application/vnd.github.v3+json'
      }
    });
  }

  /**
   * Fetch repositories for a GitHub user
   * @param {string} username - GitHub username
   * @param {Object} options - Configuration options
   * @returns {Promise<Array<Repository>>} Array of repository objects
   */
  async fetchRepositories(username, options = {}) {
    const {
      sort = 'stars',
      direction = 'desc',
      limit = 100
    } = options;

    try {
      const response = await this.api.get(`/users/${username}/repos`, {
        params: {
          sort,
          direction,
          per_page: Math.min(limit, 100)
        }
      });

      // Transform GitHub API response to match our data model
      return response.data.map(repo => ({
        id: repo.id.toString(),
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || '',
        htmlUrl: repo.html_url,
        stargazersCount: repo.stargazers_count,
        forksCount: repo.forks_count,
        language: repo.language,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        topics: repo.topics || []
      }));
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  }

  /**
   * Get top repositories by star count
   * @param {string} username - GitHub username
   * @param {number} count - Number of repositories to return (default: 4)
   * @returns {Promise<Array<Repository>>} Top repositories
   */
  async getTopRepositories(username, count = 4) {
    try {
      const repos = await this.fetchRepositories(username, {
        sort: 'stargazers_count',
        direction: 'desc',
        limit: count * 2 // Get more than needed in case some are archived/private
      });

      // Filter out archived repositories and return top count
      return repos
        .filter(repo => !repo.archived)
        .slice(0, count);
    } catch (error) {
      console.error('Error getting top repositories:', error);
      throw error;
    }
  }

  /**
   * Get user profile information
   * @param {string} username - GitHub username
   * @returns {Promise<Object>} User profile data
   */
  async getUserProfile(username) {
    try {
      const response = await this.api.get(`/users/${username}`);
      return {
        login: response.data.login,
        name: response.data.name,
        bio: response.data.bio,
        avatarUrl: response.data.avatar_url,
        publicRepos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        blog: response.data.blog,
        location: response.data.location,
        email: response.data.email,
        company: response.data.company,
        twitterUsername: response.data.twitter_username
      };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
}

export default new GitHubService();