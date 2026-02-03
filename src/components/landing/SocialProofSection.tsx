import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Factory, Shield, Users } from "lucide-react";
import mentorImage from "@/assets/mentor-portrait.jpg";

const SocialProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { icon: Factory, value: "25+", label: "Factory Projects" },
    { icon: Shield, value: "98%", label: "Audit Pass Rate" },
    { icon: Users, value: "3,000+", label: "Engineers Trained" },
  ];

  const testimonials = [
    {
      quote: "I failed 5 interviews before Learnoz. Now I lead a design team.",
      name: "Md. Rahman Khan",
      role: "Senior Electrical Engineer",
    },
    {
      quote: "My audit pass rate went from 40% to 98%. This changed everything.",
      name: "Tanvir Ahmed",
      role: "Compliance Manager",
    },
    {
      quote: "From draftsman to designer in 3 months. Worth every taka.",
      name: "Fatima Akter",
      role: "Project Engineer",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mentor brief */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6 mb-12"
          >
            <img
              src={mentorImage}
              alt="Engr. Sahidul Islam"
              className="w-24 h-24 rounded-full object-cover border-4 border-accent"
            />
            <div className="text-center md:text-left">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Created by Engr. Sahidul Islam
              </h3>
              <p className="text-muted-foreground">
                25+ years of industrial electrical design experience, RSC Audit Expert
              </p>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-background border border-border/50">
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Testimonial slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative bg-background rounded-2xl p-8 border border-border/50"
          >
            <Quote className="w-8 h-8 text-accent/30 absolute top-4 right-4" />
            
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="text-lg md:text-xl italic text-foreground mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div>
                <div className="font-heading font-bold text-accent">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-accent" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
