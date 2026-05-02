import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CertificationsPage from './pages/Certifications';
import LeadershipPage from './pages/Leadership';
import WorkPage from './pages/Work';
import AffiliationsPage from './pages/Affiliations';
import HobbiesPage from './pages/Hobbies';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function AppContent() {
  const location = useLocation();
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/affiliations" element={<AffiliationsPage />} />
          <Route path="/hobbies" element={<HobbiesPage />} />
          <Route path="/contact" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

