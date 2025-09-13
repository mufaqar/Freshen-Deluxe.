import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import teamImage from "@assets/generated_images/Professional_cleaning_team_7784a808.png";
import heroImage from "@assets/generated_images/Luxury_Dubai_interior_cleaning_fbcfd60b.png";

export default function About() {
  //todo: remove mock functionality
  const values = [
    {
      icon: Heart,
      title: "Exceptional Care",
      description: "We treat every space as if it were our own, with meticulous attention to detail and genuine care."
    },
    {
      icon: Award,
      title: "Hospitality Excellence",
      description: "Born from luxury hospitality experience, we bring five-star standards to every service."
    },
    {
      icon: Users,
      title: "Happy Team",
      description: "We invest in our staff's wellbeing, which translates to exceptional service for our clients."
    },
    {
      icon: Sparkles,
      title: "Luxury Touches",
      description: "Premium fragrances, chocolates, and thoughtful details that make every space special."
    }
  ];

  //todo: remove mock functionality
  const team = [
    {
      name: "Founder & CEO",
      description: "With years of experience in Dubai's luxury hospitality sector, bringing five-star standards to residential and commercial cleaning."
    },
    {
      name: "Operations Manager", 
      description: "Ensures every service meets our exacting standards with systematic quality control and training programs."
    },
    {
      name: "Client Relations",
      description: "Dedicated to providing exceptional customer service and ensuring complete client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-ring/20 text-ring border-ring/30" data-testid="badge-about">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Born from Luxury{" "}
              <span className="text-ring">Hospitality</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Freshen Deluxe is a boutique cleaning company in Dubai with a clear purpose: 
              to deliver a level of service that goes far beyond 'cleaning'.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Born from a deep understanding of the luxury hospitality world, Freshen Deluxe 
                  was created to bring five-star hotel standards to residential and commercial 
                  cleaning services in Dubai.
                </p>
                <p>
                  We focus on creating spaces where every detail is noticed and cared for. 
                  Our difference lies not only in the consistency of our work, but in the 
                  premium touches that transform ordinary cleaning into an extraordinary experience.
                </p>
                <p>
                  We believe that by treating our staff exceptionally well, they will naturally 
                  deliver amazing results. This philosophy extends to taking the mental load off 
                  our clients and providing complete peace of mind through our organization and 
                  customer service excellence.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Our professional team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-values">
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our values shape every interaction and service we deliver, 
              ensuring exceptional experiences for both clients and team members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-elevate" data-testid={`value-${index}`}>
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-ring/10 text-ring" data-testid="badge-mission">
            Our Mission
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
            Making a Difference
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We want to make a difference in Dubai's cleaning industry. We will treat our staff 
            exceptionally so they are happy and deliver amazing results. We want to take the 
            mental load off our clients and give them complete peace of mind through our 
            organizational skills and customer service excellence.
          </p>
          <p className="text-lg text-muted-foreground">
            Our luxury touches - from premium fragrances to thoughtful chocolates - transform 
            routine cleaning into memorable experiences that reflect the sophistication our 
            clients deserve.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-ring/10 text-ring" data-testid="badge-team">
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Leadership Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together expertise from luxury hospitality, 
              operations management, and client relations to deliver unparalleled service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover-elevate" data-testid={`team-member-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-ring/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-10 w-10 text-ring" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{member.name}</h3>
                  <p className="text-muted-foreground">{member.description}</p>
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
            Experience the Difference
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Ready to see what luxury hospitality standards mean for your space? 
            Let us show you the Freshen Deluxe difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10"
              data-testid="button-about-contact"
              onClick={() => console.log('About contact clicked')}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-about-services"
              onClick={() => console.log('About services clicked')}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}