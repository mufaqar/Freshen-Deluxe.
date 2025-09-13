import { Link } from "wouter";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`bg-primary text-primary-foreground ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <h3 className="text-2xl font-serif font-bold cursor-pointer" data-testid="link-footer-logo">
                Freshen Deluxe
              </h3>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Dubai's most luxurious cleaning services. Boutique cleaning company 
              delivering hospitality-level service with unmatched attention to detail.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4" />
              <span>Serving all of Dubai</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-commercial-cleaning">
                    Commercial Cleaning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-residential-cleaning">
                    Residential Cleaning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-airbnb-cleaning">
                    Airbnb Cleaning
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-deep-cleaning">
                    Deep Cleaning
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/about">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-about">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/calculator">
                  <span className="hover:text-ring transition-colors cursor-pointer" data-testid="link-calculator">
                    Price Calculator
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
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+971 55 436 0800</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>admin@freshendeluxe.com</span>
              </div>
              <Button 
                size="sm"
                variant="outline"
                className="mt-4 text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() => console.log('Footer WhatsApp clicked')}
                data-testid="button-footer-whatsapp"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Freshen Deluxe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <span className="text-primary-foreground/60 hover:text-ring cursor-pointer transition-colors" data-testid="link-privacy">
                Privacy Policy
              </span>
              <span className="text-primary-foreground/60 hover:text-ring cursor-pointer transition-colors" data-testid="link-terms">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}