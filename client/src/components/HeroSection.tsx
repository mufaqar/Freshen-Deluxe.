import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";

interface HeroSectionProps {
  onBookNow?: () => void;
  onWhatsApp?: () => void;
}

export default function HeroSection({ onBookNow, onWhatsApp }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Dubai's Most{" "}
            <span className="text-ring">Luxurious</span> Cleaning
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience boutique cleaning services with H10 hospitality standards. 
            We curate spaces that embody elegance for Dubai's most discerning clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-ring hover:bg-ring/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
              onClick={onBookNow}
              data-testid="button-hero-book-now"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Book Your Service
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
              onClick={onWhatsApp}
              data-testid="button-hero-whatsapp"
            >
              <Phone className="mr-2 h-5 w-5" />
              +971 55 436 0800
            </Button>
          </div>

          <div className="mt-8 flex items-center text-white/80 text-sm">
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