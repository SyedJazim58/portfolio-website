# Data Model: Portfolio Website

## Entities

### PortfolioData
- **Fields**:
  - name: string (developer's name)
  - title: string (job title/position)
  - bio: string (short biography)
  - contactInfo: object
    - email: string
    - linkedin: string
    - github: string
    - twitter: string (optional)
  - skills: array of objects
    - category: string (e.g., "Frontend", "Backend", "Tools")
    - items: array of strings (skill names)
  - experience: array of objects
    - company: string
    - position: string
    - duration: string
    - description: string
  - education: array of objects (optional)
    - institution: string
    - degree: string
    - year: string

### GitHubRepository
- **Fields**:
  - id: string (unique identifier from GitHub)
  - name: string (repository name)
  - fullName: string (username/repo-name format)
  - description: string (repository description)
  - htmlUrl: string (URL to the repository on GitHub)
  - stargazersCount: number (number of stars)
  - forksCount: number (number of forks)
  - language: string (primary programming language)
  - createdAt: string (ISO date string)
  - updatedAt: string (ISO date string)
  - topics: array of strings (repository topics/tags)

### ProjectDisplay
- **Fields**:
  - id: string (corresponds to GitHub repository id)
  - title: string (display title, same as repo name)
  - description: string (same as repo description)
  - link: string (same as htmlUrl)
  - stars: number (stargazersCount)
  - language: string (primary language)
  - lastUpdated: string (formatted updatedAt)
  - featured: boolean (flag to indicate top 4)

## Relationships
- PortfolioData contains multiple GitHubRepository entries (for the top 4 projects)
- Each GitHubRepository maps to a ProjectDisplay for presentation purposes

## Validation Rules
- PortfolioData.name is required and must be non-empty
- PortfolioData.title is required and must be non-empty
- PortfolioData.contactInfo must contain at least one contact method
- GitHubRepository.name is required and must be non-empty
- GitHubRepository.description is required but can be empty string
- GitHubRepository.htmlUrl must be a valid URL format
- Only 4 repositories should be marked as featured in ProjectDisplay