import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                লার্নোজ
              </span>
            </a>

            {/* Simple CTA - Desktop only */}
            <Button 
              variant="cta" 
              size="sm" 
              onClick={scrollToForm}
              className="hidden sm:flex"
            >
              বিনামূল্যে অ্যাসেসমেন্ট
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background/95 backdrop-blur-md border-t border-border/20 p-3">
        <Button variant="cta" size="default" className="w-full" onClick={scrollToForm}>
          বিনামূল্যে অ্যাসেসমেন্ট নিন
        </Button>
      </div>
    </>
  );
};

export default Navbar;
