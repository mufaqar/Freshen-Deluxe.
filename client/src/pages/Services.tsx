import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Home as HomeIcon,
  Bed,
  Clock,
  Shield,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";
import { useState } from "react";
import heroImage from "@assets/pexels-cottonbro-6466492_1757788137475.jpg";
import officeImage from "@assets/pexels-cottonbro-6466226_1757788137471.jpg";
import airbnbImage from "@assets/pexels-cottonbro-6466302_1757788137478.jpg";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/Cta";

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useSEO({
    title: "Premium Cleaning Services Dubai - Freshen Deluxe",
    description:
      "Discover our curated cleaning services: The Regular Refresh, The Complete Clean, Holiday Home & Airbnb Services, and Commercial & Office Spaces.  luxury touches.",
    keywords:
      "cleaning services Dubai, regular refresh cleaning, complete deep clean, Airbnb cleaning Dubai, commercial cleaning, office cleaning",
  });

  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Your home, effortlessly flawless. We handle every detail so you can simply enjoy living in a space that feels fresh, calm, and cared for.",
      features: [
        "Dusting and wiping all surfaces, furniture, and floors",
        "Vacuuming and mopping floors",
        "Bathroom cleaning and sanitization",
        "Kitchen: counters, appliances, sink, and exterior cabinets",
        "Light organization and bed linen change",
        "Emptying bins and waste management",
      ],
      image: heroImage,
      icon: HomeIcon,
      popular: true,
    },
    {
      title: "Deep Cleaning",
      description:
        "Every corner counts. Whether it's after a renovation, a move, end-of-lease, or just because your home deserves it, we refresh your property with precision and care, leaving it spotless and revitalized.",
      features: [
        "Dusting and wiping all surfaces, furniture, and floors",
        "Vacuuming and mopping floors",
        "Bathroom cleaning and sanitization",
        "Kitchen: counters, appliances, sink, and exterior cabinets",
        "Light organization and bed linen change",
        "Emptying bins and waste management",
        "Deep cleaning of overlooked areas: baseboards, window frames, ceilings, and light fixtures",
        "Interior appliance cleaning (oven, microwave, fridge)",
        "Carpet and upholstery steam cleaning",
        "Post-renovation, post-move, end-of-lease, or general deep refresh",
        "Walls, doors, and cabinets cleaned inside and out",
        "Complete sanitization of all spaces",
      ],
      image: officeImage,
      icon: Building2,
    },
    {
      title: "Holiday Homes Cleaning",
      description:
        "First impressions matter. We prepare your holiday rental to perfection, ensuring every guest walks into a space that feels welcoming, polished, and unforgettable.",
      features: [
        "Complete property cleaning and sanitization",
        "Kitchen and bathroom deep cleaning",
        "Living areas and bedroom preparation",
        "Priority turnaround scheduling for guest arrivals",
        "Quality inspection and final touches",
      ],
      image: airbnbImage,
      icon: Bed,
      popular: true,
      specialTouches: true,
    },
    {
      title: "Commercial Cleaning",
      description:
        "Impress at every turn. Perfect for buildings, facilities, lobbies, and staircases, our team creates immaculate spaces that reflect professionalism, attention to detail, and care for everyone who steps inside.",
      features: [
        "Cleaning of buildings and offices: lobbies, hallways, staircases, and elevators",
        "Disinfection of common areas",
        "Waste management and recycling",
        "Floors: sweeping, mopping, vacuuming as appropriate",
        "Glass and window cleaning (interior and accessible exterior)",
        "Bathroom cleaning and sanitization",
        "Attention to details reflecting professionalism for clients and staff",
      ],
      image: officeImage,
      icon: Building2,
    },
  ];

  //todo: remove mock functionality
  const features = [
    {
      icon: Clock,
      title: "Peace of mind",
      description:
        "Trusted professionals and uncompromising standards that ensure your comfort, safety, and confidence.",
    },
    {
      icon: Shield,
      title: "Tailored services",
      description: "Personalized solutions designed to match your lifestyle, preferences, and unique home environment.",
    },
    {
      icon: Sparkles,
      title: "Luxury touches",
      description: "Finishing details that elevate everyday cleaning into an experience of elegance and refinement.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={officeImage}
            alt="Luxury cleaning service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
         
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <h1 className="text-4xl md:text-6xl  text-ring mb-6 leading-tight text-center">
            Premium Cleaning Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            We aim to be the best cleaning company in Dubai. <br/>Each service is
            crafted with standards - the protocols used in the world's
            leading five-star hotels, ensuring exceptional quality and trust.
          </p>
          <Button
            size="lg"
            className="bg-ring  text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-testid="button-services-quote"
            onClick={() =>
              window.open(
                `https://wa.me/971554360800?text=${encodeURIComponent(
                  "Hello! I would like to get a quote for cleaning services."
                )}`,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
           Instant Quote
          </Button>
           </motion.div>
        </div>
       
      </section>

      {/* Services Accordion */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service, index) => {
              const isExpanded = expandedCard === index;
              const Icon = service.icon;

              return (
                <Card
                  key={index}
                  className={`w-64 transition-all duration-300 cursor-pointer overflow-hidden ${
                    isExpanded ? "w-96 shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  {/* Service Image */}
                  <div
                    className="relative h-32 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                    {/* View More Overlay */}
                    <div
                      className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-all duration-300 z-20 ${
                        hoveredCard === index
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <div className="text-center text-white">
                        <div className="text-lg font-bold mb-1">View More</div>
                        <div className="text-xs opacity-90">
                          Click to expand
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-primary bebas_neue">
                          {service.title}
                        </CardTitle>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>

                    {isExpanded && (
                      <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                        <div>
                          <h4 className="text-lg  text-primary mb-2">
                            What's Included:
                          </h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="text-base text-muted-foreground flex items-start"
                              >
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {service.specialTouches && (
                          <div className="bg-ring/5 p-4 rounded-lg">
                            <h4 className="text-sm text-ring mb-3">
                              Luxury Touches:
                            </h4>
                            <ul className="space-y-2">
                              <li className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                  <strong>Pre-check visit:</strong> A team
                                  member inspects the property before guest
                                  arrival to ensure everything is perfect
                                </div>
                              </li>
                              <li className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                  <strong>Light ambient scent:</strong> A subtle
                                  fragrance throughout the apartment from a
                                  premium brand
                                </div>
                              </li>
                              <li className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                  <strong>Welcome gift:</strong> Luxury
                                  chocolates as a thoughtful touch
                                </div>
                              </li>
                              <li className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                  <strong>Property photos:</strong> Before and
                                  after cleaning for documentation and peace of
                                  mind
                                </div>
                              </li>
                              <li className="text-xs text-muted-foreground flex items-start">
                                <span className="w-1 h-1 bg-ring rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                  <strong>Linen service (extra cost):</strong>{" "}
                                  Hotel-quality sheets and towels ready for
                                  guests
                                </div>
                              </li>
                            </ul>
                          </div>
                        )}

                        <Button
                          size="sm"
                          className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              `https://wa.me/971554360800?text=${encodeURIComponent(
                                "Hello! I would like to get a quote for " +
                                  service.title +
                                  " service."
                              )}`,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                        Instant Quote
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              title=" Service Excellence"
              subtitle="  Why Choose Us"
            />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every service comes with our commitment to luxury hospitality
              standards and complete client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover-elevate"
                data-testid={`feature-${index}`}
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-ring/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-ring" />
                  </div>
                  <h3 className="text-xl text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <CTA />
    </div>
  );
}
