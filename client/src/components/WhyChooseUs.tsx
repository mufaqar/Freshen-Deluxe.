import { useEffect, useRef, useState } from 'react';
import { 
  Star, 
  Shield, 
  Sparkles, 
  Crown, 
  Heart 
} from 'lucide-react';

interface WhyChooseUsItem {
  icon: React.ComponentType<any>;
  text: string;
  description: string;
}

const whyChooseUsItems: WhyChooseUsItem[] = [
  { 
    icon: Star, 
    text: "Exceptional Care", 
    description: "Premium service standards" 
  },
  { 
    icon: Shield, 
    text: "Trusted & Reliable", 
    description: "Insured professionals" 
  },
  { 
    icon: Sparkles, 
    text: "Luxury Touch", 
    description: "Attention to detail" 
  },
  { 
    icon: Crown, 
    text: "Premium Quality", 
    description: "High-end products" 
  },
  { 
    icon: Heart, 
    text: "Peace of Mind", 
    description: "Your satisfaction guaranteed" 
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-ring/20 via-ring/10 to-ring/20 rounded-full blur-xl"></div>
            <h2 className="relative text-3xl md:text-5xl  text-ring  mb-4">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ring to-transparent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center transition-all duration-1500 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ring/20 to-amber-200/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <Icon className="h-10 w-10 text-ring drop-shadow-lg" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-ring/10 to-amber-200/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-lg  text-ring mb-2 ">
                  {item.text}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
