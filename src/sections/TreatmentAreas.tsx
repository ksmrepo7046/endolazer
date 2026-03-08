import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, ChevronRight, Sparkles } from 'lucide-react';

const TreatmentAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);

  const areas = [
    {
      id: 1,
      title: "Yüz, Boyun ve Gıdı",
      description: "Gıdı bölgesindeki yağlanma, sarkma ve kontur kaybı için etkili çözüm. Çene hattını daha keskin ve belirgin hale getirir.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop",
      features: ["Yağ eritme", "Cilt sıkılaştırma", "Kontur düzeltme"],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Karın Cilt ve Cilt Altı",
      description: "Karın bölgesindeki gevşek cilt ve yağlanma için etkili tedavi. Daha düz ve sıkı bir karın görünümü sağlar.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
      features: ["Cilt sıkılaştırma", "Yağ kontrolü", "Düzleştirme"],
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 3,
      title: "Kol",
      description: "Kol iç kısımlarındaki sarkma ve gevşeklik için ideal çözüm. Daha gergin ve genç görünen kollar.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      features: ["Sarkma giderme", "Cilt toparlama", "Kontur düzeltme"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 4,
      title: "Bacak",
      description: "Bacaklardaki selülit ve gevşek cilt için etkili tedavi. Daha pürüzsüz ve sıkı bacaklar.",
      image: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?w=600&h=400&fit=crop",
      features: ["Selülit azaltma", "Cilt sıkılaştırma", "Doku toparlama"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Erkeklerde Meme Büyümesi (Jinekomasti)",
      description: "Erkeklerde meme büyümesi sorununa ameliyatsız çözüm. Daha düz ve erkeksi bir göğüs görünümü.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      features: ["Yağ eritme", "Doku sıkılaştırma", "Kontur düzeltme"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="areas" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-pink-50" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-2xl"
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6"
          >
            <MapPin className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Uygulanan Bölgeler</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Hangi Bölgelere <span className="gradient-text">Uygulanır?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Endolazer ile vücudunuzun farklı bölgelerinde etkili sonuçlar elde edebilirsiniz
          </motion.p>
        </motion.div>

        {/* Treatment Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setHoveredArea(area.id)}
              onMouseLeave={() => setHoveredArea(null)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* 3D Tilt Effect Container */}
              <motion.div
                animate={{
                  rotateX: hoveredArea === area.id ? 5 : 0,
                  rotateY: hoveredArea === area.id ? -5 : 0,
                  z: hoveredArea === area.id ? 50 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${area.color} opacity-60`} />
                  
                  {/* Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {area.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    Detaylı Bilgi
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </motion.div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center p-2 bg-white rounded-full shadow-lg">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Ücretsiz Danışmanlık Al
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentAreas;
