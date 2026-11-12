import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(1, 'Message is required').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const details = result.data;
    const message = [
      'Hello KB Softwares! I would like to discuss a project.',
      `Name: ${details.name}`,
      `Email: ${details.email}`,
      details.company ? `Company: ${details.company}` : '',
      details.projectType ? `Project type: ${details.projectType}` : '',
      details.budget ? `Budget (USD): ${details.budget}` : '',
      `Project details: ${details.message}`,
    ].filter(Boolean).join('\n');
    const url = `https://wa.me/255759340243?text=${encodeURIComponent(message)}`;
    setIsSubmitting(false);
    window.location.assign(url);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 md:mt-4 mb-4 md:mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-2">
            Ready to transform your business with technology? Tell us about your project, 
            and continue the conversation with us on WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 md:space-y-6">
                <a
                  href="https://wa.me/255759340243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 active:scale-[0.98] transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-muted-foreground">WhatsApp</div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors text-sm md:text-base truncate">
                      +255 759 340 243
                    </div>
                  </div>
                </a>


                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground font-medium text-sm md:text-base">
                      Dar es Salaam, Tanzania
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
              <h4 className="font-display font-semibold text-foreground mb-2 text-sm md:text-base">
                Prefer a quick chat?
              </h4>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                WhatsApp is often the fastest way to reach us. Click to start a conversation!
              </p>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white w-full"
              >
                <a
                  href="https://wa.me/255759340243"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    className={`bg-card border-border/50 focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@company.com"
                    className={`bg-card border-border/50 focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company / Organization
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  placeholder="Acme Inc."
                  className="bg-card border-border/50 focus:border-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <Select value={formData.projectType} onValueChange={(value) => handleChange('projectType', value)}>
                    <SelectTrigger className="bg-card border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="software">Custom Software</SelectItem>
                      <SelectItem value="ai">AI & Automation</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="consulting">Consulting</SelectItem>
                      <SelectItem value="other">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                    Budget Range
                  </label>
                  <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                    <SelectTrigger className="bg-card border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="<5k">Less than $5,000</SelectItem>
                      <SelectItem value="5k-20k">$5,000 - $20,000</SelectItem>
                      <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Describe your project, goals, and any specific requirements..."
                  rows={5}
                  className={`bg-card border-border/50 focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                <p className="text-muted-foreground text-xs mt-1">{formData.message.length}/1000 characters</p>
              </div>

              <p className="text-muted-foreground text-sm">Your details will be placed in a WhatsApp message. Review and send it in WhatsApp; this form does not send a message automatically.</p>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 active:bg-primary/80 text-primary-foreground font-semibold py-5 md:py-6 glow-effect"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                    Preparing...
                  </>
                ) : (
                  <>
                    Continue on WhatsApp
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
