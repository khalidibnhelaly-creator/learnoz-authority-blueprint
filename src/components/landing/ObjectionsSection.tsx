import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ShieldCheck, GraduationCap } from "lucide-react";

const ObjectionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // 3 objections ordered from most common to least common
  const objections = [
    {
      icon: Clock,
      objection: "I don't have time for another course",
      answer: "The assessment takes 5 minutes. The full course is self-paced with modules you can complete during commute or lunch breaks.",
    },
    {
      icon: ShieldCheck,
      objection: "Will this actually help me pass audits?",
      answer: "Our students report a 98% audit pass rate. You'll learn the exact BNBC-2020 and NFPA-70 requirements that auditors check.",
    },
    {
      icon: GraduationCap,
      objection: "I already have a degree in EEE",
      answer: "Universities teach theory. We teach the code-based decision making that 90% of graduates are missing—the skills that get you hired and promoted.",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Simple heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12"
          >
            You Might Be Wondering...
          </motion.h2>

          {/* 3 Objection-handling bullets */}
          <div className="space-y-6">
            {objections.map((item, index) => (
              <motion.div
                key={item.objection}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    "{item.objection}"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
