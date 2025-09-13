import Calculator from "@/components/Calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

export default function CalculatorPage() {
  useSEO({
    title: 'Cleaning Service Price Calculator - Freshen Deluxe Dubai',
    description: 'Get instant quotes for luxury cleaning services in Dubai. Calculate prices for residential, commercial, and Airbnb cleaning with our transparent pricing tool.',
    keywords: 'cleaning price calculator Dubai, cleaning service cost, instant cleaning quote, Dubai cleaning prices, luxury cleaning rates'
  });

  const handleWhatsAppQuote = (details: any) => {
    const message = `Hi! I'd like a quote for:
Service: ${details.serviceType}
${details.propertyType ? `Type: ${details.propertyType}` : ''}
${details.rooms ? `Rooms: ${details.rooms}` : ''}
${details.area ? `Area: ${details.area} sqm` : ''}
Frequency: ${details.frequency}
Estimated: AED ${details.estimate}

Please provide a detailed quote. Thank you!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971554360800?text=${encodedMessage}`;
    
    // In a real app, this would open WhatsApp
    console.log('Opening WhatsApp with message:', message);
    window.open(whatsappUrl, '_blank');
  };

  //todo: remove mock functionality
  const serviceAreas = [
    "Business Bay", "Downtown Dubai", "Dubai Marina", "JBR", 
    "Palm Jumeirah", "Jumeirah", "DIFC", "Dubai Hills"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-ring/5">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-ring/10 text-ring" data-testid="badge-calculator">
            Price Calculator
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Get Your{" "}
            <span className="text-ring">Instant Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Calculate your cleaning service estimate in seconds. Our transparent pricing 
            ensures you know exactly what to expect.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator onWhatsAppQuote={handleWhatsAppQuote} />
        </div>
      </section>

      {/* Service Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <MessageSquare className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">WhatsApp Quote</h3>
                  <p className="text-muted-foreground mb-6">
                    Get instant quotes and quick responses via WhatsApp messaging
                  </p>
                  <Button 
                    className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
                    data-testid="button-calculator-whatsapp"
                    onClick={() => handleWhatsAppQuote({
                      serviceType: "general inquiry",
                      estimate: "Custom quote"
                    })}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    +971 55 436 0800
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Phone Contact */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <Phone className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Call Direct</h3>
                  <p className="text-muted-foreground mb-6">
                    Speak directly with our team for personalized consultation
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full"
                    data-testid="button-calculator-call"
                    onClick={() => console.log('Call clicked')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Email Contact */}
            <Card className="hover-elevate">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <Mail className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Email Quote</h3>
                  <p className="text-muted-foreground mb-6">
                    Send detailed requirements for comprehensive quote
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full"
                    data-testid="button-calculator-email"
                    onClick={() => console.log('Email clicked')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-ring/10 rounded-full mr-4">
              <MapPin className="h-6 w-6 text-ring" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-primary">Service Coverage</h2>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            We provide luxury cleaning services across all major areas in Dubai. 
            Check if your location is within our service area:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4" data-testid={`service-area-${index}`}>
                {area}
              </Badge>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Don't see your area? Contact us - we're expanding our coverage regularly!
          </p>
        </div>
      </section>

      {/* Pricing Notes */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="hover-elevate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
                Pricing Information
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">What's Included</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      All cleaning supplies and equipment
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Professional uniformed staff
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Quality assurance inspection
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Luxury touches and premium fragrances
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Additional Notes</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Volume discounts available for regular bookings
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Commercial rates based on square meters or hourly
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      Final quote may vary based on specific requirements
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3"></div>
                      No hidden fees - transparent pricing guaranteed
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}