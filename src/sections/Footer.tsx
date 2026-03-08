import { motion } from 'framer-motion';
import { Sparkles, Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Endolazer Hakkında', href: '#about' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Uygulanan Bölgeler', href: '#areas' },
    { label: 'SSS', href: '#faq' },
    { label: 'İletişim', href: '#contact' },
  ];

  const services = [
    { label: 'Yüz Germe', href: '#areas' },
    { label: 'Gıdı Eritme', href: '#areas' },
    { label: 'Cilt Gençleştirme', href: '#areas' },
    { label: 'Vücut Şekillendirme', href: '#areas' },
    { label: 'Jinekomasti', href: '#areas' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#fdf2f8" />
              <stop offset="50%" stopColor="#fce7f3" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a href="#hero" className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-pink-500" />
                <span className="text-2xl font-bold text-white">
                  ENDO<span className="text-pink-500">LAZER</span>
                </span>
              </a>
              <p className="text-gray-400 text-sm mb-6">
                Ameliyatsız yüz germe, gıdı eritme ve cilt gençleştirme işlemlerinde
                uzman kadromuzla hizmetinizdeyiz.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.label}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">İletişim</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Telefon</p>
                    <a href="tel:+905510908403" className="text-white hover:text-pink-400 transition-colors">
                      0551 090 8403
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">E-posta</p>
                    <a href="mailto:info@endolazermersin.com" className="text-white hover:text-pink-400 transition-colors">
                      info@endolazermersin.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">Adres</p>
                    <p className="text-white">Mersin, Türkiye</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Endolazer Mersin. Tüm hakları saklıdır.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-pink-500 mx-1" fill="currentColor" /> in Mersin
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
