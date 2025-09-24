import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Home as HomeIcon, Bed, Clock, Shield, Sparkles } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import officeImage from "@assets/pexels-cottonbro-6466226_1757788137471.jpg";
import airbnbImage from "@assets/pexels-cottonbro-6466302_1757788137478.jpg";

export default function Services() {
  useSEO({
    title: 'Premium Cleaning Services Dubai - Freshen Deluxe',
    description: 'Discover our curated cleaning services: The Regular Refresh, The Complete Clean, Holiday Home & Airbnb Services, and Commercial & Office Spaces. H10 standards, luxury touches.',
    keywords: 'cleaning services Dubai, regular refresh cleaning, complete deep clean, Airbnb cleaning Dubai, commercial cleaning, office cleaning, H10 cleaning standards'
  });

  const services = [
    {
      title: "Residential Cleaning",
      description: "Your home, effortlessly flawless. We handle every detail so you can simply enjoy living in a space that feels fresh, calm, and cared for.",
      features: [
        "Dusting and wiping all surfaces, furniture, and floors",
        "Vacuuming and mopping floors",
        "Bathroom cleaning and sanitization",
        "Kitchen: counters, appliances, sink, and exterior cabinets",
        "Light organization and bed linen change",
        "Emptying bins and waste management"
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
        "Carpet and upholstery steam cleaning",
        "Post-renovation, post-move, end-of-lease, or general deep refresh",
        "Walls, doors, and cabinets cleaned inside and out",
        "Complete sanitization of all spaces"
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
        "Property photos: before and after cleaning for documentation",
        "Linen service (extra cost): hotel-quality sheets and towels",
        "Priority turnaround scheduling for guest arrivals"
      ],
      image: airbnbImage,
      icon: Bed,
      popular: true,
      specialTouches: true
    },
    {
      title: "Commercial Cleaning",
      description: "Impress at every turn. Perfect for buildings, facilities, lobbies, and staircases, our team creates immaculate spaces that reflect professionalism, attention to detail, and care for everyone who steps inside.",
      features: [
        "Cleaning of buildings and offices: lobbies, hallways, staircases, and elevators",
        "Disinfection of common areas",
        "Waste management and recycling",
        "Floors: sweeping, mopping, vacuuming as appropriate",
        "Glass and window cleaning (interior and accessible exterior)",
        "Bathroom cleaning and sanitization",
        "Attention to details reflecting professionalism for clients and staff"
      ],
      image: officeImage,
      icon: Building2
    }
  ];

  //todo: remove mock functionality
  const features = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Service times that work with your lifestyle and business hours"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind"
    },
    {
      icon: Sparkles,
      title: "Luxury Touches",
      description: "Premium fragrances, chocolates, and thoughtful details"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-ring/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-ring/10 text-ring" data-testid="badge-services-hero">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            Curating Spaces That{" "}
            <span className="text-ring">Embody Elegance</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We don't aim to be the biggest cleaning company in Dubai. We aim to be the most trusted. 
            Each service is crafted with H10 standards - the protocols used in the world's leading five-star hotels.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
            data-testid="button-services-quote"
            onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for cleaning services.')}`, '_blank', 'noopener,noreferrer')}
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onGetQuote={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for ' + service.title + ' service.')}`, '_blank', 'noopener,noreferrer')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-features">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Service Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every service comes with our commitment to luxury hospitality standards 
              and complete client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`feature-${index}`}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Commercial Services</CardTitle>
                <CardDescription>
                  Tailored solutions for offices, retail spaces, and commercial buildings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Customized cleaning schedules</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Professional appearance standards</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Quality assurance protocols</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Flexible service arrangements</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6"
                  data-testid="button-commercial-quote"
                  onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Commercial & Office Spaces cleaning service.')}`, '_blank', 'noopener,noreferrer')}
                >
                  Request Commercial Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Residential & Airbnb</CardTitle>
                <CardDescription>
                  Luxury cleaning for private homes and short-rental properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Room-based service structure</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Volume service packages available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Luxury amenity placement</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-ring rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Fast Airbnb turnarounds</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6"
                  data-testid="button-residential-quote"
                  onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for residential cleaning services.')}`, '_blank', 'noopener,noreferrer')}
                >
                  Get Residential Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-coverage">
            Service Coverage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Serving All of Dubai
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our professional cleaning teams provide services across all areas of Dubai, 
            ensuring consistent luxury standards wherever you are located.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Business Bay", "Downtown Dubai", "Dubai Marina", "JBR", "Palm Jumeirah", 
              "Jumeirah", "DIFC", "Dubai Hills", "Arabian Ranches", "JVC"
            ].map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm" data-testid={`area-${index}`}>
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Luxury Cleaning?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a personalized quote tailored to your specific needs. 
            Experience the difference boutique service makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              data-testid="button-services-calculator"
              onClick={() => window.location.href = '/calculator'}
            >
              Request Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-services-whatsapp"
              onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for cleaning services.')}`, '_blank', 'noopener,noreferrer')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}