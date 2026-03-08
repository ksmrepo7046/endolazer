import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Endolazer nedir ve nasıl çalışır?",
      answer: "Endolazer, cilt altına yerleştirilen ince bir kanül aracılığıyla dokulara yönlendirilen özel bir lazer enerjisi kullanır. Bu enerji yağ hücrelerini parçalayıp eritirken, aynı zamanda kolajen üretimini uyararak cildi sıkılaştırır.",
    },
    {
      question: "Endolazer ağrılı bir işlem midir?",
      answer: "Endolazer işlemi lokal anestezi altında yapıldığı için ağrı hissi minimum düzeydedir. İşlem sonrası hafif bir hassasiyet olabilir ancak bu kısa sürede geçer.",
    },
    {
      question: "İşlem ne kadar sürer?",
      answer: "Endolazer uygulaması genellikle 30-60 dakika sürmektedir. Uygulanan bölgeye göre süre değişiklik gösterebilir.",
    },
    {
      question: "İyileşme süreci nasıldır?",
      answer: "İşlem sonrası hafif ödem ve morluk görülebilir. Çoğu hasta aynı gün veya ertesi gün günlük aktivitelerine dönebilir. Tam sonuçlar 1-3 ay içinde belirginleşir.",
    },
    {
      question: "Kimler Endolazer için uygundur?",
      answer: "Gıdı bölgesinde yağlanma, sarkma veya gevşeklik yaşayanlar, çene hattını belirginleştirmek isteyenler, cerrahi işlem istemeyen ancak etkili bir sonuç arayanlar Endolazer için ideal adaylardır.",
    },
    {
      question: "Sonuçlar kalıcı mıdır?",
      answer: "Evet, Endolazer sonuçları kalıcıdır. Kolajen üretimi uygulamadan sonraki 3 yıl boyunca devam eder. Kalıcı sonuçlar için sağlıklı bir yaşam tarzı sürdürülmesi önerilir.",
    },
    {
      question: "Yan etkileri var mıdır?",
      answer: "Endolazer güvenli bir işlemdir. Geçici yan etkiler arasında hafif ödem, morluk ve hassasiyet sayılabilir. Ciddi yan etkiler nadirdir.",
    },
    {
      question: "Kaç seans gereklidir?",
      answer: "Genellikle tek seans yeterli olmaktadır. Ancak kişinin durumuna ve hedeflerine göre ek seanslar önerilebilir.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-pink-50/50 to-white" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <HelpCircle className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Sıkça Sorulan Sorular</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
          >
            Sıkça Sorulan <span className="gradient-text">Sorular</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Endolazer hakkında merak ettiğiniz soruların cevapları
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500'
                      : 'bg-gray-100'
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-colors ${
                      openIndex === index ? 'text-white' : 'text-gray-500'
                    }`}
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 pt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 shadow-xl">
            <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Başka Sorularınız mı Var?
            </h3>
            <p className="text-white/80 mb-6">
              Uzman kadromuz size yardımcı olmaktan mutluluk duyar
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Bize Ulaşın
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
