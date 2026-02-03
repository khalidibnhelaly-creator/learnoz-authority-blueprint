import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">
              Learnoz
            </span>
          </div>

          {/* Legal Links - Required */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>

          {/* Copyright + Disclaimer */}
          <div className="text-xs text-muted-foreground max-w-xl">
            © 2026 Learnoz. All rights reserved. Results mentioned are based on student testimonials and individual results may vary. This site is not a part of Facebook or Meta.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
