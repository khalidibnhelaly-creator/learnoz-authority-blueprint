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
              লার্নোজ
            </span>
          </div>

          {/* Legal Links - Required */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-accent transition-colors">গোপনীয়তা নীতি</a>
            <a href="#" className="hover:text-accent transition-colors">সেবার শর্তাবলী</a>
            <a href="#" className="hover:text-accent transition-colors">যোগাযোগ</a>
          </div>

          {/* Copyright + Disclaimer */}
          <div className="text-xs text-muted-foreground max-w-xl">
            © ২০২৬ লার্নোজ। সর্বস্বত্ব সংরক্ষিত। উল্লিখিত ফলাফলগুলো শিক্ষার্থীদের অভিজ্ঞতার উপর ভিত্তি করে এবং ব্যক্তিভেদে ভিন্ন হতে পারে। এই সাইটটি Facebook বা Meta এর অংশ নয়।
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
