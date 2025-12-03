import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import CertificationsPage from './pages/Certifications';
import LeadershipPage from './pages/Leadership';
import WorkPage from './pages/Work';
import AffiliationsPage from './pages/Affiliations';
import HobbiesPage from './pages/Hobbies';
import ContactPage from './pages/Contact';
import './App.css';

function AppContent() {
  const location = useLocation();
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/affiliations" element={<AffiliationsPage />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

