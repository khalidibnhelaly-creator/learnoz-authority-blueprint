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
      objection: "আরেকটা কোর্সের জন্য আমার সময় নেই",
      answer: "অ্যাসেসমেন্টে মাত্র ৫ মিনিট লাগে। পুরো কোর্সটি সেলফ-পেসড, যা আপনি যাতায়াতের সময় বা লাঞ্চ ব্রেকে সম্পন্ন করতে পারবেন।",
    },
    {
      icon: ShieldCheck,
      objection: "এটা কি সত্যিই অডিট পাস করতে সাহায্য করবে?",
      answer: "আমাদের স্টুডেন্টদের ৯৮% অডিট পাস রেট রয়েছে। আপনি BNBC-2020 এবং NFPA-70 এর সেই সঠিক রিকোয়ারমেন্টগুলো শিখবেন যা অডিটররা চেক করেন।",
    },
    {
      icon: GraduationCap,
      objection: "আমার তো ইইই তে ডিগ্রি আছে",
      answer: "ইউনিভার্সিটিতে থিওরি পড়ানো হয়। আমরা কোড-বেসড ডিসিশন মেকিং শেখাই যা ৯০% গ্র্যাজুয়েটের নেই—যে স্কিলগুলো আপনাকে চাকরি এবং প্রমোশন পেতে সাহায্য করবে।",
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
            আপনার মনে হয়তো প্রশ্ন আছে...
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
