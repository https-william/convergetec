import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Code-split route components with React.lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Consulting = lazy(() => import('./pages/services/Consulting'));
const DigitalSoftware = lazy(() => import('./pages/services/DigitalSoftware'));
const Academy = lazy(() => import('./pages/services/Academy'));
const ResourcesTalent = lazy(() => import('./pages/services/ResourcesTalent'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageFallback() {
  return (
    <div
      className="flex-1 flex items-center justify-center min-h-[50vh]"
      role="status"
      aria-label="Loading page content"
    >
      <div className="w-8 h-8 rounded-full border-2 border-blue border-t-transparent animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex-1 flex flex-col"
      >
        <Suspense fallback={<PageFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/digital-software" element={<DigitalSoftware />} />
            <Route path="/services/academy" element={<Academy />} />
            <Route path="/services/resources-talent" element={<ResourcesTalent />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-offwhite text-ink font-body">
      {/* Skip to Main Content Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:px-4 focus:py-2.5 focus:bg-blue focus:text-offwhite focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan font-semibold text-sm transition-all"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
        <AnimatedRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout />
      </Router>
    </HelmetProvider>
  );
}
