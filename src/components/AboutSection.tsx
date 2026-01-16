import { motion } from 'framer-motion';

const values = [
  {
    title: 'Quality Over Quantity',
    description: 'We take on fewer projects to deliver exceptional results. Every line of code is crafted with care.',
  },
  {
    title: 'Partnership Mindset',
    description: 'We\'re not just vendors—we\'re invested partners who succeed when you succeed.',
  },
  {
    title: 'Innovation First',
    description: 'We stay ahead of technology curves to bring cutting-edge solutions to the African market.',
  },
  {
    title: 'Transparent Communication',
    description: 'No jargon, no surprises. Clear updates and honest conversations throughout every project.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4 mb-4 md:mb-6">
            Built for Africa, Ready for the World
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 md:mb-6 px-2">
            KB Softwares was born from a simple observation: African businesses deserve 
            world-class digital products. Too often, companies settle for mediocre solutions 
            because quality seems out of reach or prohibitively expensive.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed px-2">
            Based in Dar es Salaam, we combine local market understanding with global 
            technical standards. Our mission is to be the bridge that brings Silicon Valley 
            quality to East African enterprises—at prices that make sense for our market.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 md:p-6 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-sm md:text-lg mb-3 md:mb-4">
                {index + 1}
              </div>
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mt-12 md:mt-16 text-muted-foreground"
        >
          <span className="text-xl md:text-2xl">📍</span>
          <span className="text-xs md:text-sm text-center">Based in Dar es Salaam, building for Africa and beyond</span>
        </motion.div>
      </div>
    </section>
  );
}
