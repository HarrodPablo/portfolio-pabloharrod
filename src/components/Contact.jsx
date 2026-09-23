import { ArrowUpRight, Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const GithubIcon = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "w-6 h-6"}
    {...props}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={props.className || "w-6 h-6"}
    {...props}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const { t, language } = useLanguage();
  const contactLinks = [
    {
      name: 'Email',
      value: 'harrod.pablo@gmail.com',
      href: 'mailto:harrod.pablo@gmail.com',
      icon: <Mail className="w-6 h-6 text-accent-blue" />,
      desc: t('contact.emailDesc'),
      hoverBg: 'hover:border-accent-blue/30 hover:bg-accent-blue/5',
      glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/pabloharrod',
      href: 'https://www.linkedin.com/in/pablo-ezequiel-harrod-b172423ab/',
      icon: <LinkedinIcon className="w-6 h-6 text-accent-violet" />,
      desc: t('contact.linkedInDesc'),
      hoverBg: 'hover:border-accent-violet/30 hover:bg-accent-violet/5',
      glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.1)]'
    },
    {
      name: 'GitHub',
      value: 'github.com/pabloharrod',
      href: 'https://github.com',
      icon: <GithubIcon className="w-6 h-6 text-emerald-400" />,
      desc: t('contact.githubDesc'),
      hoverBg: 'hover:border-emerald-500/30 hover:bg-emerald-500/5',
      glow: 'hover:shadow-[0_0_25px_rgba(52,211,153,0.1)]'
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden bg-dark-bg">
      {/* Decorative ambient bubble */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-panel border border-white/5 text-sm font-bold text-accent-violet font-brand mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            {t('contact.title1')} <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">{t('contact.title2')}</span>
          </h2>
          <p className="max-w-md mx-auto text-gray-400 text-sm sm:text-base font-light">
            {t('contact.desc')}
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-panel border border-white/5 transition-all duration-300 transform hover:-translate-y-1 ${link.hoverBg} ${link.glow}`}
            >
              <div>
                {/* Header Icon + Arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-dark-border/40 rounded-xl border border-white/5 flex items-center justify-center">
                    {link.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>

                {/* Info */}
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {link.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light mb-4">
                  {link.desc}
                </p>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white border-t border-white/5 pt-4 block truncate">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Functional Contact Form using Formspree */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-violet/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6 relative z-10 text-center">
              {language === 'en' ? 'Send me a message' : 'Envíame un mensaje'}
            </h3>
            
            {/* Formspree / Web3Forms Structure. The user just needs to add their Action URL */}
            <form action="https://formspree.io/f/YOUR_FORM_ID_HERE" method="POST" className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                    {language === 'en' ? 'Name' : 'Nombre'}
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder={language === 'en' ? 'John Doe' : 'Juan Pérez'}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
                  {language === 'en' ? 'Message' : 'Mensaje'}
                </label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required 
                  className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder={language === 'en' ? 'How can I help you?' : '¿En qué te puedo ayudar?'}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:opacity-90 transition-opacity duration-300 shadow-lg group cursor-pointer"
              >
                <span>{language === 'en' ? 'Send Message' : 'Enviar Mensaje'}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
