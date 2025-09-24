import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Home as HomeIcon, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import officeImage from "@assets/pexels-cottonbro-6466226_1757788137471.jpg";
import airbnbImage from "@assets/pexels-cottonbro-6466302_1757788137478.jpg";
import teamImage from "@assets/pexels-cottonbro-6466216_1757788137470.jpg";

export default function Home() {
  useSEO({
    title: 'Freshen Deluxe - Dubai\'s Most Trusted Luxury Cleaning Services',
    description: 'For those who value quality. We curate spaces that embody elegance with H10 cleaning standards. Premium boutique cleaning for residential, commercial, and Airbnb properties in Dubai.',
    keywords: 'luxury cleaning Dubai, boutique cleaning services, H10 cleaning standards, residential cleaning Dubai, commercial cleaning, Airbnb cleaning, five-star cleaning'
  });

  const services = [
    {
      title: "Residential Cleaning",
      description: "Your home, effortlessly flawless. We handle every detail so you can simply enjoy living in a space that feels fresh, calm, and cared for.",
      features: [
        "Dusting and wiping all surfaces, furniture, and floors",
        "Vacuuming and mopping floors",
        "Bathroom cleaning and sanitization",
        "Kitchen: counters, appliances, sink, and exterior cabinets"
      ],
      image: heroImage,
      icon: HomeIcon,
      popular: true
    },
    {
      title: "Deep Cleaning",
      description: "Every corner counts. Whether it's after a renovation, a move, end-of-lease, or just because your home deserves it, we refresh your property with precision and care, leaving it spotless and revitalized.",
      features: [
        "Everything in Residential Cleaning",
        "Deep cleaning of overlooked areas: baseboards, window frames, ceilings, and light fixtures",
        "Interior appliance cleaning (oven, microwave, fridge)",
        "Carpet and upholstery steam cleaning"
      ],
      image: officeImage,
      icon: Building2
    },
    {
      title: "Holiday Homes Cleaning",
      description: "First impressions matter. We prepare your holiday rental to perfection, ensuring every guest walks into a space that feels welcoming, polished, and unforgettable.",
      features: [
        "Pre-check visit: team member inspects property before guest arrival",
        "Light ambient scent: subtle fragrance throughout from premium brand",
        "Welcome gift: luxury chocolates as thoughtful touch",
        "Property photos: before and after cleaning for documentation"
      ],
      image: airbnbImage,
      icon: Bed,
      popular: true,
      specialTouches: true
    }
  ];

  //todo: remove mock functionality
  const testimonials = [
    {
      name: "Sarah Al-Rashid",
      role: "Property Manager",
      quote: "Freshen Deluxe transformed our Airbnb properties. Guest reviews consistently mention the immaculate cleanliness.",
      rating: 5
    },
    {
      name: "Ahmed Hassan", 
      role: "Business Owner",
      quote: "Their attention to detail is extraordinary. Our office has never looked better, and it reflects our company's standards perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection 
        onBookNow={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Freshen Deluxe cleaning services.')}`, '_blank', 'noopener,noreferrer')}
        onWhatsApp={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Freshen Deluxe cleaning services.')}`, '_blank', 'noopener,noreferrer')}
      />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-services">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              We Curate Spaces That Embody Elegance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafted from a background in five-star hospitality, we bring hotel-level 
              precision to private residences, holiday homes, and premium commercial spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onGetQuote={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for ' + service.title + ' cleaning service.')}`, '_blank', 'noopener,noreferrer')}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              data-testid="button-view-all-services"
              onClick={() => window.location.href = '/services'}
            >
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-why-choose">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                The Most Trusted Name in Luxury Property Care
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't aim to be the biggest cleaning company in Dubai. We aim to be the most trusted. 
                Our team is trained to H10 cleaning standards, the rigorous protocols used in the world's 
                leading five-star hotels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-ring rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Hospitality Standards</h3>
                    <p className="text-muted-foreground">Five-star hotel level attention to detail in every clean</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-ring rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Touches</h3>
                    <p className="text-muted-foreground">Luxury amenities including chocolates and premium fragrances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-ring rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Peace of Mind</h3>
                    <p className="text-muted-foreground">Exceptional organization and customer service skills</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Professional cleaning team"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-ring text-primary-foreground p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-testimonials">
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-ring rounded-full mr-1"></div>
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Dubai's Most Luxurious Cleaning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a personalized quote and discover the difference 
            boutique cleaning service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 backdrop-blur-sm"
              data-testid="button-cta-contact"
              onClick={() => window.open('tel:+971554360800')}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-cta-whatsapp"
              onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Freshen Deluxe cleaning services.')}`, '_blank', 'noopener,noreferrer')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}