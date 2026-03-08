import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Film, Youtube } from 'lucide-react';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      id: "1",
      title: "Endolift Facial Shaping",
      thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      embedUrl: "https://www.youtube.com/embed/8u2cH3ya-00?autoplay=1",
      duration: "1:41",
    },
    {
      id: "2",
      title: "Endolazer Uygulaması",
      thumbnail: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=400&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      duration: "3:20",
    },
    {
      id: "3",
      title: "Yüz Germe Teknikleri",
      thumbnail: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      duration: "2:15",
    },
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section id="video" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <Film className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-gray-300">Videolar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Endolazer <span className="text-pink-400">Videoları</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Uygulama sürecini ve sonuçları videolarımızda inceleyin
          </motion.p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-800">
            {isPlaying ? (
              <iframe
                src={activeVideo.embedUrl}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-pink-500/50 transition-shadow"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-lg text-white text-sm">
                  {activeVideo.duration}
                </div>
              </>
            )}
          </div>

          {/* Video Title Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 left-6 right-6 glass-dark rounded-xl p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{activeVideo.title}</h3>
                <p className="text-gray-400 text-sm">Endolazer Mersin</p>
              </div>
              <a
                href={`https://youtube.com/watch?v=${activeVideo.embedUrl.split('/').pop()?.split('?')[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
              >
                <Youtube className="w-5 h-5 text-white" />
                <span className="text-white text-sm">YouTube'da İzle</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid sm:grid-cols-3 gap-4 mt-12"
        >
          {videos.map((video) => (
            <motion.button
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                setIsPlaying(false);
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-xl overflow-hidden aspect-video group ${
                activeVideo.id === video.id
                  ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-gray-900'
                  : ''
              }`}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-medium truncate">{video.title}</p>
                <p className="text-gray-400 text-xs">{video.duration}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@endolazermersin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
          >
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-white">Daha Fazla Video İçin YouTube Kanalımız</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
