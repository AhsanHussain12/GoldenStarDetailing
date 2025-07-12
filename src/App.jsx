import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages';
import AboutUs from './pages/AboutUs';
import PackageModal from './components/PackageModal';
import { PackageProvider } from './context/PackageContext';

function App() {
  return (
    <PackageProvider>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <PackageModal />
        </div>
      </Router>
    </PackageProvider>
  );
}

export default App;
