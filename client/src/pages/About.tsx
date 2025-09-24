import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamImage from "@assets/pexels-cottonbro-6466216_1757788137470.jpg";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";

export default function About() {
  useSEO({
    title: 'About Freshen Deluxe - Dubai\'s Most Trusted Luxury Cleaning Company',
    description: 'For those who value quality. Born from luxury hospitality, we bring H10 cleaning standards to Dubai. The most trusted name in luxury property care with five-star service.',
    keywords: 'about Freshen Deluxe, luxury cleaning company Dubai, hospitality cleaning standards, five-star cleaning service, boutique cleaning Dubai'
  });

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
              Born from{" "}
              <span className="text-ring">Luxury Hospitality</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              We don't aim to be the biggest cleaning company in Dubai. We aim to be the most trusted. 
              Our story begins with five-star hotel standards, now brought to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - Zigzag Timeline with Scroll Animations */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From inspiration to excellence, discover the story behind Dubai's most trusted luxury cleaning service
            </p>
          </motion.div>

          {/* Zigzag Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-ring/20 via-ring to-ring/20 hidden md:block"></div>

            {/* Timeline Items */}
            <TimelineItem
              side="left"
              icon="💡"
              chapter="Chapter 1"
              title="Inspiration"
              quote="Arriving in Dubai, we realized cleaning could be different: punctual, flawless, uncompromising."
              description="Dubai's skyline sparkled with possibility, but behind the gleaming facades, we noticed something missing. The city deserved cleaning services that matched its ambition—services that didn't just clean, but elevated every space to match the luxury and precision that Dubai represents. We saw an opportunity to bring five-star hotel standards to private homes and commercial spaces."
            />

            <TimelineItem
              side="right"
              icon="🎯"
              chapter="Chapter 2"
              title="Our Purpose"
              quote="We aim to free our clients from daily stress, transforming cleaning into a moment of pure calm—managing everything so it's not just cleaning, it's an easier life."
              description="Life in Dubai moves fast. Between work, family, and the endless opportunities this city offers, cleaning shouldn't be another burden. We envisioned a service that would handle every detail, from the smallest corner to the grandest space, allowing our clients to focus on what truly matters. Our purpose became clear: to transform cleaning from a chore into a luxury experience that enhances your quality of life."
            />

            <TimelineItem
              side="left"
              icon="⭐"
              chapter="Chapter 3"
              title="What Sets Us Apart"
              quote="Our difference lies in a dedicated, loyal team treated like family—because when people are valued, excellence follows."
              description="We believe that exceptional service comes from exceptional people. That's why we invest in our team like family—providing fair wages, comprehensive training, and genuine care. When our staff feels valued and respected, they naturally deliver their best work. This philosophy creates a positive cycle: happy employees create happy clients, and happy clients create a thriving business. Our team's loyalty and dedication are the foundation of everything we do."
            />

            <TimelineItem
              side="right"
              icon="🏆"
              chapter="Chapter 4"
              title="Operational Excellence"
              quote="Our staff are trained to five-star hotel standards, ensuring precision and meticulous attention to every detail."
              description="Drawing from years of experience in Dubai's luxury hospitality sector, we've developed training programs that mirror the exacting standards of five-star hotels. Every team member learns the H10 cleaning protocols—the same rigorous standards used in the world's most prestigious hotels. From the way we fold towels to the angle we position furniture, every action is intentional, every detail matters. This commitment to operational excellence ensures consistent, exceptional results every time."
            />

            <TimelineItem
              side="left"
              icon="✨"
              chapter="Today"
              title="Today, For You"
              quote="We provide exclusive service to Dubai's most discerning homes, creating spotless spaces so you can relax and enjoy your time."
              description="Today, Freshen Deluxe stands as Dubai's most trusted luxury cleaning service. We've built our reputation one satisfied client at a time, earning the trust of families, businesses, and property managers across the city. Our exclusive approach means we're selective about the clients we serve, ensuring we can deliver the personalized attention and exceptional quality that defines our brand. When you choose Freshen Deluxe, you're not just getting a cleaning service—you're joining a community of people who value excellence, appreciate quality, and understand that life is too short to worry about cleaning."
              isSpecial={true}
            />
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
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-about-services"
              onClick={() => window.location.href = '/services'}
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Timeline Item Component
interface TimelineItemProps {
  side: 'left' | 'right';
  icon: string;
  chapter: string;
  title: string;
  quote: string;
  description: string;
  isSpecial?: boolean;
}

function TimelineItem({ side, icon, chapter, title, quote, description, isSpecial = false }: TimelineItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: side === 'left' ? -100 : 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative mb-32">
      {/* Timeline Line Connection */}
      <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-16 bg-gradient-to-b from-ring to-ring hidden md:block"></div>
      
      {/* Content Container */}
      <div className={`flex items-center ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
        {/* Icon */}
        <motion.div
          ref={ref}
          variants={iconVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-ring to-ring/80 rounded-full flex items-center justify-center z-20 shadow-xl shadow-ring/20 border-2 border-white/20 mx-auto md:mx-0"
        >
          <span className="text-3xl">{icon}</span>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`flex-1 mt-8 md:mt-0 ${side === 'left' ? 'md:pr-16 md:pl-8' : 'md:pl-16 md:pr-8'}`}
        >
          <div className={`bg-gradient-to-br ${isSpecial ? 'from-ring/20 via-primary/10 to-ring/20' : 'from-card to-card/80'} p-8 rounded-2xl shadow-xl hover-elevate border ${isSpecial ? 'border-ring/30' : 'border-ring/10'} backdrop-blur-sm`}>
            <Badge className={`mb-4 ${isSpecial ? 'bg-gradient-to-r from-ring/30 to-ring/20 text-ring border border-ring/30' : 'bg-gradient-to-r from-ring/20 to-ring/10 text-ring border border-ring/20'}`}>
              {chapter}
            </Badge>
            <h3 className="text-4xl font-serif font-bold text-primary mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 font-medium">
              {quote}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}