import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calculator as CalcIcon, MessageSquare } from "lucide-react";

interface CalculatorProps {
  onWhatsAppQuote?: (details: any) => void;
}

export default function Calculator({ onWhatsAppQuote }: CalculatorProps) {
  const [serviceType, setServiceType] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("");
  const [rooms, setRooms] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [area, setArea] = useState<string>("");
  
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    let basePrice = 0;
    
    // Base pricing logic (simplified)
    if (serviceType === "residential") {
      if (propertyType === "regular") {
        basePrice = parseInt(rooms) * 80; // AED 80 per room
      } else if (propertyType === "deep") {
        basePrice = parseInt(rooms) * 150; // AED 150 per room deep clean
      }
    } else if (serviceType === "airbnb") {
      if (propertyType === "regular") {
        basePrice = parseInt(rooms) * 100; // AED 100 per room
      } else if (propertyType === "deep") {
        basePrice = parseInt(rooms) * 180; // AED 180 per room deep clean
      }
    } else if (serviceType === "commercial") {
      const sqm = parseInt(area);
      basePrice = sqm * 5; // AED 5 per sqm
    }

    // Frequency discount
    let discount = 0;
    if (frequency === "weekly") discount = 0.15;
    else if (frequency === "biweekly") discount = 0.10;
    else if (frequency === "monthly") discount = 0.05;

    const finalPrice = basePrice * (1 - discount);
    setEstimate(finalPrice);
  };

  const handleWhatsAppQuote = () => {
    const details = {
      serviceType,
      propertyType,
      rooms,
      frequency,
      area,
      estimate
    };
    
    if (onWhatsAppQuote) {
      onWhatsAppQuote(details);
    } else {
      console.log('WhatsApp quote requested:', details);
    }
  };

  const isFormValid = () => {
    if (serviceType === "commercial") {
      return serviceType && area;
    } else {
      return serviceType && propertyType && rooms;
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-ring/10 rounded-full">
            <CalcIcon className="h-8 w-8 text-ring" />
          </div>
        </div>
        <CardTitle className="text-2xl font-serif text-primary">Service Calculator</CardTitle>
        <CardDescription>
          Get an instant estimate for your cleaning service requirements
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Service Type */}
        <div className="space-y-2">
          <Label htmlFor="service-type">Service Type</Label>
          <Select value={serviceType} onValueChange={setServiceType}>
            <SelectTrigger data-testid="select-service-type">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="airbnb">Airbnb</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Commercial Area */}
        {serviceType === "commercial" && (
          <div className="space-y-2">
            <Label htmlFor="area">Area (Square Meters)</Label>
            <Input
              id="area"
              type="number"
              placeholder="Enter area in sqm"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              data-testid="input-area"
            />
          </div>
        )}

        {/* Property Type for Residential/Airbnb */}
        {(serviceType === "residential" || serviceType === "airbnb") && (
          <div className="space-y-2">
            <Label htmlFor="property-type">Cleaning Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger data-testid="select-property-type">
                <SelectValue placeholder="Select cleaning type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular Refresh</SelectItem>
                <SelectItem value="deep">Deep Cleaning</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Number of Rooms */}
        {(serviceType === "residential" || serviceType === "airbnb") && (
          <div className="space-y-2">
            <Label htmlFor="rooms">Number of Rooms</Label>
            <Select value={rooms} onValueChange={setRooms}>
              <SelectTrigger data-testid="select-rooms">
                <SelectValue placeholder="Select number of rooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Room</SelectItem>
                <SelectItem value="2">2 Rooms</SelectItem>
                <SelectItem value="3">3 Rooms</SelectItem>
                <SelectItem value="4">4 Rooms</SelectItem>
                <SelectItem value="5">5+ Rooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Frequency */}
        <div className="space-y-2">
          <Label htmlFor="frequency">Service Frequency</Label>
          <Select value={frequency} onValueChange={setFrequency}>
            <SelectTrigger data-testid="select-frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="one-time">One-time Service</SelectItem>
              <SelectItem value="weekly">Weekly (15% discount)</SelectItem>
              <SelectItem value="biweekly">Bi-weekly (10% discount)</SelectItem>
              <SelectItem value="monthly">Monthly (5% discount)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Calculate Button */}
        <Button 
          onClick={calculateEstimate}
          disabled={!isFormValid()}
          className="w-full bg-primary hover:bg-primary/90"
          data-testid="button-calculate"
        >
          Calculate Estimate
        </Button>

        {/* Results */}
        {estimate !== null && (
          <div className="p-6 bg-ring/5 rounded-lg border border-ring/20">
            <div className="text-center space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Estimated Cost</p>
                <p className="text-3xl font-bold text-primary">
                  AED {estimate.toFixed(0)}
                </p>
                {frequency !== "one-time" && (
                  <Badge variant="secondary" className="mt-2">
                    Recurring discount applied
                  </Badge>
                )}
              </div>
              
              <div className="pt-4 border-t border-ring/20">
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to book? Get in touch for a detailed quote
                </p>
                <Button 
                  onClick={handleWhatsAppQuote}
                  className="bg-ring hover:bg-ring/90 text-primary-foreground"
                  data-testid="button-whatsapp-quote"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Get Quote on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}