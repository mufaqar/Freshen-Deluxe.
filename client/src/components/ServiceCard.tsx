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
      <div className="relative h-40 overflow-hidden flex-shrink-0">
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

      <CardHeader className="pb-1 pt-3 px-4 flex-shrink-0">
        <CardTitle className="text-lg font-serif text-primary leading-tight">{title}</CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-2 flex-grow flex flex-col px-4 pb-3">
        <div className="flex-grow">
          <h4 className="font-semibold text-foreground mb-1.5 text-sm">Includes:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-xs text-muted-foreground">
                <div className="w-1 h-1 bg-ring rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          {specialTouches && (
            <div className="mt-4 p-3 bg-gradient-to-r from-ring/10 to-primary/10 rounded-lg border border-ring/20">
              <h5 className="font-semibold text-ring mb-2 flex items-center text-sm">
                <span className="text-sm mr-1">✨</span>
                Our Special Airbnb Touches
              </h5>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1 h-1 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                  <span>Pre-check visit & property inspection</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1 h-1 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                  <span>Light ambient scent from premium brand</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1 h-1 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                  <span>Welcome gift: luxury chocolates</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1 h-1 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                  <span>Before & after property photos</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <div className="w-1 h-1 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                  <span>Linen service (extra cost)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-3 border-t border-border mt-auto">
          <Button 
            className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
            onClick={onGetQuote}
            data-testid={`button-quote-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
          Instant Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}