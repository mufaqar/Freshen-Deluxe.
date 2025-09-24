import { Link } from "wouter";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Transparent Logo1_1757788154323.png";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-primary text-primary-foreground ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section - Full Width */}
        <div className="flex justify-start mb-8">
          <Link href="/">
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105" data-testid="link-footer-logo">
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border border-white/20 shadow-lg hover-lift">
                <img 
                  src={logo} 
                  alt="Freshen Deluxe - Boutique Cleaning Services" 
                  className="h-40 w-auto"
                />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg">About</h4>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Dubai's most luxurious cleaning services. Boutique cleaning company 
              delivering hospitality-level service with unmatched attention to detail.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>Serving all of Dubai</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-commercial-cleaning">
                    Commercial & Office Spaces
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-residential-cleaning">
                    The Regular Refresh
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-airbnb-cleaning">
                    Holiday Home & Airbnb Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-deep-cleaning">
                    The Complete Clean
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/instant-quote">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-calculator">
                    Instant Quote
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-contact">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <a href="tel:+971554360800" className="hover:text-ring transition-colors">
                  +971 55 436 0800
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <a href="mailto:admin@freshendeluxe.com" className="hover:text-ring transition-colors">
                  admin@freshendeluxe.com
                </a>
              </div>
              <div className="flex justify-center md:justify-start">
                <Button 
                  size="sm"
                  variant="outline"
                  className="mt-4 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                  onClick={() => window.open(`https://wa.me/971554360800?text=${encodeURIComponent('Hello! I would like to get a quote for Freshen Deluxe cleaning services.')}`, '_blank', 'noopener,noreferrer')}
                  data-testid="button-footer-whatsapp"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Freshen Deluxe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="/privacy" className="text-primary-foreground/60 hover:text-ring transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="/terms" className="text-primary-foreground/60 hover:text-ring transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}