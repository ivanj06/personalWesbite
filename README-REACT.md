# Portfolio Website - React Version

This is the React version of Ivan Jauregui's portfolio website.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── HackathonProjects.jsx
│   ├── HardwareProjects.jsx
│   ├── Certifications.jsx
│   ├── Leadership.jsx
│   ├── Affiliations.jsx
│   ├── Hobbies.jsx
│   └── Contact.jsx
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── index.js             # React entry point
└── index.css            # Global styles (imports styles.css)

public/
├── index.html          # HTML template
└── logo.png           # Site logo (if you have one)

styles.css              # Main stylesheet (shared with vanilla version)
```

## 🎨 Features

- **Component-based architecture**: Each section is a reusable React component
- **State management**: Uses React hooks (useState, useEffect) for navigation and scroll tracking
- **Smooth scrolling**: Implemented with React event handlers
- **Responsive design**: Same CSS, works on all devices
- **Active section highlighting**: Tracks which section is in view

## 🔄 Differences from Vanilla Version

1. **Component structure**: Code is organized into reusable components
2. **State management**: Uses React hooks instead of vanilla JavaScript
3. **Event handling**: React synthetic events instead of vanilla DOM events
4. **Build process**: Requires build step for production
5. **Development server**: Hot reloading during development

## 📝 Customization

### Adding/Editing Projects

Edit the data arrays in the component files:
- `src/components/HackathonProjects.jsx` - Hackathon projects
- `src/components/HardwareProjects.jsx` - Hardware projects

### Adding Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation item in `src/components/Navbar.jsx`

## 🚢 Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Follow GitHub Pages deployment guide for React apps
3. Or use `gh-pages` package: `npm install --save-dev gh-pages`

### Other Platforms

- **Netlify**: Connect your repo, set build command to `npm run build`
- **Vercel**: Automatic deployment from GitHub
- **AWS S3/CloudFront**: Upload the `build/` folder

## 📚 Learning Resources

This React version demonstrates:
- Functional components with hooks
- Component composition
- Event handling in React
- State management with useState
- Side effects with useEffect
- Props and data flow

## ⚠️ Note

Both the vanilla HTML version and React version exist in this repository. The React version requires Node.js and npm to run, while the vanilla version can be opened directly in a browser.

