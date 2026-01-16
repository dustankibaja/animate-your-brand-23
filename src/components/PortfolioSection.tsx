import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'FinFlow Banking Platform',
    category: 'Fintech',
    description: 'A comprehensive digital banking solution enabling seamless mobile payments, account management, and financial insights for over 50,000 users across East Africa.',
    challenge: 'Traditional banking processes were slow and inaccessible to remote communities.',
    solution: 'Built a mobile-first platform with offline capabilities and USSD integration.',
    results: ['50K+ active users', '40% faster transactions', '98% uptime'],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    image: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)',
  },
  {
    title: 'LogiTrack Delivery System',
    category: 'Logistics',
    description: 'Real-time fleet management and delivery tracking system that optimizes routes and provides customers with live updates on their shipments.',
    challenge: 'Manual dispatch processes led to delays and poor customer communication.',
    solution: 'AI-powered route optimization with real-time GPS tracking and automated notifications.',
    results: ['30% fuel savings', '2x faster deliveries', '45% fewer complaints'],
    technologies: ['Next.js', 'Python', 'TensorFlow', 'Google Maps API'],
    image: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  },
  {
    title: 'MediConnect Health Portal',
    category: 'Healthcare',
    description: 'Telemedicine platform connecting patients with healthcare providers through video consultations, prescription management, and health records.',
    challenge: 'Limited access to quality healthcare in underserved regions.',
    solution: 'HIPAA-compliant telemedicine platform with low-bandwidth video capabilities.',
    results: ['10K+ consultations', '60% reduced wait times', '4.8★ patient rating'],
    technologies: ['React', 'WebRTC', 'MongoDB', 'Docker'],
    image: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Projects That Make an Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project tells a story of challenges overcome and value delivered. 
            Here's a glimpse of what we've built for our partners.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image/Visual */}
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="font-display text-3xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <h4 className="font-display text-2xl font-semibold text-white mb-2">
                        {project.title}
                      </h4>
                      <span className="text-white/80 text-sm">{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="border-foreground/30 hover:border-primary hover:bg-primary/10 text-foreground"
                    >
                      View Case Study
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">The Challenge</h4>
                    <p className="text-muted-foreground text-sm">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Our Solution</h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.results.map((result, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
