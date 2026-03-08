import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Images, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop",
      title: "Yüz Germe Sonrası",
      category: "Sonuçlar",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=600&fit=crop",
      title: "Gıdı Eritme",
      category: "Uygulamalar",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop",
      title: "Cilt Gençleştirme",
      category: "Sonuçlar",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop",
      title: "Kliniğimiz",
      category: "Klinik",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop",
      title: "Lazer Cihazı",
      category: "Ekipman",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      title: "Tedavi Odası",
      category: "Klinik",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&h=600&fit=crop",
      title: "Öncesi ve Sonrası",
      category: "Sonuçlar",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      title: "Uzman Kadro",
      category: "Ekibimiz",
    },
  ];

  const categories = ["Tümü", ...Array.from(new Set(images.map(img => img.category)))];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredImages = activeCategory === "Tümü"
    ? images
    : images.filter(img => img.category === activeCategory);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6"
          >
            <Images className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Galeri</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Fotoğraf <span className="gradient-text">Galerisi</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Kliniğimizden ve uygulamalarımızdan kareler
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  z: 50,
                }}
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedImage(image.src);
                }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 via-pink-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium mb-1">{image.category}</p>
                  <h3 className="text-white font-semibold">{image.title}</h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-pink-500" />
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-400/50 rounded-2xl transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Navigation */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                  setSelectedImage(filteredImages[currentIndex]?.src);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                  setSelectedImage(filteredImages[currentIndex]?.src);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>

              {/* Image */}
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
              >
                <p className="text-white font-semibold">
                  {filteredImages[currentIndex]?.title}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
