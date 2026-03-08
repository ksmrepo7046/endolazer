import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Play, Sparkles, Star, Heart } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const slides = [
    {
      title: "Endolazer ile Güzellik Saçın",
      subtitle: "Genç görünmek sizin de hakkınız",
      description: "Ameliyatsız yüz germe, gıdı eritme ve daha fazlası",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop",
    },
    {
      title: "Mükemmel Yüz Hatları",
      subtitle: "Doğal & pürüzsüz cilt",
      description: "Lazer teknolojisiyle yeniden doğmuş hissi",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&h=800&fit=crop",
    },
    {
      title: "Gençleşme ve Güzelleşme",
      subtitle: "Ağrısız ve güvenli",
      description: "Modern estetik çözümlerle tanışın",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/30 to-rose-400/30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-purple-300/30 to-pink-400/30 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-rose-300/40 to-pink-500/40 blur-lg"
        />

        {/* 3D Decorative Shapes */}
        <motion.div
          style={{
            transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          }}
          className="absolute top-1/4 left-1/4 w-16 h-16 preserve-3d"
        >
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg transform rotate-45 shadow-lg" />
        </motion.div>

        <motion.div
          style={{
            transform: `rotateX(${-mousePosition.y}deg) rotateY(${-mousePosition.x}deg)`,
          }}
          className="absolute bottom-1/3 right-1/3 w-12 h-12 preserve-3d"
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6"
              >
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium text-gray-700">Ameliyatsız Yüz Germe</span>
              </motion.div>

              {/* Title with 3D effect */}
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 perspective-1000"
              >
                <span className="block gradient-text">{slides[currentSlide].title}</span>
              </motion.h1>

              <motion.p
                key={`sub-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl text-gray-600 mb-4"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Daha Fazla Bilgi
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#video"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Play className="mr-2 w-5 h-5 text-pink-500" />
                  Video İzle
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                {[
                  { value: "10K+", label: "Mutlu Hasta" },
                  { value: "15+", label: "Yıllık Deneyim" },
                  { value: "99%", label: "Memnuniyet" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div
                className="relative perspective-1000"
                style={{
                  transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Main Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl preserve-3d">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-[400px] sm:h-[500px] object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Profesyonel Hizmet</p>
                        <p className="text-white/80 text-sm">Uzman kadromuzla hizmetinizdeyiz</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 3D Side Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20"
                >
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg shadow-lg flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-16 h-16"
                >
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'bg-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-pink-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
