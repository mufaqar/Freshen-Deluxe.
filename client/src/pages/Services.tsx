import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Home as HomeIcon, Bed, Clock, Shield, Sparkles } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_Dubai_interior_cleaning_fbcfd60b.png";
import officeImage from "@assets/generated_images/Luxury_office_cleaning_service_da282c2d.png";
import airbnbImage from "@assets/generated_images/Luxury_Airbnb_cleaning_service_61020c32.png";

export default function Services() {
  const services = [
    {
      title: "Commercial Cleaning",
      description: "Premium office and retail space cleaning with hospitality standards. Tailored quotes based on square meters or hourly requirements.",
      features: [
        "Deep sanitization protocols",
        "Flexible scheduling (daily, weekly, monthly)",
        "Eco-friendly commercial-grade products", 
        "Quality assurance inspections",
        "Emergency cleaning services",
        "Customized cleaning checklists"
      ],
      image: officeImage,
      icon: Building2,
      popular: false
    },
    {
      title: "Residential Regular Refresh",
      description: "Luxury home cleaning that maintains your space with five-star hospitality standards. Perfect for ongoing maintenance.",
      features: [
        "Comprehensive room-by-room cleaning",
        "Premium fragrances and touches",
        "Trusted, background-checked staff",
        "Flexible scheduling options",
        "Quality guarantee on all services",
        "Eco-friendly products available"
      ],
      image: heroImage,
      icon: HomeIcon,
      popular: true
    },
    {
      title: "Residential Deep Cleaning",
      description: "Intensive cleaning service for move-ins, end-of-lease, or seasonal deep cleans. Every corner receives meticulous attention.",
      features: [
        "Complete deep sanitization",
        "Inside appliance cleaning",
        "Detailed bathroom and kitchen work",
        "Baseboard and ceiling fan cleaning",
        "Window and blind cleaning",
        "Move-in/move-out ready guarantee"
      ],
      image: heroImage,
      icon: HomeIcon
    },
    {
      title: "Airbnb Regular Refresh",
      description: "Fast turnaround cleaning between guests with hospitality-grade standards. Ensuring perfect guest experiences every time.",
      features: [
        "Quick turnaround (2-4 hours)",
        "Guest-ready inspection standards",
        "Luxury amenity placement",
        "Linen and towel refresh",
        "Welcome touches and setup",
        "Check-in ready guarantee"
      ],
      image: airbnbImage,
      icon: Bed,
      popular: true
    },
    {
      title: "Airbnb Deep Cleaning",
      description: "Comprehensive monthly or quarterly deep cleans for Airbnb properties to maintain the highest hospitality standards.",
      features: [
        "Complete property deep clean",
        "Appliance maintenance cleaning",
        "Detailed bathroom sanitization",
        "Furniture and upholstery care",
        "Seasonal maintenance tasks",
        "Property condition reporting"
      ],
      image: airbnbImage,
      icon: Bed
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
            Boutique Cleaning{" "}
            <span className="text-ring">Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From commercial spaces to luxury residences and Airbnb properties, we deliver 
            hospitality-level service with unmatched attention to detail across Dubai.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
            data-testid="button-services-quote"
            onClick={() => console.log('Services quote clicked')}
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onGetQuote={() => console.log(`Get quote clicked for ${service.title}`)}
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
                  onClick={() => console.log('Commercial quote clicked')}
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
                  onClick={() => console.log('Residential quote clicked')}
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
              onClick={() => console.log('Services calculator clicked')}
            >
              Request Quote
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-services-whatsapp"
              onClick={() => console.log('Services WhatsApp clicked')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}