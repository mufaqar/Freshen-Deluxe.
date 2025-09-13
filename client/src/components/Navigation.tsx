import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

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
    { path: "/calculator", label: "Price Calculator" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`bg-background border-b border-border ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer" data-testid="link-logo">
              <span className="text-2xl font-serif font-bold text-primary">
                Freshen Deluxe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span 
                  className={`text-sm font-medium transition-colors cursor-pointer ${
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
            <Button 
              className="bg-ring hover:bg-ring/90 text-primary-foreground"
              data-testid="button-book-now"
              onClick={() => console.log('Book Now clicked')}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
          <div className="md:hidden">
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
                <Button 
                  className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
                  data-testid="button-mobile-book-now"
                  onClick={() => {
                    console.log('Mobile Book Now clicked');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}