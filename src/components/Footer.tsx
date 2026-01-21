import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Instagram, Heart } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Custom Software', href: '#services' },
    { name: 'AI Solutions', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Consulting', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/kbsoftwares', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/kbsoftwares', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/kbsoftwares', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/kbsoftware_tz/', label: 'Instagram' },
];

export default function Footer() {
  return (
<footer className="border-t border-border/50 bg-card/30">
      <div className="section-container py-10 md:py-16 px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-display font-bold text-primary-foreground text-base md:text-lg">KB</span>
              </div>
              <span className="font-display font-semibold text-lg md:text-xl text-foreground">
                Softwares
              </span>
            </a>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-sm mb-5 md:mb-6">
              Tanzania's premier tech studio building world-class digital products. 
              We transform bold ideas into elegant solutions that drive business growth.
            </p>
            <div className="flex items-center gap-2 md:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 md:w-10 md:h-10 rounded-xl md:rounded-lg bg-muted hover:bg-primary/20 active:bg-primary/30 text-muted-foreground hover:text-primary active:text-primary transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Services</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs md:text-sm py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Company</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs md:text-sm py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal - Hidden on smallest screens, shown in footer bottom */}
          <div className="hidden md:block">
            <h4 className="font-display font-semibold text-foreground text-sm md:text-base mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2.5 md:space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs md:text-sm py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-border/50 flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs md:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} KB Softwares. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs md:text-sm flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 fill-red-500" /> in Dar es Salaam
            </p>
          </div>
          {/* Mobile legal links */}
          <div className="flex md:hidden items-center justify-center gap-4 text-xs text-muted-foreground">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-primary active:text-primary py-1">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
