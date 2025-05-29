import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Contact = () => {
  const {
    toast
  } = useToast();
  const [formType, setFormType] = useState("sample");
  const [honeypot, setHoneypot] = useState("");
  const [showVideo, setShowVideo] = useState(false);

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
                        <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)} style={{
                        display: 'none'
                      }} tabIndex={-1} autoComplete="off" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" onFocus={handleFormStart} required />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                            <input type="tel" id="phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                          </div>
                          <div>
                            <label htmlFor="business" className="block text-gray-700 font-medium mb-2">Business Name</label>
                            <input type="text" id="business" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Shipping Address</label>
                          <input type="text" id="address" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                        </div>
                        
                        <div>
                          <label htmlFor="fry" className="block text-gray-700 font-medium mb-2">What do you fry?</label>
                          <textarea id="fry" rows={3} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="List main items fried in your kitchen..." required></textarea>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Business Type</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["Restaurant", "Food Truck", "Franchise", "Cafeteria", "Restaurant Supply", "Other"].map(type => <label key={type} className="flex items-center">
                                <input type="radio" name="businessType" value={type} className="mr-2" required />
                                <span>{type}</span>
                              </label>)}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="fryers" className="block text-gray-700 font-medium mb-2">Number of Fryers</label>
                          <select id="fryers" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required>
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
                          <textarea id="additional-info" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Please share any additional information about your business, specific requirements, or questions you may have..."></textarea>
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
                        <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)} style={{
                        display: 'none'
                      }} tabIndex={-1} autoComplete="off" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="quote-name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input type="text" id="quote-name" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" onFocus={handleFormStart} required />
                          </div>
                          <div>
                            <label htmlFor="quote-email" className="block text-gray-700 font-medium mb-2">Email</label>
                            <input type="email" id="quote-email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                          </div>
                          <div>
                            <label htmlFor="quote-phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                            <input type="tel" id="quote-phone" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
                          </div>
                          <div>
                            <label htmlFor="quote-business" className="block text-gray-700 font-medium mb-2">Business Name</label>
                            <input type="text" id="quote-business" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" required />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Business Type</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {["Restaurant", "Food Truck", "Franchise", "Cafeteria", "Restaurant Supply", "Other"].map(type => <label key={type} className="flex items-center">
                                <input type="radio" name="quoteBusinessType" value={type} className="mr-2" required />
                                <span>{type}</span>
                              </label>)}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="quote-message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                          <textarea id="quote-message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your current oil usage, filtering practices, and any specific requirements..."></textarea>
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

                  {/* Location Map */}
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-3">Our Location</h4>
                    <Dialog>
                      <DialogTrigger asChild>
                        <img 
                          src="/lovable-uploads/4bc3aa6c-7d2d-4faa-829e-b228a4826ccd.png" 
                          alt="Map showing Sparkler Filters location at 101 North Loop 336 East, Conroe, Texas" 
                          className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity" 
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <img 
                          src="/lovable-uploads/4bc3aa6c-7d2d-4faa-829e-b228a4826ccd.png" 
                          alt="Map showing Sparkler Filters location at 101 North Loop 336 East, Conroe, Texas" 
                          className="w-full h-auto" 
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Images Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading 
            title="Our Facility" 
            subtitle="Sparkler Filters Inc. - Manufacturing Oil-Max in Conroe, Texas" 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                alt="Sparkler Filters facility exterior view" 
                className="w-full h-64 object-cover" 
                src="/lovable-uploads/235b3040-d129-47a1-9d46-33204ad1fc0a.jpg" 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Manufacturing Facility</h3>
                <p className="text-gray-600">Our state-of-the-art facility in Conroe, Texas where Oil-Max is manufactured with the highest quality standards.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                {!showVideo ? (
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => setShowVideo(true)}
                  >
                    <img 
                      src="/lovable-uploads/d41ede06-63a6-4fd6-9fb6-02795a5fdbba.png"
                      alt="Video cover - Sparkler Filters Inc."
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all">
                      <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <video 
                    className="w-full h-64 object-cover" 
                    controls
                    autoPlay
                    preload="metadata"
                  >
                    <source src="https://storage.googleapis.com/msgsndr/nmW3gLctihiAASowE1dC/media/6837b19ef362d6a4b8aced34.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sparkler Filters Inc.</h3>
                <p className="text-gray-600">The home of Oil-Max production, proudly serving the food service industry with innovative filtration solutions.</p>
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
            {[{
            q: "How long does shipping take for free samples?",
            a: "Free samples typically ship within 1-2 business days and arrive within 5-7 business days, depending on your location."
          }, {
            q: "Is there a limit to how many free samples I can request?",
            a: "We typically provide one free sample per business location to allow you to test Oil-Max in your kitchen environment."
          }, {
            q: "Do you offer bulk discounts for larger orders?",
            a: "Yes, we offer tiered pricing for bulk orders. Request a quote with your specific requirements for detailed pricing."
          }, {
            q: "Is Sparklaid compatible with my fryer?",
            a: "Sparklaid is compatible with all commercial fryers and filtration systems. If you have specific concerns about your equipment, please mention it in your inquiry."
          }, {
            q: "Where is Oil-Max manufactured?",
            a: "Oil-Max is proudly manufactured in the USA by Sparkler Filters, ensuring the highest quality standards."
          }].map((faq, index) => <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0">
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
