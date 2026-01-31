import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Factory, Shield, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import mentorImage from "@/assets/mentor-portrait.jpg";

const AuthoritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { icon: Factory, value: "25+", label: "Major Factory Projects" },
    { icon: Shield, value: "RSC", label: "Audit Expert" },
    { icon: Users, value: "3,000+", label: "Students Mentored" },
  ];

  const testimonials = [
    {
      quote: "I failed 5 interviews before Learnoz. Now I lead a design team at one of Bangladesh's largest manufacturing plants.",
      name: "Md. Rahman Khan",
      role: "Senior Electrical Engineer",
    },
    {
      quote: "The code-based approach completely changed how I think about electrical design. I went from draftsman to designer in 3 months.",
      name: "Fatima Akter",
      role: "Project Engineer",
    },
    {
      quote: "Finally, someone teaching what the industry actually needs. My audit pass rate went from 40% to 98%.",
      name: "Tanvir Ahmed",
      role: "Compliance Manager",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="relative py-24 lg:py-32 metallic-texture overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-engineering-blue/10 text-engineering-blue text-sm font-semibold mb-4">
            YOUR MENTOR
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-blue-deep">
            Bridging the Gap Between
            <br />
            <span className="text-engineering-blue">Academic Theory & Industrial Reality</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={mentorImage}
                  alt="Engr. Sahidul Islam"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-engineering-blue-deep/60 via-transparent to-transparent" />
              </div>

              {/* Name Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-engineering-blue-deep/90 backdrop-blur-sm rounded-xl p-4 border border-engineering-blue-light/20">
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Engr. Sahidul Islam
                </h3>
                <p className="text-muted-foreground text-sm">
                  Industrial Electrical Design Expert
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent rounded-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-engineering-blue/10 rounded-xl -z-10" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white shadow-md border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-engineering-blue mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-engineering-blue-deep">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Story + Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Story */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "When I graduated with my EEE degree, I thought I was ready. I wasn't. My first industrial project was a disaster—not because I couldn't draw, but because I didn't understand <strong>why</strong> I was drawing."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "I learned the hard way: through failed audits, angry supervisors, and near-misses that could have closed factories. It took me years to bridge the gap between what universities teach and what the industry demands."
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Now, I've condensed 25+ years of industrial experience into a system that can transform any engineer from a 'line drawer' to a <strong>decision-making designer</strong> in months, not years."
              </p>
            </div>

            {/* Testimonial Slider */}
            <div className="relative bg-engineering-blue-deep rounded-2xl p-8 text-foreground">
              <Quote className="w-10 h-10 text-accent/30 absolute top-4 right-4" />
              
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg italic mb-6 leading-relaxed">
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
              <div className="flex gap-2 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="flex gap-2 ml-auto items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === activeTestimonial ? "bg-accent" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
