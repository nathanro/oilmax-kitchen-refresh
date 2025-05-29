
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  formType: 'sample' | 'quote';
  onFormStart: (e: React.FocusEvent) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
}

const ContactForm = ({ formType, onFormStart, honeypot, setHoneypot }: ContactFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bot protection: check honeypot field
    if (honeypot) {
      console.log("Bot detected, ignoring submission");
      return;
    }

    // Additional bot protection: check submission speed
    const formElement = e.target as HTMLFormElement;
    const startTime = formElement.dataset.startTime;
    if (startTime && Date.now() - parseInt(startTime) < 3000) {
      console.log("Form submitted too quickly, possible bot");
      return;
    }
    
    toast({
      title: formType === "sample" ? "Free Sample Request Sent!" : "Quote Request Sent!",
      description: "We'll be in touch with you shortly at the email address you provided.",
      variant: "default"
    });
  };

  if (formType === 'sample') {
    return (
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field for bot protection */}
            <input 
              type="text" 
              name="website" 
              value={honeypot} 
              onChange={e => setHoneypot(e.target.value)} 
              style={{ display: 'none' }} 
              tabIndex={-1} 
              autoComplete="off" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                  onFocus={onFormStart} 
                  required 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-gray-700 font-medium mb-2">Business Name</label>
                <input 
                  type="text" 
                  id="business" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Shipping Address</label>
              <input 
                type="text" 
                id="address" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="fry" className="block text-gray-700 font-medium mb-2">What do you fry?</label>
              <textarea 
                id="fry" 
                rows={3} 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="List main items fried in your kitchen..." 
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Business Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Restaurant", "Food Truck", "Franchise", "Cafeteria", "Restaurant Supply", "Other"].map(type => (
                  <label key={type} className="flex items-center">
                    <input type="radio" name="businessType" value={type} className="mr-2" required />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="fryers" className="block text-gray-700 font-medium mb-2">Number of Fryers</label>
              <select 
                id="fryers" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                required
              >
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="additional-info" className="block text-gray-700 font-medium mb-2">Additional Information/Comments</label>
              <textarea 
                id="additional-info" 
                rows={4} 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Please share any additional information about your business, specific requirements, or questions you may have..."
              />
            </div>
            
            <div>
              <label className="flex items-start">
                <input type="checkbox" className="mt-1 mr-2" required />
                <span className="text-gray-700 text-sm">
                  I understand that by submitting this form, I agree to receive a free sample of Oil-Max and 
                  follow-up communications. Oil-Max will not sell or share my information with third parties.
                </span>
              </label>
            </div>
            
            <Button type="submit" className="bg-cta hover:bg-cta-hover text-white font-semibold py-2 px-6 rounded-md">
              Request Free Sample
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field for bot protection */}
          <input 
            type="text" 
            name="website" 
            value={honeypot} 
            onChange={e => setHoneypot(e.target.value)} 
            style={{ display: 'none' }} 
            tabIndex={-1} 
            autoComplete="off" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quote-name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="quote-name" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                onFocus={onFormStart} 
                required 
              />
            </div>
            <div>
              <label htmlFor="quote-email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="quote-email" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input 
                type="tel" 
                id="quote-phone" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
              />
            </div>
            <div>
              <label htmlFor="quote-business" className="block text-gray-700 font-medium mb-2">Business Name</label>
              <input 
                type="text" 
                id="quote-business" 
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                required 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">Business Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Restaurant", "Food Truck", "Franchise", "Cafeteria", "Restaurant Supply", "Other"].map(type => (
                <label key={type} className="flex items-center">
                  <input type="radio" name="quoteBusinessType" value={type} className="mr-2" required />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="quote-message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
            <textarea 
              id="quote-message" 
              rows={4} 
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
              placeholder="Tell us about your current oil usage, filtering practices, and any specific requirements..."
            />
          </div>
          
          <Button type="submit" className="bg-primary hover:bg-oilmax-dark text-white font-semibold py-2 px-6 rounded-md">
            Request Quote
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
