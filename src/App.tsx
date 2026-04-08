import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/layout/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { db } from './firebase';
import { doc, getDocFromServer } from 'firebase/firestore';

// Import pages directly
import { Home } from './pages/Home';
import { RecentPeaks } from './pages/RecentPeaks';
import { RecentPeakDetail } from './pages/RecentPeakDetail';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Services } from './pages/Services';
import { ServicePage } from './pages/ServicePage';

function App() {
  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if(error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration. ");
        }
      }
    }
    testConnection();
  }, []);

  return (
    <div className="min-h-screen bg-background text-white selection:bg-accent selection:text-black">
      <Router>
        <ScrollToTop />
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recent-peaks" element={<RecentPeaks />} />
          <Route path="/recent-peaks/:id" element={<RecentPeakDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
