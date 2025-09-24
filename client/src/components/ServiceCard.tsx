import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon;
  popular?: boolean;
  specialTouches?: boolean;
  onGetQuote?: () => void;
}

export default function ServiceCard({
  title,
  description,
  features,
  image,
  icon: Icon,
  popular = false,
  specialTouches = false,
  onGetQuote
}: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden group hover-elevate h-full flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Icon className="h-8 w-8 text-white" />
        </div>
        {popular && (
          <Badge className="absolute top-4 right-4 z-20 bg-ring text-primary-foreground shadow-lg">
            Most Popular
          </Badge>
        )}
      </div>

      <CardHeader className="pb-4 flex-shrink-0">
        <CardTitle className="text-xl font-serif text-primary leading-tight">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          {specialTouches && (
            <div className="mt-6 p-4 bg-gradient-to-r from-ring/10 to-primary/10 rounded-lg border border-ring/20">
              <h5 className="font-semibold text-ring mb-3 flex items-center">
                <span className="text-lg mr-2">✨</span>
                Our Special Airbnb Touches
              </h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 flex-shrink-0"></div>
                  <span>Pre-check visit & property inspection</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 flex-shrink-0"></div>
                  <span>Light ambient scent from premium brand</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 flex-shrink-0"></div>
                  <span>Welcome gift: luxury chocolates</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 flex-shrink-0"></div>
                  <span>Before & after property photos</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-ring rounded-full mr-3 flex-shrink-0"></div>
                  <span>Linen service (extra cost)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-border mt-auto">
          <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={onGetQuote}
            data-testid={`button-quote-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}