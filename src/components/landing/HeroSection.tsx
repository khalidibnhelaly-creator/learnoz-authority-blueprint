import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heroImage from "@/assets/hero-split.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Lead captured:", { name, email });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with outcome-focused image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional electrical design result"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - Stops user, promises clear outcome */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Become an Audit-Ready
            <br />
            <span className="text-gradient-yellow">Industrial Electrical Designer</span>
          </motion.h1>

          {/* Sub-headline - Adds context and clarifies promise */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Get the free skill assessment that shows exactly where your design knowledge gaps are—and how to fix them in 90 days.
          </motion.p>

          {/* Hero Image - Visual proof of outcome */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-10"
          >
            <div className="relative mx-auto max-w-md rounded-xl overflow-hidden border border-border/50 shadow-lg">
              <img
                src={heroImage}
                alt="Code-compliant electrical design example"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">What You'll Achieve</span>
                <p className="text-sm text-foreground font-medium">BNBC-2020 & NFPA-70 Compliant Designs</p>
              </div>
            </div>
          </motion.div>

          {/* Lead Capture Form - Minimal fields */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
          >
            <Input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 text-base bg-card border-border/50 placeholder:text-muted-foreground/60"
              required
            />
            <Input
              type="email"
              placeholder="Your best email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-base bg-card border-border/50 placeholder:text-muted-foreground/60"
              required
            />
            
            {/* CTA - States what user gets and how */}
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Get My Free Skill Assessment
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.form>

          {/* Justification - Why give email */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground mt-4"
          >
            ✓ Free 5-minute assessment · ✓ Personalized gap report · ✓ No spam, ever
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
