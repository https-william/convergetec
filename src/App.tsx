import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Consulting from './pages/services/Consulting';
import DigitalSoftware from './pages/services/DigitalSoftware';
import Academy from './pages/services/Academy';
import ResourcesTalent from './pages/services/ResourcesTalent';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite text-ink font-body">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/digital-software" element={<DigitalSoftware />} />
          <Route path="/services/academy" element={<Academy />} />
          <Route path="/services/resources-talent" element={<ResourcesTalent />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}
