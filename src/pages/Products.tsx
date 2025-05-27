
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Wrench, Box } from "lucide-react";

const Products = () => {
  return <>
      <HeroSection title="Our Products: Simple. Proven. Ready to Work." subtitle="Professional solutions for extending the life of your fryer oil." backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&h=700&auto=format&fit=crop" />

      {/* Main Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          
          {/* System Overview */}
          <div className="mb-16 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-800">The Oil-Max System</h2>
              </div>
              <p className="text-lg text-blue-700 max-w-4xl mx-auto">
                Our complete solution combines two essential products: Sparklaid filtration powder and Oil-Max physical filter systems, working together to maximize your fryer oil life.
              </p>
            </div>
          </div>
          
          {/* Sparklaid - Filtration Powder */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img src="/lovable-uploads/ed92be09-7974-4906-88a3-8143478cdf1b.png" alt="Sparklaid Organic Fryer Powder" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                <h3 className="text-xl font-semibold text-center mt-4">Sparklaid - Organic Fryer Powder</h3>
                <p className="text-center text-gray-600 mt-2 italic">A Sparkler Filters Brand</p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">🟩</span>
                  </div>
                  <h2 className="text-2xl font-bold">Sparklaid - Organic Fryer Powder</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our signature filtration powder — made from all-natural, food-safe ingredients that's added directly to your fryer oil.
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
                  <CTAButton text="Request a Quote" link="/contact" variant="quote" />
                </div>
              </div>
            </div>
          </div>

          {/* Oil-Max Filters - Physical Systems */}
          <div className="mb-16 border-t border-gray-100 pt-16">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img alt="Oil-Max Filtration Systems" className="rounded-lg shadow-lg w-full h-auto object-cover" src="/lovable-uploads/5271172d-9b9b-4b9f-88f5-641bfcb382bb.jpg" />
                <h3 className="text-xl font-semibold text-center mt-4">Oil-Max Filtration Systems</h3>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Oil-Max Filtration Systems</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Physical filter systems we manufacture and sell. Built for kitchens that need durable, easy-to-use equipment.
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
                  From single fryer stations to multi-basket heavy use setups, these systems are field-tested and kitchen-proof. While Sparklaid works with any fryer filter, our Oil-Max systems are the preferred choice for optimal results.
                </p>
                
                {/* Product Images Row */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-4 text-center">Our Filter Systems</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <img src="/lovable-uploads/95c3548e-3f0d-4cf8-98c1-5961df0ae5b1.png" alt="Oil-Max Filter System 1" className="w-full h-32 object-cover rounded-lg shadow-md" />
                      <p className="text-sm text-gray-600 mt-2">Compact System</p>
                    </div>
                    <div className="text-center">
                      <img src="/lovable-uploads/43b73590-e0a4-481a-91c4-5e5212f53331.png" alt="Oil-Max Filter System 2" className="w-full h-32 object-cover rounded-lg shadow-md" />
                      <p className="text-sm text-gray-600 mt-2">Standard System</p>
                    </div>
                    <div className="text-center">
                      <img src="/lovable-uploads/0541a846-38a4-4c60-84fa-eb3a079ead54.png" alt="Oil-Max Filter System 3" className="w-full h-32 object-cover rounded-lg shadow-md" />
                      <p className="text-sm text-gray-600 mt-2">Heavy Duty System</p>
                    </div>
                    <div className="text-center">
                      <img src="/lovable-uploads/0bc1e1c8-2174-4c5d-9669-49cfccd9f53e.png" alt="Oil-Max Filter System 4" className="w-full h-32 object-cover rounded-lg shadow-md" />
                      <p className="text-sm text-gray-600 mt-2">Professional System</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <CTAButton text="Request a Quote" link="/contact" variant="quote" />
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
                  <CTAButton text="Contact Us for Custom Solutions" link="/contact" variant="quote" className="text-lg" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Why Oil-Max Works Better" subtitle="The science behind cleaner oil and better-tasting food" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven ROI</h3>
                  <p className="text-gray-600">
                    Customers typically see return on investment within 2-4 weeks through reduced oil costs and improved food quality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Scientific Formula</h3>
                  <p className="text-gray-600">
                    Our organic compounds bind to polar compounds and free fatty acids that cause oil degradation and off-flavors.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">⏱️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Save Time</h3>
                  <p className="text-gray-600">
                    Less frequent oil changes mean more time cooking and serving customers instead of maintaining equipment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Staff Friendly</h3>
                  <p className="text-gray-600">
                    No special training required. Simple process that any kitchen staff member can follow safely and effectively.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Environmentally Safe</h3>
                  <p className="text-gray-600">
                    100% organic and biodegradable. Reduces oil waste and environmental impact of your kitchen operations.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry Proven</h3>
                  <p className="text-gray-600">
                    Trusted by over 2,500 kitchens since the 1960s, from small food trucks to major restaurant chains.
                  </p>
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
            Experience the benefits of Oil-Max in your own kitchen with a free sample of Sparklaid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton text="Get a Free Sample" link="/contact" variant="sample" className="text-lg" />
            <CTAButton text="Request a Quote" link="/contact" variant="quote" className="text-lg" />
          </div>
        </div>
      </section>
    </>;
};

export default Products;
