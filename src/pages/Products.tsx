
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Box } from "lucide-react";

const Products = () => {
  return (
    <>
      <HeroSection
        title="Our Products: Simple. Proven. Ready to Work."
        subtitle="Professional solutions for extending the life of your fryer oil."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Main Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          
          {/* Oil-Max Organic Fryer Powder */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/ed92be09-7974-4906-88a3-8143478cdf1b.png" 
                  alt="Oil-Max Organic Fryer Powder" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <h3 className="text-xl font-semibold text-center mt-4">Oil-Max Organic Fryer Powder</h3>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🟩</span>
                  </div>
                  <h2 className="text-2xl font-bold">Oil-Max Organic Fryer Powder</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our signature filtration powder — made from all-natural, food-safe ingredients.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Available in 40 lb box or bulk orders</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">GRAS certified & safe for commercial food service</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Works in all fryer types and oil filtration setups</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Just sprinkle, filter, and keep frying</span>
                  </li>
                </ul>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <Check className="w-6 h-6 text-green-500 mr-2" />
                    <span className="font-semibold text-green-800">No chemicals. No mess. Just results.</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <CTAButton 
                    text="Request a Quote" 
                    link="/contact" 
                    variant="quote"
                  />
                  <CTAButton 
                    text="Get a Free Sample" 
                    link="/contact" 
                    variant="sample"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Simple Filtration Systems */}
          <div className="mb-16 border-t border-gray-100 pt-16">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=500&h=350&auto=format&fit=crop" 
                  alt="Simple Filtration Systems" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <h3 className="text-xl font-semibold text-center mt-4">Simple Filtration Systems</h3>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Simple Filtration Systems</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Built for kitchens that need durable, easy-to-use equipment.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Compatible with most commercial fryers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Easy to clean and built to last</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Ideal for kitchens that don't yet have built-in filtration</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Available in multiple sizes to match your volume</span>
                  </li>
                </ul>

                <p className="text-gray-600 mb-6 italic">
                  From single fryer stations to multi-basket heavy use setups, these systems are field-tested and kitchen-proof.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <CTAButton 
                    text="Request a Quote" 
                    link="/contact" 
                    variant="quote"
                  />
                  <CTAButton 
                    text="Learn More" 
                    link="/contact" 
                    variant="sample"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="border-t border-gray-100 pt-16">
            <Card className="bg-gray-50 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Box className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Need Something Custom?</h2>
                  <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                    Have a unique fryer or setup? We've worked with everyone from food trucks to factories. 
                    Let our team help match the right equipment to your operation — fast, simple, and without the upsell.
                  </p>
                  <CTAButton 
                    text="Contact Us for Custom Solutions" 
                    link="/contact" 
                    variant="quote"
                    className="text-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try Oil-Max?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Experience the benefits of Oil-Max in your own kitchen with a free sample.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              text="Get a Free Sample" 
              link="/contact" 
              variant="sample" 
              className="text-lg"
            />
            <CTAButton 
              text="Request a Quote" 
              link="/contact" 
              variant="quote"
              className="text-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
