import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  image: string;
  icon: LucideIcon;
  popular?: boolean;
  onGetQuote?: () => void;
}

export default function ServiceCard({
  title,
  description,
  features,
  pricing,
  image,
  icon: Icon,
  popular = false,
  onGetQuote
}: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden group hover-elevate">
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-ring text-primary-foreground">
          Most Popular
        </Badge>
      )}
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-serif text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Includes:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-ring rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-primary">{pricing}</span>
          </div>
          
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