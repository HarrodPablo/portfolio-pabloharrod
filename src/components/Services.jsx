import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { MonitorSmartphone, Code, Database, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 1,
      icon: <MonitorSmartphone className="w-8 h-8 text-accent-blue" />,
      title: language === 'en' ? 'Custom Web Apps' : 'Aplicaciones Web a Medida',
      description: language === 'en' 
        ? 'Development of internal systems, CRMs, and complex dashboards tailored to specific business needs, ensuring high performance and scalability.' 
        : 'Desarrollo de sistemas internos, CRMs y dashboards complejos adaptados a necesidades empresariales específicas, asegurando alto rendimiento y escalabilidad.',
      glow: 'glow-blue',
      border: 'hover:border-accent-blue/50'
    },
    {
      id: 2,
      icon: <Code className="w-8 h-8 text-accent-violet" />,
      title: language === 'en' ? 'Frontend & UI/UX' : 'Frontend y UI/UX',
      description: language === 'en'
        ? 'Creation of stunning, responsive, and accessible user interfaces. I turn designs into interactive and pixel-perfect web experiences.'
        : 'Creación de interfaces de usuario impresionantes, responsivas y accesibles. Convierto diseños en experiencias web interactivas y perfectas.',
      glow: 'glow-violet',
      border: 'hover:border-accent-violet/50'
    },
    {
      id: 3,
      icon: <Database className="w-8 h-8 text-accent-teal" />,
      title: language === 'en' ? 'Backend & APIs' : 'Backend y APIs',
      description: language === 'en'
        ? 'Design and implementation of robust server architectures, RESTful APIs, and database modeling for secure data management.'
        : 'Diseño e implementación de arquitecturas de servidor robustas, APIs RESTful y modelado de bases de datos para una gestión segura de datos.',
      glow: 'glow-teal',
      border: 'hover:border-accent-teal/50'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-dark-card border-y border-white/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-4 border border-white/10">
            <Rocket className="w-6 h-6 text-accent-blue animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="text-white">
              {language === 'en' ? 'What I Do' : 'Mis Servicios'}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Comprehensive technical solutions to elevate your digital presence and optimize your operations.'
              : 'Soluciones técnicas integrales para elevar tu presencia digital y optimizar tus operaciones.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <Tilt 
                className="h-full"
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                scale={1.02} 
                transitionSpeed={2500}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="1rem"
              >
                <div className={`h-full glass-panel p-8 rounded-2xl border border-white/10 transition-all duration-300 ${service.border} ${service.glow} flex flex-col items-center text-center group cursor-pointer`}>
                  <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
