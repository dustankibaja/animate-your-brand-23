import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'Three.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI & ML',
    technologies: ['OpenAI', 'LangChain', 'TensorFlow', 'Hugging Face', 'Python'],
  },
  {
    title: 'Cloud & DevOps',
    technologies: ['AWS', 'Vercel', 'Docker', 'GitHub Actions', 'Kubernetes'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business, understand your challenges, and define a clear roadmap for success.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Collaborative design sessions to create intuitive interfaces that users love and stakeholders approve.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing ensures quality code and on-time delivery.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Smooth deployment followed by ongoing maintenance and support to keep you running.',
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Technology
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built with the Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use modern, battle-tested technologies that ensure your product is 
            fast, secure, and ready to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border/50 bg-card/50"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            How We Work
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
