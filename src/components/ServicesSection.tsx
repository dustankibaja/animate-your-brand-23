import { motion } from 'framer-motion';
import { Globe, Code, Brain, Smartphone, Compass } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    description: 'Stunning, responsive websites that convert visitors into customers. From landing pages to complex web applications.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'WordPress'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Custom Software Systems',
    description: 'Bespoke software solutions tailored to your unique business processes. ERPs, CRMs, and everything in between.',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
    color: 'accent',
  },
  {
    icon: Brain,
    title: 'AI & Automation Solutions',
    description: 'Harness the power of artificial intelligence to automate workflows, gain insights, and stay ahead of competition.',
    technologies: ['OpenAI', 'LangChain', 'TensorFlow', 'Python'],
    color: 'primary',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'accent',
  },
  {
    icon: Compass,
    title: 'Digital Strategy & Consulting',
    description: 'Expert guidance to help you navigate digital transformation and make technology work for your business goals.',
    technologies: ['Product Strategy', 'UX Research', 'Tech Audits', 'Roadmapping'],
    color: 'primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Services That Drive Growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to launch, we build digital products that solve real problems 
            and create lasting impact for your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-8 rounded-2xl card-gradient border border-border/50 hover:border-${service.color}/50 transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'primary'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-accent/20 text-accent'
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  service.color === 'primary'
                    ? 'shadow-[inset_0_0_60px_-20px_hsl(168_84%_32%/0.3)]'
                    : 'shadow-[inset_0_0_60px_-20px_hsl(24_95%_53%/0.3)]'
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
