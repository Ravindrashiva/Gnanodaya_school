import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions'; 
import Registration from './pages/Registration'; 
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// About Sub-pages (Imported from components/about)
import Vision from './components/about/Vision';
import History from './components/about/History';
import PrincipalMessage from './components/about/Principal';
import Infrastructure from './components/about/Infrastructure';

import Curriculum from './components/Academics/curriculum';
import AcademicCalendar from './components/Academics/calendar';
import Achievements from './components/Academics/achievements';



// Scroll to Top Helper (Ensures smooth navigation between long pages)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      {/* Reset scroll position on route change */}
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col bg-white">
        
        {/* 1. HEADER (Persistent) */}
        <Header />

        {/* 2. MAIN CONTENT AREA */}
        <main className="flex-1">
          <Routes>
            {/* Primary Landing Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            {/* Academics Section */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/curriculum" element={<Curriculum />} />
            <Route path="/academics/calendar" element={<AcademicCalendar />} />
            <Route path="/academics/achievements" element={<Achievements />} />
          

            {/* Admissions & Registration */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/registration" element={<Registration />} />

            {/* About Section */}
            <Route path="/about" element={<About />} />
            <Route path="/about/vision" element={<Vision />} />
            <Route path="/about/history" element={<History />} />
            <Route path="/about/principal" element={<PrincipalMessage />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />

            {/* 404 Fallback: Redirects unknown paths back to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* 3. FOOTER (Persistent) */}
        <Footer />

        {/* 4. FLOATING ELEMENTS */}
        <WhatsAppButton />

      </div>
    </Router>
  );
}