import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Kelvin Baraka',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack engineer with 5+ years building scalable web applications. Passionate about using technology to solve African business challenges.',
    image: null,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Amina Hassan',
    role: 'UI/UX Designer',
    bio: 'Creative designer specializing in user-centered design. Transforms complex problems into elegant, intuitive interfaces.',
    image: null,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'David Mwangi',
    role: 'Backend Engineer',
    bio: 'Systems architect with expertise in cloud infrastructure and API development. Builds the robust foundations that power our solutions.',
    image: null,
    linkedin: '#',
    github: '#',
  },
];

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
    <section id="about" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for Africa, Ready for the World
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            KB Softwares was born from a simple observation: African businesses deserve 
            world-class digital products. Too often, companies settle for mediocre solutions 
            because quality seems out of reach or prohibitively expensive.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border/50 bg-card/50"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-display font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Meet the Team
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A small but mighty team of experts dedicated to building exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-accent/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold text-foreground/50">
                    {member.name.charAt(0)}
                  </span>
                </div>
                
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h4 className="font-display text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h4>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {member.bio}
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
          className="flex items-center justify-center gap-2 mt-16 text-muted-foreground"
        >
          <span className="text-2xl">📍</span>
          <span className="text-sm">Based in Dar es Salaam, building for Africa and beyond</span>
        </motion.div>
      </div>
    </section>
  );
}
