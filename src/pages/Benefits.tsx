import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const [fryers, setFryers] = useState<string>("");
  const [changesPerMonth, setChangesPerMonth] = useState<string>("");
  const [oilCapacity, setOilCapacity] = useState<string>("");
  const [costPerGallon, setCostPerGallon] = useState<string>("");
  const [savings, setSavings] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const calculateSavings = () => {
    // Reset states
    setError("");
    setSavings(null);

    // Parse inputs
    const fryersNum = parseInt(fryers);
    const changesNum = parseInt(changesPerMonth);
    const capacityNum = parseFloat(oilCapacity);
    const costNum = parseFloat(costPerGallon);

    // Validation
    if (!fryers || !changesPerMonth || !oilCapacity || !costPerGallon) {
      setError("Please enter valid values above 0 for all fields.");
      return;
    }

    if (fryersNum < 1 || changesNum < 1 || capacityNum <= 0 || costNum <= 0) {
      setError("Please enter valid values above 0 for all fields.");
      return;
    }

    if (isNaN(fryersNum) || isNaN(changesNum) || isNaN(capacityNum) || isNaN(costNum)) {
      setError("Please enter valid values above 0 for all fields.");
      return;
    }

    // Calculate baseline annual cost
    const baseline = fryersNum * changesNum * 12 * capacityNum * costNum;
    
    // Calculate reduced cost with Oil-Max (3.5x extension factor)
    const reduced = fryersNum * (changesNum / 3.5) * 12 * capacityNum * costNum;
    
    // Calculate annual savings and round to nearest dollar
    const annualSavings = Math.round(baseline - reduced);
    
    setSavings(annualSavings);
  };

  const benefitsList = [
    {
      icon: "💸",
      title: "Save Thousands Per Year",
      description: "Our customers routinely cut fryer oil costs in half or more. One national chain saved over $3 million a year after switching to Oil-Max.",
      detail: "Even small restaurants and food trucks report saving hundreds to thousands annually. The ROI is immediate and significant."
    },
    {
      icon: "😋",
      title: "Better-Tasting Food",
      description: "Clean oil means crispier fries, golden-brown donuts, and fried chicken that tastes fresh — not greasy.",
      detail: "Customers notice. So do your online reviews. Better oil quality directly translates to improved food taste and customer satisfaction."
    },
    {
      icon: "🧼",
      title: "Cleaner Oil for Longer",
      description: "Oil-Max binds impurities and food particles, making filtration more effective and extending your oil life by up to 4x.",
      detail: "That means fewer oil changes, better clarity, and less downtime — with no drop in food quality."
    },
    {
      icon: "🧑‍🍳",
      title: "No Training or Special Equipment Needed",
      description: "Just sprinkle, filter, and go. Oil-Max works with your existing fryer and filtration setup.",
      detail: "It's simple, safe, and easy enough for any staff member to use — from the most experienced chefs to new hires."
    },
    {
      icon: "🛻",
      title: "For Every Kitchen, Big or Small",
      description: "From single-fryer food trucks and gas stations to chicken wing shops running 10 fryers all day — and even large-scale industrial fryers.",
      detail: "Oil-Max scales to match your operation. Wherever you fry, we've got you covered."
    },
    {
      icon: "🪴",
      title: "Organic, Food-Safe Formula",
      description: "Made from natural, non-toxic ingredients and recognized by the FDA and USDA, Oil-Max is safer for your food, your staff, and your customers.",
      detail: "Unlike chemical-based powders, Oil-Max is clean, green, and GRAS-certified. The only 100% Organic Safe Fry Formula!"
    },
    {
      icon: "🏗️",
      title: "Built in the USA. Backed by Real Support.",
      description: "Oil-Max is proudly manufactured in America and supported by Sparkler Filters, the company that invented the commercial cooking oil filter.",
      detail: "Have questions? Need help? Our team in Texas is just a phone call away — and we stand by every box we ship."
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
        title="🌟 Benefits of Oil-Max: Clean Oil. Better Food. Real Savings."
        subtitle="Discover how Oil-Max transforms kitchen operations with proven results and real customer savings."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Oil-Max Makes a Difference"
            subtitle="From cost savings to food quality improvements, Oil-Max delivers results that matter to your business."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsList.map((benefit, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition duration-300">
                <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                  <div className="text-6xl mb-5">{benefit.icon}</div>
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
                <Input 
                  type="number" 
                  value={fryers}
                  onChange={(e) => setFryers(e.target.value)}
                  placeholder="3"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Oil Changes per Month (per fryer)</label>
                <Input 
                  type="number" 
                  value={changesPerMonth}
                  onChange={(e) => setChangesPerMonth(e.target.value)}
                  placeholder="4"
                  min="1"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Oil Capacity (gallons per fryer)</label>
                <Input 
                  type="number" 
                  value={oilCapacity}
                  onChange={(e) => setOilCapacity(e.target.value)}
                  placeholder="35"
                  min="0.1"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Cost per Gallon of Oil ($)</label>
                <Input 
                  type="number" 
                  value={costPerGallon}
                  onChange={(e) => setCostPerGallon(e.target.value)}
                  placeholder="45"
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>
            
            <Button 
              onClick={calculateSavings}
              className="bg-primary hover:bg-oilmax-dark text-white font-semibold py-2 px-6 rounded-md w-full"
            >
              Calculate My Savings
            </Button>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Estimated Annual Savings</h3>
              <div className="text-center">
                {error ? (
                  <p className="text-red-600 font-medium">{error}</p>
                ) : savings !== null ? (
                  <>
                    <span className="text-4xl font-bold text-primary">${savings.toLocaleString()}</span>
                    <p className="text-gray-600 mt-2">Based on your inputs and an average 3.5x oil life extension</p>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-primary">$0</span>
                    <p className="text-gray-600 mt-2">Enter your values above and click calculate to see your savings</p>
                  </>
                )}
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
                src="/lovable-uploads/eda3412b-debf-45f6-a0e1-1cc652f042f2.png" 
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
            Ready to start saving money and improving your food quality? Request a quote today.
          </p>
          <div className="flex justify-center">
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
