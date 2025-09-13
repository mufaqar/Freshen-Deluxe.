import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Building2, Home as HomeIcon, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Luxury_Dubai_interior_cleaning_fbcfd60b.png";
import officeImage from "@assets/generated_images/Luxury_office_cleaning_service_da282c2d.png";
import airbnbImage from "@assets/generated_images/Luxury_Airbnb_cleaning_service_61020c32.png";
import teamImage from "@assets/generated_images/Professional_cleaning_team_7784a808.png";

export default function Home() {
  const services = [
    {
      title: "Commercial Cleaning",
      description: "Premium office and retail space cleaning with hospitality standards",
      features: [
        "Deep sanitization protocols",
        "Flexible scheduling options",
        "Eco-friendly products", 
        "Quality assurance guarantee"
      ],
      pricing: "From AED 150/hr",
      image: officeImage,
      icon: Building2,
      popular: true
    },
    {
      title: "Residential Cleaning",
      description: "Luxury home cleaning that treats your space with five-star care",
      features: [
        "Regular refresh services",
        "Deep cleaning options",
        "Premium fragrances",
        "Trusted professional staff"
      ],
      pricing: "From AED 80/room",
      image: heroImage,
      icon: HomeIcon
    },
    {
      title: "Airbnb Cleaning",
      description: "Hospitality-grade cleaning to ensure perfect guest experiences",
      features: [
        "Fast turnaround times",
        "Guest-ready standards",
        "Luxury amenity placement",
        "Check-in ready guarantee"
      ],
      pricing: "From AED 100/room",
      image: airbnbImage,
      icon: Bed
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
        onBookNow={() => console.log('Hero book now clicked')}
        onWhatsApp={() => console.log('Hero WhatsApp clicked')}
      />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-services">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Boutique Cleaning Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From commercial spaces to luxury residences and Airbnb properties, 
              we deliver hospitality-level service with unmatched attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onGetQuote={() => console.log(`Get quote clicked for ${service.title}`)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              data-testid="button-view-all-services"
              onClick={() => console.log('View all services clicked')}
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
                Born from Luxury Hospitality
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Freshen Deluxe delivers a level of service that goes far beyond 'cleaning'. 
                Born from a deep understanding of the luxury hospitality world, we focus on 
                creating spaces where every detail is noticed and cared for.
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
              onClick={() => console.log('CTA contact clicked')}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-cta-whatsapp"
              onClick={() => console.log('CTA WhatsApp clicked')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}