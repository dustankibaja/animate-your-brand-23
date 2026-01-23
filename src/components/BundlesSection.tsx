import { motion } from 'framer-motion';
import { Check, Smartphone, Cloud, Lock, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bundles = [
  {
    id: 'basic',
    name: 'Basic',
    tier: 'Kickstart',
    icon: Zap,
    bestFor: 'Startups, small businesses, MVPs',
    features: [
      'Up to 3 app screens/pages',
      'Pre-designed UI/UX templates',
      'Basic backend setup',
      'User authentication (email or Google)',
      'Basic analytics integration',
      'One revision round',
    ],
    timeline: '2–3 weeks',
    cta: 'Get Started',
    accent: 'from-emerald-500 to-teal-600',
    accentBg: 'bg-emerald-500/10',
    accentBorder: 'border-emerald-500/20',
    accentText: 'text-emerald-400',
  },
  {
    id: 'silver',
    name: 'Silver',
    tier: 'Growth',
    icon: Sparkles,
    bestFor: 'Businesses ready to scale',
    badge: '⭐ Most Popular',
    features: [
      'Everything in Basic',
      'Up to 8 app screens/pages',
      'Fully custom UI/UX design',
      'Advanced backend development',
      'Database integration',
      'Payment gateway integration',
      'API integrations (maps, chat, etc.)',
      'Admin dashboard',
      'Cross-platform support (Android & iOS)',
      'Two revision rounds',
    ],
    timeline: '4–6 weeks',
    cta: 'Build My App',
    accent: 'from-slate-300 to-slate-400',
    accentBg: 'bg-slate-300/10',
    accentBorder: 'border-slate-300/30',
    accentText: 'text-slate-300',
    highlighted: true,
  },
  {
    id: 'gold',
    name: 'Gold',
    tier: 'Enterprise',
    icon: Crown,
    bestFor: 'Enterprises, complex systems, funded startups',
    features: [
      'Everything in Silver',
      '15+ custom app screens/pages',
      'Advanced UI animations & motion design',
      'AI-powered features (chatbots, recommendations, automation)',
      'High-level security implementation',
      'Cloud hosting setup',
      'Performance optimization',
      'App store submission & launch support',
      'Unlimited revisions during development',
      'Maintenance & support (3 months)',
    ],
    timeline: '8–12 weeks',
    cta: 'Create Enterprise App',
    accent: 'from-amber-400 to-yellow-500',
    accentBg: 'bg-amber-500/10',
    accentBorder: 'border-amber-500/20',
    accentText: 'text-amber-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const BundlesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="bundles" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            <Smartphone className="inline-block w-4 h-4 mr-2 -mt-0.5" />
            Flexible Solutions
          </motion.span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            App Development{' '}
            <span className="text-gradient">Bundles</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-balance">
            Flexible mobile and web app solutions designed for startups, growing businesses, and enterprises.
          </p>
        </motion.div>

        {/* Bundle Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {bundles.map((bundle) => {
            const IconComponent = bundle.icon;
            
            return (
              <motion.div
                key={bundle.id}
                variants={itemVariants}
                className={`relative group ${bundle.highlighted ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Highlighted Badge */}
                {bundle.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-gradient-to-r from-slate-200 to-slate-300 text-background shadow-lg">
                      {bundle.badge}
                    </span>
                  </div>
                )}
                
                {/* Card */}
                <div
                  className={`
                    relative h-full rounded-2xl p-6 md:p-8 
                    bg-card/50 backdrop-blur-sm border transition-all duration-500
                    ${bundle.highlighted 
                      ? 'border-slate-400/30 shadow-xl shadow-slate-500/10' 
                      : 'border-border/50 hover:border-primary/30'
                    }
                    group-hover:shadow-2xl group-hover:shadow-primary/5
                    group-hover:-translate-y-2
                  `}
                >
                  {/* Glow Effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-br ${bundle.accent} blur-xl -z-10
                  `} style={{ opacity: 0.05 }} />
                  
                  {/* Card Header */}
                  <div className="mb-6">
                    <div className={`
                      inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4
                      ${bundle.accentBg} ${bundle.accentBorder} border
                    `}>
                      <IconComponent className={`w-7 h-7 ${bundle.accentText}`} />
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        {bundle.name}
                      </h3>
                      <span className={`text-sm font-medium ${bundle.accentText}`}>
                        — {bundle.tier}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      Best for: {bundle.bestFor}
                    </p>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className={`
                          flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5
                          ${bundle.accentBg}
                        `}>
                          <Check className={`w-3 h-3 ${bundle.accentText}`} />
                        </span>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Timeline */}
                  <div className="flex items-center gap-2 mb-6 pb-6 border-b border-border/50">
                    <Cloud className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Delivery timeline: <span className="text-foreground font-medium">{bundle.timeline}</span>
                    </span>
                  </div>
                  
                  {/* CTA */}
                  <div className="space-y-3">
                    <Button
                      onClick={scrollToContact}
                      className={`
                        w-full h-12 font-semibold transition-all duration-300
                        ${bundle.highlighted 
                          ? 'bg-gradient-to-r from-slate-200 to-slate-300 text-background hover:from-slate-100 hover:to-slate-200' 
                          : bundle.id === 'gold'
                            ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-background hover:from-amber-400 hover:to-yellow-400'
                            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        }
                      `}
                    >
                      {bundle.cta}
                    </Button>
                    
                    <p className="text-center text-xs text-muted-foreground">
                      Free consultation · No obligation
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <p className="text-sm md:text-base">
              Need a custom app solution?{' '}
              <span className="text-foreground font-medium">We tailor every project to your business needs.</span>
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Divider Bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default BundlesSection;
