import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Shield, Clock, Award, CheckCircle, Sparkles } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Zap,
      title: "Çift Etki",
      description: "Hem yağ dokusunu azaltır hem de cildi sıkılaştırır",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Güvenli",
      description: "Ameliyatsız, kesiksiz ve dikişsiz uygulama",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Clock,
      title: "Hızlı İyileşme",
      description: "Aynı gün günlük rutinine dönebilirsiniz",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Award,
      title: "Uzun Süreli Etki",
      description: "Kolajen üretimi 3 yıl boyunca devam eder",
      color: "from-purple-400 to-violet-500",
    },
  ];

  const benefits = [
    "Gıdı bölgesinde keskin kontur oluşturur",
    "Doğal ve dengeli sonuçlar",
    "Yüz ovalini belirginleştirir",
    "Sarkmaları toparlar",
    "Cildi daha gergin gösterir",
    "Bağ dokuları güçlendirir",
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Endolazer Hakkında</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Endolazer <span className="gradient-text">Nedir?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Son yıllarda estetik tıpta en hızlı yükselen uygulamalardan biri olan Endolazer,
            özellikle gıdı bölgesindeki yağlanma, sarkma ve kontur kaybı gibi estetik sorunlara
            ameliyatsız bir yaklaşım sunar.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative perspective-1000">
              {/* 3D Card Effect */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl preserve-3d"
              >
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=600&fit=crop"
                  alt="Endolazer Uygulaması"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent" />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold gradient-text">3 Yıl</p>
                    <p className="text-gray-500 text-sm">Kalıcı Etki</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-16 h-16"
              >
                <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-400 rounded-lg opacity-60" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Nasıl Çalışır?
            </h3>
            <p className="text-gray-600 mb-6">
              Endolazer, cilt altına yerleştirilen ince bir kanül aracılığıyla dokulara yönlendirilen
              özel bir lazer enerjisi kullanır. Bu enerji iki temel etki sağlar:
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Yağ Dokusu Eritme</h4>
                  <p className="text-gray-600 text-sm">
                    Lazer ışığı yağ hücrelerini hedef alır ve kontrollü bir şekilde parçalanmasını sağlar.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-start space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Kolajen Üretimi</h4>
                  <p className="text-gray-600 text-sm">
                    Cildi sıkılaştırır ve yeni kolajen üretimini uyararak yüzü yukarı doğru kaldırır.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Benefits List */}
            <h4 className="font-semibold text-gray-800 mb-3">Avantajları:</h4>
            <div className="grid grid-cols-2 gap-2">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all preserve-3d"
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>

              {/* Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
