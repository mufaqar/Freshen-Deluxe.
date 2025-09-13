import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Award, Sparkles } from "lucide-react";

export default function Contact() {
  const handleFormSubmit = (data: any) => {
    // In a real app, this would send the email
    console.log('Contact form submitted:', data);
    
    // Show success message or redirect
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  //todo: remove mock functionality
  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ];

  //todo: remove mock functionality
  const guarantees = [
    {
      icon: Clock,
      title: "24hr Response",
      description: "We respond to all inquiries within 24 hours"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete insurance coverage for your peace of mind"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee on all services"
    },
    {
      icon: Sparkles,
      title: "Premium Service",
      description: "Luxury hospitality standards in every clean"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-ring/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-ring/10 text-ring" data-testid="badge-contact">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Ready to{" "}
            <span className="text-ring">Get Started?</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Contact Dubai's most luxurious cleaning service. We're here to answer 
            your questions and provide personalized quotes.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Business Hours
            </h2>
            <p className="text-lg text-muted-foreground">
              We're available during the following hours for consultations and bookings
            </p>
          </div>

          <Card className="hover-elevate">
            <CardContent className="p-8">
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0" data-testid={`hours-${index}`}>
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-ring/5 rounded-lg border border-ring/20 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-ring">Emergency Services:</strong> Available 24/7 for urgent commercial cleaning needs
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-guarantees">
              Our Commitment
            </Badge>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Service Guarantees
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              When you choose Freshen Deluxe, you're choosing premium service 
              backed by our comprehensive guarantees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`guarantee-${index}`}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <guarantee.icon className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2" data-testid="faq-coverage">
                  Do you provide services across all of Dubai?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide luxury cleaning services across all major areas in Dubai, 
                  including Business Bay, Downtown, Marina, JBR, Palm Jumeirah, and more. 
                  Contact us to confirm coverage for your specific location.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2" data-testid="faq-supplies">
                  Do you provide all cleaning supplies and equipment?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We bring all professional-grade cleaning supplies, equipment, 
                  and eco-friendly products. You don't need to provide anything - just enjoy 
                  the results of our luxury service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2" data-testid="faq-booking">
                  How far in advance should I book?
                </h3>
                <p className="text-muted-foreground">
                  For regular cleaning services, we recommend booking 24-48 hours in advance. 
                  For deep cleaning or special events, 3-5 days notice ensures optimal 
                  scheduling. Emergency services are available for urgent needs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary mb-2" data-testid="faq-pricing">
                  How is pricing determined?
                </h3>
                <p className="text-muted-foreground">
                  Pricing varies by service type: commercial spaces by square meters or hourly rates, 
                  residential and Airbnb by number of rooms. Volume discounts apply for regular 
                  bookings. Use our price calculator for instant estimates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Experience Luxury Cleaning Today
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Ready to see the difference boutique cleaning service makes? 
            Contact us now for your personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              data-testid="button-contact-calculator"
              onClick={() => console.log('Contact calculator clicked')}
            >
              Use Price Calculator
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-contact-whatsapp"
              onClick={() => console.log('Contact WhatsApp clicked')}
            >
              WhatsApp +971 55 436 0800
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}