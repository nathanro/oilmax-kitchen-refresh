import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import LazyImage from "@/components/LazyImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Contact = () => {
  const [formType, setFormType] = useState("sample");
  const [honeypot, setHoneypot] = useState("");
  const [showVideo, setShowVideo] = useState(false);

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
                  <ContactForm 
                    formType="sample"
                    onFormStart={handleFormStart}
                    honeypot={honeypot}
                    setHoneypot={setHoneypot}
                  />
                </TabsContent>
                
                <TabsContent value="quote">
                  <ContactForm 
                    formType="quote"
                    onFormStart={handleFormStart}
                    honeypot={honeypot}
                    setHoneypot={setHoneypot}
                  />
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
                        <LazyImage 
                          src="/lovable-uploads/4bc3aa6c-7d2d-4faa-829e-b228a4826ccd.png" 
                          alt="Map showing Sparkler Filters location at 101 North Loop 336 East, Conroe, Texas" 
                          className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity rounded"
                          loading="lazy"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <LazyImage 
                          src="/lovable-uploads/4bc3aa6c-7d2d-4faa-829e-b228a4826ccd.png" 
                          alt="Map showing Sparkler Filters location at 101 North Loop 336 East, Conroe, Texas" 
                          className="w-full h-auto" 
                          loading="eager"
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
              <LazyImage 
                src="/lovable-uploads/235b3040-d129-47a1-9d46-33204ad1fc0a.jpg"
                alt="Sparkler Filters facility exterior view" 
                className="w-full h-64 object-cover" 
                loading="lazy"
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
                    className="relative cursor-pointer group p-4"
                    onClick={() => setShowVideo(true)}
                  >
                    <LazyImage 
                      src="/lovable-uploads/d41ede06-63a6-4fd6-9fb6-02795a5fdbba.png"
                      alt="Video cover - Sparkler Filters Inc."
                      className="w-full h-56 object-contain bg-gray-100 rounded transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all rounded m-4">
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
            }].map((faq, index) => (
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
