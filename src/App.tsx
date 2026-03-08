import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import VideoSection from './sections/VideoSection';
import Gallery from './sections/Gallery';
import TreatmentAreas from './sections/TreatmentAreas';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-6 border-4 border-pink-300 border-t-pink-500 rounded-full"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold gradient-text"
            >
              ENDOLAZER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-gray-600"
            >
              Yükleniyor...
            </motion.p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen overflow-x-hidden"
        >
          <ParticleBackground />
          <Navigation scrollY={scrollY} />
          <main className="relative z-10">
            <Hero />
            <About />
            <VideoSection />
            <Gallery />
            <TreatmentAreas />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
</AnimatePresence>
  );
}

export default App;
