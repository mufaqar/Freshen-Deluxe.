import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "@assets/Header Logo_1757788154322.png";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/instant-quote", label: "Instant Quote" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`text-sm nav_item  transition-all duration-300 cursor-pointer hover:scale-105 ${
                    isActive(item.path) 
                      ? "text-ring" 
                      : "text-foreground hover:text-ring"
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <div className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105" data-testid="link-logo">
                <img 
                  src={logo} 
                  alt="Freshen Deluxe - Boutique Cleaning Services" 
                  className="h-40 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Right Contact Button */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            <Link href="/contact">
              <Button 
                className="bg-primary hover:bg-ring/90 text-white transition-all duration-300 hover:scale-105"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={`block px-3 py-2 text-base font-medium cursor-pointer rounded-md ${
                      isActive(item.path)
                        ? "text-ring bg-ring/5"
                        : "text-foreground hover:text-ring hover:bg-ring/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button 
                    className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
                    data-testid="button-mobile-contact-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}