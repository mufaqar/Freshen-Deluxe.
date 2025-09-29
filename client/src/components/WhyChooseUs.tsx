"use client";

import { useRef } from "react";
import { 
  Star, 
  Shield, 
  Sparkles, 
  Crown, 
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Yoga = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="hsl(42 55% 64% / 1)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="m14.571 15.004l.858 1.845s3.857.819 3.857 2.767C19.286 21 17.57 21 17.57 21H13l-2.25-1.25"></path>
      <path d="m9.429 15.004l-.857 1.845s-3.858.819-3.858 2.767C4.714 21 6.43 21 6.43 21H8.5l2.25-1.25L13.5 18"></path>
      <path d="M3 15.926s2.143-.461 3.429-.922C7.714 8.546 11.57 9.007 12 9.007c.429 0 4.286-.461 5.571 5.997c1.286.46 3.429.922 3.429.922M12 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path>
    </g>
  </svg>
);

interface WhyChooseUsItem {
  icon: React.ComponentType<any>;
  text: string;
  description: string;
}

const whyChooseUsItems: WhyChooseUsItem[] = [
  { icon: Star, text: "Exceptional Care", description: "Premium service standards" },
  { icon: Shield, text: "Trusted & Reliable", description: "Insured professionals" },
  { icon: Sparkles, text: "Luxury Touch", description: "Attention to detail" },
  { icon: Crown, text: "Premium Quality", description: "High-end products" },
  { icon: Yoga, text: "Peace of Mind", description: "Your satisfaction guaranteed" },
];

// Framer Motion variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <SectionHeading title="WHY CHOOSE US" subtitle="Clean Beyond Expectations" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUpVariant}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ring/20 to-amber-200/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <Icon className="h-10 w-10 text-ring drop-shadow-lg" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-ring/10 to-amber-200/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-lg text-ring mb-2">{item.text}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
