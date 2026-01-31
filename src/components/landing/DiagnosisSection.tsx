import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, BookOpen, TrendingDown } from "lucide-react";

const DiagnosisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: BookOpen,
      title: "Universities teach theory",
      description: "They don't teach real-world application of BNBC-2020 or NFPA-70 codes."
    },
    {
      icon: AlertTriangle,
      title: "Graduates draw, they don't design",
      description: "There's a massive gap between academic drawings and compliant industrial design."
    },
    {
      icon: TrendingDown,
      title: "The industry loses patience",
      description: "HR won't wait for you to 'figure it out.' They need audit-ready engineers today."
    }
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
      {/* Caution Tape Top */}
      <div className="absolute top-0 left-0 right-0 h-4 caution-tape-thin" />
      
      {/* Caution Tape Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 caution-tape-thin" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/20 text-destructive text-sm font-semibold mb-4">
            THE INDUSTRY PROBLEM
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-blue-deep mb-6">
            Why Do 90% of Electrical Engineers
            <br />
            <span className="text-destructive">Fail the Industry Test?</span>
          </h2>
        </motion.div>

        {/* Diploma Trap Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-16"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-400">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-caution-orange text-engineering-blue-deep font-bold text-sm rounded-full">
              THE PAPER ENGINEER TRAP
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded-sm shadow-lg transform rotate-3 flex items-center justify-center border border-amber-300">
                  <div className="text-center p-4">
                    <div className="text-xs text-amber-800 font-heading uppercase tracking-wider mb-2">Certificate</div>
                    <div className="text-lg font-bold text-engineering-blue-deep">B.Sc. EEE</div>
                    <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-2" />
                  </div>
                </div>
                {/* Cobweb Effect */}
                <svg className="absolute -top-4 -right-4 w-16 h-16 text-gray-400 opacity-50" viewBox="0 0 64 64">
                  <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M32 8 L56 32 L32 56 L8 32 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M32 16 L48 32 L32 48 L16 32 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            <p className="text-center text-engineering-blue-deep/80 mt-6 font-medium">
              "A degree opens doors. But only <strong>real skills</strong> keep them open."
            </p>
          </div>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-engineering-blue/10 flex items-center justify-center mb-4 group-hover:bg-destructive/10 transition-colors">
                <problem.icon className="w-7 h-7 text-engineering-blue group-hover:text-destructive transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-engineering-blue-deep mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
