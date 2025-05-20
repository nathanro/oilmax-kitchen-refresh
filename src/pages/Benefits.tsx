
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
  const benefitsList = [
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Up to 4x Longer Oil Life",
      description: "Oil-Max extends your fryer oil life by up to 4 times, dramatically reducing the frequency of oil changes and disposal costs.",
      detail: "Our customers typically report oil lasting 3-4 times longer than before using Oil-Max. For many restaurants, this means changing oil once a month instead of weekly."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Lower Oil Costs",
      description: "Save thousands of dollars per year on oil purchases. The ROI is immediate and significant.",
      detail: "The average restaurant with 3 fryers can save $5,000-$10,000 annually on oil costs alone. Oil-Max pays for itself many times over throughout the year."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Better Food Taste & Reviews",
      description: "Cleaner oil means better tasting food, which leads to improved customer satisfaction and reviews.",
      detail: "By removing impurities that cause off-flavors, Oil-Max helps maintain the true flavor of your food. Customers notice the difference in taste and crispiness."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Organic & Safe",
      description: "Oil-Max is FDA & USDA recognized, made from 100% organic materials with no harmful chemicals.",
      detail: "Our proprietary formula is completely safe and meets all regulatory requirements. It's manufactured in the USA under strict quality control standards."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "No Training Required",
      description: "The Oil-Max process is simple enough that any staff member can learn it in minutes.",
      detail: "Our simple 4-step process requires no special training and integrates easily into your existing filtration routine. Staff can master it after a single demonstration."
    },
    {
      icon: (
        <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Universal Compatibility",
      description: "Compatible with all commercial fryers and filtration systems without any equipment modifications.",
      detail: "Whether you have a built-in filtering system or use portable filters, Oil-Max works seamlessly with your existing equipment. No need to purchase or install any special devices."
    }
  ];

  const calculatorSteps = [
    {
      number: 1,
      title: "Current Oil Usage",
      description: "Calculate how much you currently spend on fryer oil each month."
    },
    {
      number: 2,
      title: "Oil-Max Factor",
      description: "Apply the Oil-Max extension factor (typically 3-4x longer oil life)."
    },
    {
      number: 3,
      title: "Cost of Oil-Max",
      description: "Subtract the cost of Oil-Max for your operation."
    },
    {
      number: 4,
      title: "Total Savings",
      description: "See your net savings after implementing Oil-Max."
    }
  ];

  return (
    <>
      <HeroSection
        title="The Benefits of Oil-Max"
        subtitle="Save money, improve food quality, and simplify your kitchen operations."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Oil-Max Makes a Difference"
            subtitle="Discover how Oil-Max can transform your kitchen operations and bottom line."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsList.map((benefit, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition duration-300">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <div className="mb-5">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <p className="text-gray-700 text-sm border-t border-gray-100 pt-4">{benefit.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Calculate Your Savings"
            subtitle="See how much your business could save with Oil-Max."
          />
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Number of Fryers</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="3"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Oil Changes per Month (per fryer)</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="4"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Oil Capacity (gallons per fryer)</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Cost per Gallon of Oil ($)</label>
                <input 
                  type="number" 
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="45"
                />
              </div>
            </div>
            
            <button className="bg-primary hover:bg-oilmax-dark text-white font-semibold py-2 px-6 rounded-md w-full">
              Calculate My Savings
            </button>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Estimated Annual Savings</h3>
              <div className="text-center">
                <span className="text-4xl font-bold text-primary">$7,560</span>
                <p className="text-gray-600 mt-2">Based on your inputs and an average 3.5x oil life extension</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">How We Calculate Your Savings</h3>
              <div className="space-y-4">
                {calculatorSteps.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-0.5">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Environmental Benefits"
            subtitle="Oil-Max doesn't just save you money—it helps the planet too."
          />
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&h=600&auto=format&fit=crop" 
                alt="Environmental Benefits" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Reduced Oil Usage and Waste
                </h3>
                <p className="text-gray-700">By extending oil life up to 4 times longer, Oil-Max significantly reduces the amount of oil consumed and disposed of by your kitchen.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lower Carbon Footprint
                </h3>
                <p className="text-gray-700">Fewer oil deliveries and waste removal trips means less transportation and a reduced carbon footprint for your business.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  100% Organic Materials
                </h3>
                <p className="text-gray-700">Oil-Max is made from completely organic materials that are environmentally friendly and biodegradable.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <svg className="w-6 h-6 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sustainable Kitchen Practices
                </h3>
                <p className="text-gray-700">Using Oil-Max demonstrates your commitment to sustainable practices, which increasingly matters to environmentally conscious customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Benefits Yourself</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Ready to start saving money and improving your food quality? Request a free sample of Oil-Max today.
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

export default Benefits;
