import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, BookOpen, Shield, Calculator, Target } from "lucide-react";

const SystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      number: "01",
      title: "BNBC-2020 & NFPA-70 Code Mastery",
      description: "Master the foundation of compliant electrical design",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Load Calculation & Cable Sizing",
      description: "Real-world calculation methods for industrial loads",
      icon: Calculator,
    },
    {
      number: "03",
      title: "Substation Design (33kV/11kV) & Protection",
      description: "Design high-voltage systems that pass every audit",
      icon: Zap,
    },
    {
      number: "04",
      title: "Earthing & Grounding Systems",
      description: "Safety-first grounding for industrial applications",
      icon: Shield,
    },
    {
      number: "05",
      title: "Transformer Selection & Rating",
      description: "Choose the right transformer every time",
      icon: Target,
    },
    {
      number: "06",
      title: "Busbar & Panel Design",
      description: "Industrial-grade panel layouts that work",
      icon: Zap,
    },
    {
      number: "07",
      title: "Lightning Protection System (LPS)",
      description: "Risk assessment and protection design",
      icon: Shield,
    },
    {
      number: "08",
      title: "Short Circuit Analysis",
      description: "Calculate and protect against fault currents",
      icon: Calculator,
    },
    {
      number: "09",
      title: "Energy Efficiency & Power Factor",
      description: "Optimize systems for cost and compliance",
      icon: Target,
    },
    {
      number: "10",
      title: "Real-world Project Simulation",
      description: "Complete project with cost estimation",
      icon: BookOpen,
    },
  ];

  const highlights = [
    "Code-Based Design Methodology",
    "RSC Audit Preparation",
    "Real Factory Case Studies",
    "Lifetime Access to Updates",
    "Monthly Live Q&A Sessions",
    "Certificate of Completion",
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-engineering-blue-deep blueprint-pattern overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            THE CURRICULUM
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The Electrical Design Master Course
            <br />
            <span className="text-gradient-yellow">10 Modules to Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-accent font-semibold">Others teach commands. We teach Code-Based Design.</span>
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={module.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group relative p-6 rounded-xl bg-gradient-card border border-engineering-blue-light/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Module Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-accent text-accent-foreground font-heading font-bold flex items-center justify-center text-sm">
                {module.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-engineering-blue-light/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <module.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-engineering-blue/50 border border-engineering-blue-light/20">
            <h3 className="font-heading text-2xl font-bold text-center text-foreground mb-8">
              What Makes This Different?
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemSection;
