import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ObjectionsSection from "@/components/landing/ObjectionsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ObjectionsSection />
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
