import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-lg">KB</span>
          </div>
          <span className="font-display font-semibold text-xl text-foreground">
            Softwares
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="link-underline text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          >
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-3 -mr-2 text-foreground rounded-xl active:bg-muted/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
          >
            <div className="flex flex-col p-5 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-muted-foreground hover:text-foreground active:text-primary transition-colors duration-200 text-base font-medium py-3.5 px-4 rounded-xl hover:bg-muted/50 active:bg-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="pt-3 mt-2 border-t border-border/50"
              >
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 active:scale-[0.98] text-primary-foreground font-medium h-12 text-base rounded-xl transition-transform"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Start Your Project
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
