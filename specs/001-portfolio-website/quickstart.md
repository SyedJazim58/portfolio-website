# Quickstart Guide: Portfolio Website

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git version control system

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SyedJazim58/Portfolio-real.git
cd portfolio-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```bash
# .env
REACT_APP_GITHUB_USERNAME=SyedJazim58
REACT_APP_GITHUB_TOKEN= # Optional, for higher rate limits
```

### 4. Development Server
```bash
npm start
# or
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### 5. Build for Production
```bash
npm run build
# or
yarn build
```

## Key Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs tests in watch mode
- `npm run eject` - Ejects from Create React App (irreversible)

## Folder Structure
```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
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