import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState("sample");
  const [honeypot, setHoneypot] = useState("");
  
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
      variant: "default",
    });
  };

  const handleFormStart = (e: React.FocusEvent) => {
    const form = e.currentTarget.closest('form');
    if (form && !form.dataset.startTime) {
      form.dataset.startTime = Date.now().toString();
    }
  };

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Request a free sample or get a personalized quote for your business."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Contact Form */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-2/3">
              <Tabs defaultValue="sample" onValueChange={setFormType}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="sample">Free Sample</TabsTrigger>
                  <TabsTrigger value="quote">Request Quote</TabsTrigger>
                </TabsList>
                
                <TabsContent value="sample">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot field for bot protection */}
                        <input
                          type="text"
                          name="website"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
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
                              onFocus={handleFormStart}
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
                          ></textarea>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Business Type</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["Restaurant", "Food Truck", "Franchise", "Cafeteria", "Other"].map((type) => (
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
                </TabsContent>
                
                <TabsContent value="quote">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Honeypot field for bot protection */}
                        <input
                          type="text"
                          name="website"
                          value={honeypot}
                          onChange={(e) => setHoneypot(e.target.value)}
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
                              onFocus={handleFormStart}
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
                          <label htmlFor="quote-locations" className="block text-gray-700 font-medium mb-2">Number of Locations</label>
                          <select 
                            id="quote-locations"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            <option value="">Select</option>
                            <option value="1">1</option>
                            <option value="2-5">2-5</option>
                            <option value="6-20">6-20</option>
                            <option value="21-50">21-50</option>
                            <option value="50+">50+</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="quote-fryers" className="block text-gray-700 font-medium mb-2">Average Number of Fryers per Location</label>
                          <select 
                            id="quote-fryers"
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
                          <label htmlFor="quote-message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                          <textarea 
                            id="quote-message" 
                            rows={4} 
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Tell us about your current oil usage, filtering practices, and any specific requirements..."
                          ></textarea>
                        </div>
                        
                        <Button type="submit" className="bg-primary hover:bg-oilmax-dark text-white font-semibold py-2 px-6 rounded-md">
                          Request Quote
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="w-full lg:w-1/3">
              <div className="bg-oilmax-light rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Address</h4>
                      <p className="text-gray-600 mt-1">101 North Loop 336 East<br />Conroe, Texas, USA 77301</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600 mt-1">
                        <span data-email="info" data-domain="oil-max.com">info[at]oil-max[dot]com</span>
                      </p>
                      <p className="text-gray-600">
                        <span data-email="info" data-domain="oil-max.com">info[at]oil-max[dot]com</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Phone</h4>
                      <p className="text-gray-600 mt-1">(936) 756-4471</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-800">Hours</h4>
                      <p className="text-gray-600 mt-1">Monday - Friday: 8AM - 5PM CST</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                {/* Social media icons hidden temporarily */}
                {/*
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-50 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-50 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-50 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-50 transition duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.9-1.382-.419.419-.824.679-1.38.896-.42.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
            {/* This would be a map component in a real implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600">Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about Oil-Max and ordering."
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                q: "How long does shipping take for free samples?",
                a: "Free samples typically ship within 1-2 business days and arrive within 5-7 business days, depending on your location."
              },
              {
                q: "Is there a limit to how many free samples I can request?",
                a: "We typically provide one free sample per business location to allow you to test Oil-Max in your kitchen environment."
              },
              {
                q: "Do you offer bulk discounts for larger orders?",
                a: "Yes, we offer tiered pricing for bulk orders. Request a quote with your specific requirements for detailed pricing."
              },
              {
                q: "Is Oil-Max compatible with my fryer?",
                a: "Oil-Max is compatible with all commercial fryers and filtration systems. If you have specific concerns about your equipment, please mention it in your inquiry."
              },
              {
                q: "Where is Oil-Max manufactured?",
                a: "Oil-Max is proudly manufactured in the USA by Sparkler Filters, ensuring the highest quality standards."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
