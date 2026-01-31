import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-engineering-blue-deep border-t border-border/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">
              Learnoz
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
            <a href="#" className="hover:text-accent transition-colors">FAQ</a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2026 Learnoz. All rights reserved.
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Learnoz is an educational platform focused on industrial electrical design. 
            Results mentioned are based on student testimonials and individual results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
