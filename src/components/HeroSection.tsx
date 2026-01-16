import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      <Suspense fallback={<div className="absolute inset-0 bg-[#0a0a0f]" />}>
        <Scene3D />
      </Suspense>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-10 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-20 section-container text-center py-12 md:py-20 mt-16 px-4">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 md:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary">Premium Digital Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 max-w-5xl mx-auto leading-tight"
        >
          Building Digital Products That{' '}
          <span className="text-gradient-primary">Work as Hard</span> as They Look
        </motion.h1>

        <motion.p
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
        >
          Tanzania's premier tech studio crafting sleek websites, powerful software systems, 
          and AI-driven solutions for modern businesses across Africa and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg group glow-effect w-full sm:w-auto"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-muted-foreground/30 hover:border-primary hover:bg-primary/10 text-foreground font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
          >
            <a href="#portfolio">See Our Work</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-3 md:p-0">
              <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
