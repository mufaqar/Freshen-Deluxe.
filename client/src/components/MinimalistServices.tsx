import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  subtitle: string;
  image: string;
  icon: LucideIcon;
}

interface MinimalistServicesProps {
  services: Service[];
}

export default function MinimalistServices({ services }: MinimalistServicesProps) {
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
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Heading Design */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-ring/20 via-ring/10 to-ring/20 rounded-full blur-xl"></div>
            <h2 className="relative text-2xl md:text-3xl  text-ring  mb-4">
              OUR SERVICES
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-ring to-transparent mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div 
                key={index} 
                className={`transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-64 overflow-hidden rounded-xl group mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:from-black/60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl  text-ring tracking-wider mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <button 
              className="bg-ring hover:bg-ring/90 text-primary-foreground font-semibold px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              VIEW ALL SERVICES
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
