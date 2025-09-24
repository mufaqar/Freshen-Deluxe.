import HeroSection from "@/components/HeroSection";
import MinimalistServices from "@/components/MinimalistServices";
import ScrollAnimatedPhrase from "@/components/ScrollAnimatedPhrase";
import CompanyNameReveal from "@/components/CompanyNameReveal";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Building2, Home as HomeIcon, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import { Link } from "wouter";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import officeImage from "@assets/pexels-cottonbro-6466226_1757788137471.jpg";
import airbnbImage from "@assets/pexels-cottonbro-6466302_1757788137478.jpg";
import teamImage from "@assets/pexels-cottonbro-6466216_1757788137470.jpg";
import bedMakingImage from "@assets/pexels-cottonbro-6466479_1757788137472.jpg";
import CTA from "@/components/Cta";

export default function Home() {
  useSEO({
    title: 'Freshen Deluxe - Dubai\'s Most Trusted Luxury Cleaning Services',
    description: 'For those who value quality. We curate spaces that embody elegance with H10 cleaning standards. Premium boutique cleaning for residential, commercial, and Airbnb properties in Dubai.',
    keywords: 'luxury cleaning Dubai, boutique cleaning services, H10 cleaning standards, residential cleaning Dubai, commercial cleaning, Airbnb cleaning, five-star cleaning'
  });

  const services = [
    {
      title: "RESIDENTIAL",
      subtitle: "Tailored residential cleaning services, designed to match the standards of luxury living in Dubai.",
      image: heroImage,
      icon: HomeIcon
    },
    {
      title: "COMMERCIAL", 
      subtitle: "Something for our boutique offices, retail stores, and premium commercial properties.",
      image: officeImage,
      icon: Building2
    },
    {
      title: "HOLIDAY HOMES & AIRBNBS",
      subtitle: "Exclusive care for hosts who want every guest to feel the essence of luxury.",
      image: airbnbImage,
      icon: Bed
    },
    {
      title: "DEEP CLEAN",
      subtitle: "Comprehensive deep care, designed for flawless handovers, fresh starts, or simply when your home deserves more.",
      image: teamImage,
      icon: HomeIcon
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
      <MinimalistServices services={services} />

      {/* Why Choose Us */}
      <WhyChooseUs />

     

      {/* CTA Section */}
      <CTA />
    </div>
  );
}