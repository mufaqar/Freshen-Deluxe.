import { useEffect, useRef, useState } from 'react';

export default function ScrollAnimatedPhrase() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 200);
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
    <div 
      ref={ref}
      className="relative overflow-hidden"
    >
       <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center">
          <div 
            className={`transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
             <h2 className="text-4xl md:text-6xl lg:text-7xl  text-ring tracking-wider leading-none">
               <span 
                 className={`inline-block transition-all duration-1000 ease-out delay-100 ${
                   isVisible 
                     ? 'opacity-100 translate-x-0 scale-100' 
                     : 'opacity-0 -translate-x-8 scale-95'
                 }`}
               >
                 DUBAI'S MOST LUXURIOUS CLEANING COMPANY
               </span>
             </h2>
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-ring/5 to-transparent transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
