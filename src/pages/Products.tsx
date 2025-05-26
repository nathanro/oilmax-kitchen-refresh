import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  const products = [
    {
      name: "Oil-Max Organic Fryer Powder",
      description: "Our flagship product that extends oil life up to 4x longer while improving food quality and taste.",
      size: "40 lb Container",
      features: [
        "100% organic filtration powder",
        "FDA and USDA recognized",
        "Compatible with all commercial fryers",
        "Simple 4-step process",
        "Typically provides 3-4 months of daily use"
      ],
      image: "/lovable-uploads/f0d0c9bb-b2fc-4211-b2e3-d59974d4a406.png"
    },
    {
      name: "Oil-Max Organic Fryer Powder",
      description: "Our flagship product in a bulk size, perfect for larger operations or multiple locations.",
      size: "Bulk Option",
      features: [
        "100% organic filtration powder",
        "Available in custom quantities",
        "Bulk pricing discounts available",
        "Perfect for franchises and multi-location restaurants",
        "Special packaging options for convenient storage"
      ],
      image: "/lovable-uploads/0abe72b1-0f68-4b7a-b63f-ae6ba054e8a4.png"
    },
    {
      name: "Compact Filtration System",
      description: "A portable filtration system designed for kitchens without built-in filters.",
      size: "Standard Size",
      features: [
        "Easy-to-use portable filter",
        "Stainless steel construction",
        "Quick assembly and disassembly",
        "Compatible with Oil-Max powder",
        "Easy to clean and maintain"
      ],
      image: "/lovable-uploads/171cffd1-b743-4224-8624-48ab1ab37d28.png"
    },
    {
      name: "Replacement Filter Media",
      description: "High-quality filter media for use with our Compact Filtration System.",
      size: "Pack of 50",
      features: [
        "Professional-grade filter papers",
        "Designed for optimal Oil-Max filtration",
        "Heat resistant",
        "Easy to replace",
        "Compatible with most commercial filtration systems"
      ],
      image: "/lovable-uploads/dd39d216-b22d-4370-9d41-5268d5dda92d.png"
    }
  ];

  const compatibilityList = [
    "Electric deep fryers",
    "Gas fryers",
    "Countertop fryers",
    "Floor model fryers",
    "Pressure fryers",
    "Open fryers",
    "Built-in filtration systems",
    "Portable filtration systems",
    "Manual filtering equipment"
  ];

  // Foods that work well with Oil-Max
  const foodCategories = [
    {
      title: "Proteins",
      items: ["Chicken", "Fish", "Pork", "Seafood", "Beef"]
    },
    {
      title: "Vegetables",
      items: ["Onion Rings", "Vegetables", "Mushrooms", "Peppers", "Zucchini"]
    },
    {
      title: "Sides & Appetizers",
      items: ["French Fries", "Mozzarella Sticks", "Jalapeño Poppers", "Egg Rolls", "Wontons"]
    },
    {
      title: "Desserts",
      items: ["Donuts", "Funnel Cakes", "Churros", "Fritters", "Fried Ice Cream"]
    }
  ];

  return (
    <>
      <HeroSection
        title="Oil-Max Products"
        subtitle="Professional solutions for extending the life of your fryer oil."
        backgroundImage="/lovable-uploads/65abd924-c207-41df-b237-bc4593d24c10.png"
      />

      {/* Product Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Products"
            subtitle="Professional-grade filtration solutions for all commercial kitchens."
          />
          
          {products.map((product, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center border-b border-gray-100 pb-12 last:border-0 last:pb-0`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-oilmax-light text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  {product.size}
                </span>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
          ))}
        </div>
      </section>

      {/* Equipment Compatibility */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Equipment Compatibility"
            subtitle="Oil-Max works with any commercial fryer and filtration system."
          />
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Compatible with All Commercial Fryers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {compatibilityList.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/lovable-uploads/a5f06bcb-19fa-41a3-82a2-c4b46d9652ba.png" 
                alt="Oil filtration equipment" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Can You Fry */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="What Can You Fry With Oil-Max?"
            subtitle="Oil-Max improves the quality of virtually any fried food."
          />
          
          <Tabs defaultValue="proteins">
            <TabsList className="grid grid-cols-4 max-w-2xl mx-auto mb-8">
              {foodCategories.map((category) => (
                <TabsTrigger key={category.title} value={category.title.toLowerCase()}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {foodCategories.map((category) => (
              <TabsContent key={category.title} value={category.title.toLowerCase()}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
                  {category.items.map((food, idx) => (
                    <Card key={idx} className="border border-gray-200 overflow-hidden hover:shadow-md transition duration-300">
                      <div className="h-40 bg-gray-100 flex items-center justify-center">
                        <span className="text-3xl">{food === "French Fries" ? "🍟" : food === "Chicken" ? "🍗" : food === "Fish" ? "🐟" : food === "Donuts" ? "🍩" : "🍴"}</span>
                      </div>
                      <CardContent className="p-4 text-center">
                        <h3 className="font-medium text-gray-800">{food}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Usage Guide"
            subtitle="How much Oil-Max do you need for your kitchen?"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4">Recommended Usage</h3>
                <p className="text-gray-700 mb-6">
                  The amount of Oil-Max powder needed depends on your fryer size and oil capacity. Here's a general guideline:
                </p>
                
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left">Fryer Oil Capacity</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Recommended Oil-Max Amount</th>
                      <th className="border border-gray-200 px-4 py-3 text-left">Container Lasts Approximately</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Up to 15 lbs</td>
                      <td className="border border-gray-200 px-4 py-3">1 oz</td>
                      <td className="border border-gray-200 px-4 py-3">640 filtrations</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">15-30 lbs</td>
                      <td className="border border-gray-200 px-4 py-3">2 oz</td>
                      <td className="border border-gray-200 px-4 py-3">320 filtrations</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">30-50 lbs</td>
                      <td className="border border-gray-200 px-4 py-3">3 oz</td>
                      <td className="border border-gray-200 px-4 py-3">213 filtrations</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">50-75 lbs</td>
                      <td className="border border-gray-200 px-4 py-3">4 oz</td>
                      <td className="border border-gray-200 px-4 py-3">160 filtrations</td>
                    </tr>
                  </tbody>
                </table>
                
                <p className="text-gray-600 mt-4 text-sm">
                  * Based on a 40 lb container of Oil-Max powder. Actual results may vary depending on what foods you fry and your filtering frequency.
                </p>
              </div>
              
              <div className="bg-oilmax-light p-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Not Sure How Much You Need?</h3>
                <p className="text-gray-700 mb-6">
                  Our team can help you determine the perfect amount of Oil-Max for your specific kitchen setup.
                </p>
                <CTAButton 
                  text="Contact Us for Guidance" 
                  link="/contact" 
                  variant="quote"
                />
              </div>
            </div>
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
