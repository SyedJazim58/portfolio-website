# Portfolio Website

A professional portfolio website showcasing Syed Jazim's skills and projects.

## Features

- Responsive design that works on all devices
- Dynamic project showcase from GitHub repositories
- Skills and experience sections
- Contact information and social links
- Modern React implementation with clean architecture

## Technologies Used

- React 18+
- Create React App
- CSS Modules for styling
- GitHub API for fetching repositories
- Axios for HTTP requests

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/SyedJazim58/Portfolio-real.git
cd portfolio-website
```

2. Navigate to frontend directory and install dependencies:
```bash
cd frontend
npm install
```

3. Create a `.env` file in the frontend directory:
```bash
# .env
REACT_APP_GITHUB_USERNAME=SyedJazim58
REACT_APP_GITHUB_TOKEN= # Optional, for higher rate limits
```

4. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs tests in watch mode
- `npm run eject` - Ejects from Create React App (irreversible)

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   └── Contact/
│   ├── services/
│   ├── utils/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── tests/
├── package.json
└── README.md
```

## GitHub Integration

The application automatically fetches the top 4 repositories from the configured GitHub username. The repositories are sorted by star count to highlight the most popular projects.

## Deployment

The application is designed for easy deployment to platforms like GitHub Pages, Vercel, or Netlify. For GitHub Pages, run:

```bash
npm run deploy
```