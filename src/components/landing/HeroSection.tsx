import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-split.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-pattern">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electrical Engineering Transformation"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-engineering-blue-deep via-engineering-blue-deep/95 to-engineering-blue-deep/80" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 industrial-grid opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-engineering-blue/50 border border-engineering-blue-light/30 text-sm text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Industrial Electrical Design Mastery
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mb-6"
          >
            Stop Drawing Lines.
            <br />
            <span className="text-gradient-yellow">Start Engineering Safety.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
          >
            Most engineers are stuck in the <span className="text-foreground font-semibold">'Draftsman Trap.'</span> Learn the Decision-Making System that protects careers and prevents factory closures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Check My Skill Gap
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroSecondary" size="xl" className="w-full sm:w-auto">
              <Play className="w-5 h-5" />
              Watch the Manifesto
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground mb-4">Trusted by engineers at leading industries</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {["RMG Sector", "Power Plants", "Manufacturing", "Construction"].map((name) => (
                <span key={name} className="font-heading text-lg tracking-wider text-foreground/70">{name}</span>
              ))}
            </div>
          </motion.div>
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
