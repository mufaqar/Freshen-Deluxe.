import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
import { sendFormEmail, type ContactFormData } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Please provide more details about your requirements"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const result = await sendFormEmail(data, 'contact');
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you! We've received your message and will get back to you within 24 hours.",
          duration: 5000,
        });
        
        form.reset();
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
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
    <div className="grid md:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
            Get in Touch
          </h3>
          <p className="text-muted-foreground mb-6">
            Ready to experience Dubai's most luxurious cleaning service? 
            Contact us for a personalized quote and consultation.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-ring/10 rounded-full">
              <Phone className="h-5 w-5 text-ring" />
            </div>
            <div>
              <p className="font-medium text-foreground">Phone</p>
              <p className="text-muted-foreground">+971 55 436 0800</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-ring/10 rounded-full">
              <Mail className="h-5 w-5 text-ring" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-muted-foreground">admin@freshendeluxe.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="p-2 bg-ring/10 rounded-full">
              <MessageSquare className="h-5 w-5 text-ring" />
            </div>
            <div>
              <p className="font-medium text-foreground">WhatsApp</p>
              <p className="text-muted-foreground">Quick response guaranteed</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border">
          <Button 
            size="sm"
            className="bg-ring hover:bg-ring/90 text-primary-foreground sm:size-default lg:size-lg"
            data-testid="button-whatsapp-contact"
            onClick={() => console.log('WhatsApp contact clicked')}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Message us on WhatsApp
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-serif text-primary">Send us a Message</CardTitle>
          <CardDescription>
            Fill out the form below and we'll get back to you within 24 hours
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Your full name" data-testid="input-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="your@email.com" data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="+971 50 123 4567" data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>


              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Tell us about your cleaning requirements, property size, preferred schedule, and any special requests..."
                        className="min-h-[120px]"
                        data-testid="textarea-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-ring hover:bg-ring/90 text-primary-foreground"
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}