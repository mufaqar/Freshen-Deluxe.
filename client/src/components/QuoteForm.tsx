import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/use-seo";
import { sendFormEmail, type QuoteFormData } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";

interface QuoteFormProps {
  serviceType?: string;
}

export default function QuoteForm({ serviceType }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<QuoteFormData>({
    // Personal Information
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
    
    // Service Selection
    service: serviceType || "",
    
    // Residential/Deep Clean
    bedrooms: "",
    bathrooms: "",
    kitchen: "",
    livingRooms: "",
    frequency: "",
    hours: "",
    date: "",
    
    // Airbnb
    numberOfProperties: "",
    propertyConfigurations: "",
    locations: "",
    
    // Commercial
    numberOfCleaners: "",
    numberOfHours: "",
    buildingLocation: "",
    commercialFrequency: "",
    timeSlots: "",
    
    // Additional Info
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await sendFormEmail(formData, 'quote');
      
      if (result.success) {
        toast({
          title: "Quote Request Sent!",
          description: "Thank you! We've received your quote request and will get back to you within 24 hours.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          phone: "",
          service: serviceType || "",
          bedrooms: "",
          bathrooms: "",
          kitchen: "",
          livingRooms: "",
          frequency: "",
          hours: "",
          date: "",
          numberOfProperties: "",
          propertyConfigurations: "",
          locations: "",
          numberOfCleaners: "",
          numberOfHours: "",
          buildingLocation: "",
          commercialFrequency: "",
          timeSlots: "",
          additionalInfo: ""
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send quote request. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-ring/10 text-ring">Get Your Quote</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Request Your Personalized Quote
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and we'll send you a detailed quote
          </p>
        </div>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-primary">Quote Request Form</CardTitle>
            <CardDescription>
              Please provide your details and service requirements. We'll get back to you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                  Personal Information *
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                  Service Type *
                </h3>
                <div>
                  <Label htmlFor="service">Select Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residential Cleaning">Residential Cleaning</SelectItem>
                      <SelectItem value="Deep Cleaning">Deep Cleaning</SelectItem>
                      <SelectItem value="Holiday Homes Cleaning">Holiday Homes Cleaning</SelectItem>
                      <SelectItem value="Commercial Cleaning">Commercial Cleaning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Residential/Deep Clean Fields */}
              {(formData.service === "Residential Cleaning" || formData.service === "Deep Cleaning") && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                    Property Details *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bedrooms">Number of Bedrooms *</Label>
                      <Input
                        id="bedrooms"
                        type="number"
                        value={formData.bedrooms}
                        onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bathrooms">Number of Bathrooms *</Label>
                      <Input
                        id="bathrooms"
                        type="number"
                        value={formData.bathrooms}
                        onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="kitchen">Kitchen (Yes/No) *</Label>
                      <Select value={formData.kitchen} onValueChange={(value) => handleInputChange('kitchen', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="livingRooms">Number of Living Rooms *</Label>
                      <Input
                        id="livingRooms"
                        type="number"
                        value={formData.livingRooms}
                        onChange={(e) => handleInputChange('livingRooms', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  {formData.service === "Residential Cleaning" && (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="frequency">Frequency *</Label>
                          <Select value={formData.frequency} onValueChange={(value) => handleInputChange('frequency', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Weekly">Weekly</SelectItem>
                              <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                              <SelectItem value="Monthly">Monthly</SelectItem>
                              <SelectItem value="One-time">One-time</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="hours">Hours Requested *</Label>
                          <Input
                            id="hours"
                            placeholder="e.g., 3 hours"
                            value={formData.hours}
                            onChange={(e) => handleInputChange('hours', e.target.value)}
                            required
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            * We can recommend the amount of hours a house like yours would need
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {formData.service === "Deep Cleaning" && (
                    <div>
                      <Label htmlFor="date">Preferred Date or Time Slots *</Label>
                      <Input
                        id="date"
                        placeholder="e.g., Next Saturday or Morning slots"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Airbnb/Holiday Homes Fields */}
              {formData.service === "Holiday Homes Cleaning" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                    Holiday Home Details *
                  </h3>
                  <div>
                    <Label htmlFor="numberOfProperties">Number of Properties *</Label>
                    <Input
                      id="numberOfProperties"
                      type="number"
                      value={formData.numberOfProperties}
                      onChange={(e) => handleInputChange('numberOfProperties', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="propertyConfigurations">Property Configurations *</Label>
                    <Textarea
                      id="propertyConfigurations"
                      placeholder="e.g., 1 BHK, 2 BHK, 3 BHK, Studio, etc. If multiple properties, list all configurations"
                      value={formData.propertyConfigurations}
                      onChange={(e) => handleInputChange('propertyConfigurations', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="locations">Property Locations *</Label>
                    <Textarea
                      id="locations"
                      placeholder="e.g., Dubai Marina, Downtown Dubai, JBR, etc. If multiple properties, list all neighborhoods"
                      value={formData.locations}
                      onChange={(e) => handleInputChange('locations', e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Commercial Fields */}
              {formData.service === "Commercial Cleaning" && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                    Commercial Cleaning Details *
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="numberOfCleaners">Number of Cleaners Needed *</Label>
                      <Input
                        id="numberOfCleaners"
                        type="number"
                        value={formData.numberOfCleaners}
                        onChange={(e) => handleInputChange('numberOfCleaners', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="numberOfHours">Number of Hours *</Label>
                      <Input
                        id="numberOfHours"
                        type="number"
                        value={formData.numberOfHours}
                        onChange={(e) => handleInputChange('numberOfHours', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="buildingLocation">Building Location *</Label>
                    <Input
                      id="buildingLocation"
                      placeholder="e.g., Business Bay, Downtown Dubai"
                      value={formData.buildingLocation}
                      onChange={(e) => handleInputChange('buildingLocation', e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="commercialFrequency">Frequency *</Label>
                      <Select value={formData.commercialFrequency} onValueChange={(value) => handleInputChange('commercialFrequency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Daily">Daily</SelectItem>
                          <SelectItem value="Weekly">Weekly</SelectItem>
                          <SelectItem value="Bi-weekly">Bi-weekly</SelectItem>
                          <SelectItem value="Monthly">Monthly</SelectItem>
                          <SelectItem value="One-time">One-time</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeSlots">Preferred Time Slots *</Label>
                      <Input
                        id="timeSlots"
                        placeholder="e.g., Morning, Afternoon, Evening"
                        value={formData.timeSlots}
                        onChange={(e) => handleInputChange('timeSlots', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary border-b border-border pb-2">
                  Additional Information
                </h3>
                <div>
                  <Label htmlFor="additionalInfo">Any additional requirements or special requests?</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Please share any specific requirements, access instructions, or special requests..."
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-ring hover:bg-ring/90 text-primary-foreground sm:size-default lg:size-lg" 
                  size="sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Quote Request..." : "Send Quote Request"}
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-4">
                  We'll respond within 24 hours with your personalized quote
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
