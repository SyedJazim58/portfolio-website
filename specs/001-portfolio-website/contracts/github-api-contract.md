# API Contract: GitHub Integration Service

## Purpose
Defines the interface for fetching GitHub repository data to display the top 4 repositories on the portfolio website.

## Endpoints

### GET /api/github/user/:username/repos
**Description**: Fetch repositories for a GitHub user

#### Request
- **Method**: GET
- **Path**: `/api/github/user/{username}/repos`
- **Parameters**:
  - `username`: string (required) - GitHub username to fetch repositories for
  - `sort`: string (optional) - Sorting method (default: "stars", alternatives: "updated", "forks")
  - `direction`: string (optional) - Sort direction (default: "desc")
  - `per_page`: number (optional) - Number of repositories to return (default: 100, max: 100)

#### Response
- **Success**: 200 OK
- **Content-Type**: application/json

```json
[
  {
    "id": "string",
    "name": "string",
    "full_name": "string",
    "description": "string",
    "html_url": "string",
    "stargazers_count": "number",
    "forks_count": "number",
    "language": "string",
    "created_at": "string (ISO date)",
    "updated_at": "string (ISO date)",
    "topics": ["string"]
  }
]
```

#### Error Responses
- **404**: User not found
- **403**: Rate limit exceeded
- **500**: Internal server error

## Service Implementation Contract

### GitHubService Interface
```javascript
interface GitHubService {
  /**
   * Fetch repositories for a GitHub user
   * @param {string} username - GitHub username
   * @param {Object} options - Configuration options
   * @returns {Promise<Array<Repository>>} Array of repository objects
   */
  fetchRepositories(username: string, options?: {
    sort?: 'stars' | 'updated' | 'forks',
    direction?: 'asc' | 'desc',
    limit?: number
  }): Promise<Repository[]>;

  /**
   * Get top repositories by star count
   * @param {string} username - GitHub username
   * @param {number} count - Number of repositories to return (default: 4)
   * @returns {Promise<Array<Repository>>} Top repositories
   */
  getTopRepositories(username: string, count?: number): Promise<Repository[]>;
}
```

## Data Models

### Repository Object
```javascript
{
  "id": "string",                    // Unique repository identifier
  "name": "string",                  // Repository name
  "fullName": "string",              // Full name (username/repo)
  "description": "string",           // Repository description
  "htmlUrl": "string",               // URL to repository on GitHub
  "stargazersCount": "number",       // Number of stars
  "forksCount": "number",            // Number of forks
  "language": "string",              // Primary programming language
  "createdAt": "string",             // Creation date (ISO format)
  "updatedAt": "string",             // Last update date (ISO format)
  "topics": ["string"]               // Repository topics
}
```

## Rate Limiting
- GitHub API allows 60 requests per hour for unauthenticated requests
- Consider implementing caching to reduce API calls
- Display cached data when API limit is reached with appropriate messaging

## Error Handling
- Handle network errors gracefully
- Provide fallback content when API is unavailable
- Log errors for debugging purposes