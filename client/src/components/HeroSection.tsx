import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollAnimatedPhrase from "./ScrollAnimatedPhrase";
import CompanyNameReveal from "./CompanyNameReveal";

// Import all available images for the carousel
import heroImage1 from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import heroImage2 from "@assets/pexels-cottonbro-6466216_1757788137470.jpg";
import heroImage3 from "@assets/pexels-cottonbro-6466226_1757788137471.jpg";
import heroImage4 from "@assets/pexels-cottonbro-6466302_1757788137478.jpg";
import heroImage5 from "@assets/pexels-cottonbro-6466478_1757788137472.jpg";
import heroImage6 from "@assets/pexels-cottonbro-6466479_1757788137472.jpg";
import heroImage7 from "@assets/pexels-cottonbro-6466481_1757788137473.jpg";
import heroImage8 from "@assets/pexels-cottonbro-6466485_1757788137474.jpg";
import heroImage9 from "@assets/pexels-cottonbro-6466489_1757788137475.jpg";
import heroImage10 from "@assets/pexels-cottonbro-6466493_1757788137477.jpg";

interface HeroSectionProps {
  onBookNow?: () => void;
  onWhatsApp?: () => void;
}

export default function HeroSection({ onBookNow, onWhatsApp }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Array of all hero images
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage9,
    heroImage10
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 200);
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

  // Background image carousel effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length, isPaused]);
  return (
    <section 
      ref={ref} 
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Carousel Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-ring scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content - Centered ScrollAnimatedPhrase and Company Name */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <div className="text-center">
          <ScrollAnimatedPhrase />
          
          {/* Company Name Below */}
          <div className="mt-8">
            <CompanyNameReveal />
          </div>
          
          <div 
            className={`mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="bg-ring hover:bg-ring/90 text-primary-foreground font-semibold px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={onBookNow}
              data-testid="button-hero-book-now"
            >
              <MessageSquare className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Book Your Service
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={onWhatsApp}
              data-testid="button-hero-whatsapp"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              +971 55 436 0800
            </Button>
          </div>

          <div 
            className={`mt-8 flex items-center justify-center text-white/80 text-sm transition-all duration-1000 ease-out delay-600 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ring rounded-full mr-2"></div>
              Available across Dubai
            </div>
            <div className="mx-6 w-px h-4 bg-white/30"></div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-ring rounded-full mr-2"></div>
              Premium service guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}