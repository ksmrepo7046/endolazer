import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "0551 090 8403",
      href: "tel:+905510908403",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@endolazermersin.com",
      href: "mailto:info@endolazermersin.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Mersin, Türkiye",
      href: "#",
      color: "from-red-400 to-rose-500",
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pzt-Cum: 09:00 - 18:00",
      href: "#",
      color: "from-purple-400 to-violet-500",
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
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
            x: [0, -40, 0],
            y: [0, 40, 0],
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
            <MessageSquare className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-medium text-gray-300">İletişim</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Bizimle <span className="text-pink-400">İletişime Geçin</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Ücretsiz danışmanlık için bize ulaşın
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              İletişim Bilgileri
            </h3>
            <p className="text-gray-400 mb-8">
              Uzman doktorumuz ve ekibimiz size yardımcı olmaktan mutluluk duyar.
              Randevu almak veya bilgi almak için bize ulaşabilirsiniz.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group p-5 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Doctor Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl border border-pink-500/30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Uzman Dr. Namık Kemal Erdoğan</h4>
                  <p className="text-gray-400">Medikal Estetik ve Genel Cerrahi Uzmanı</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Bize Mesaj Gönderin
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-white text-xl font-bold mb-2">Mesajınız Gönderildi!</h4>
                  <p className="text-gray-400">En kısa sürede size dönüş yapacağız.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Ad Soyad</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Adınız Soyadınız"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-pink-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Telefon</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="05XX XXX XXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-pink-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">E-posta</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-pink-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Mesajınız</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                      <Textarea
                        id="message"
                        placeholder="Mesajınızı yazın..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="pl-10 min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-pink-500 resize-none"
                        required
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-6 rounded-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Mesaj Gönder
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
