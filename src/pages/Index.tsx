import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import DiagnosisSection from "@/components/landing/DiagnosisSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import SystemSection from "@/components/landing/SystemSection";
import OfferSection from "@/components/landing/OfferSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="diagnosis">
          <DiagnosisSection />
        </section>
        <section id="authority">
          <AuthoritySection />
        </section>
        <section id="curriculum">
          <SystemSection />
        </section>
        <section id="offer">
          <OfferSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
