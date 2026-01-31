import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, Gift, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Countdown timer (3 days from now)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const includes = [
    "Lifetime Access to 10 Comprehensive Modules",
    "50+ Hours of HD Video Content",
    "Downloadable Project Templates",
    "Private Community Access",
    "Monthly Face-to-Face Authority Workshop Invite",
    "Priority Email Support",
  ];

  const bonuses = [
    {
      title: "The BNBC-2020 Audit Checklist",
      description: "Never fail an audit again with this comprehensive checklist",
      value: "৳5,000",
    },
    {
      title: "Cable & Conduit Calculator",
      description: "Excel-based tool for instant calculations",
      value: "৳3,000",
    },
    {
      title: "Factory Layout Templates",
      description: "Ready-to-use AutoCAD templates for common layouts",
      value: "৳4,000",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-accent overflow-hidden">
      {/* Caution pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="caution-tape h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-engineering-blue-deep mb-4">
            Secure Your Career.
            <br />
            Master the Standard.
          </h2>
          <p className="text-lg text-engineering-blue-deep/80 max-w-2xl mx-auto">
            Join 3,000+ engineers who have transformed their careers with code-based design mastery.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { value: timeLeft.days, label: "Days" },
            { value: timeLeft.hours, label: "Hours" },
            { value: timeLeft.minutes, label: "Minutes" },
            { value: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-engineering-blue-deep text-foreground flex items-center justify-center font-heading text-2xl md:text-3xl font-bold">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs md:text-sm text-engineering-blue-deep/70 mt-2 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-foreground rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-engineering-blue-deep p-8 text-center">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                The Electrical Design Master Course
              </h3>
              <p className="text-muted-foreground">Complete Access Package</p>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              {/* What's Included */}
              <div className="mb-10">
                <h4 className="font-heading text-xl font-bold text-engineering-blue-deep mb-6 flex items-center gap-2">
                  <Check className="w-6 h-6 text-success" />
                  What's Included
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {includes.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-10">
                <h4 className="font-heading text-xl font-bold text-engineering-blue-deep mb-6 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-caution-orange" />
                  Exclusive Bonuses (Free)
                </h4>
                <div className="grid gap-4">
                  {bonuses.map((bonus) => (
                    <div
                      key={bonus.title}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <div>
                        <div className="font-semibold text-engineering-blue-deep">
                          {bonus.title}
                        </div>
                        <div className="text-sm text-gray-600">{bonus.description}</div>
                      </div>
                      <div className="text-caution-orange font-bold line-through opacity-70">
                        {bonus.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="text-gray-500 text-lg line-through mb-1">
                  Regular Price: ৳25,000
                </div>
                <div className="font-heading text-5xl md:text-6xl font-bold text-engineering-blue-deep mb-2">
                  ৳12,500
                </div>
                <div className="text-success font-semibold">
                  Save ৳12,500 (50% OFF) - Limited Time
                </div>
              </div>

              {/* CTA */}
              <Button variant="offer" size="xl" className="w-full text-xl py-8">
                Enroll Now - Secure My Seat
                <ArrowRight className="w-6 h-6" />
              </Button>

              {/* Scarcity */}
              <div className="flex items-center justify-center gap-2 mt-6 text-destructive font-semibold">
                <Clock className="w-5 h-5" />
                Next Batch Starts in 3 Days. Only 47 Seats Remaining.
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gray-50 p-8 border-t border-gray-100">
              <div className="flex items-start gap-4 max-w-2xl mx-auto">
                <ShieldCheck className="w-12 h-12 text-success flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg font-bold text-engineering-blue-deep mb-2">
                    7-Day Money-Back Guarantee
                  </h4>
                  <p className="text-gray-600">
                    If after completing the first 2 modules you don't feel the course delivers on its promise, 
                    simply email us and we'll refund 100% of your investment. No questions asked. 
                    We're that confident in the transformation you'll experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
