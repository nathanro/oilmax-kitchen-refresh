
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const sparkaidSteps = [
    {
      number: 1,
      title: "Sprinkle It In",
      description: "Add Sparklaid powder to your hot fryer oil. Just a small amount before or after service is all it takes.",
      image: "/lovable-uploads/97005545-76a4-4e86-b001-9673343f5b44.png"
    },
    {
      number: 2,
      title: "Let It Work",
      description: "The powder binds with carbon, crumbs, and impurities — even the stuff you can't see — so they're easier to filter out.",
      image: "/lovable-uploads/53666174-d2a7-4970-a99b-da46478ea303.png"
    },
    {
      number: 3,
      title: "Filter As Usual",
      description: "Use your current filtration system or pair with the Oil-Max Filter System. The powder goes to work helping your filter capture more — and faster.",
      image: "/lovable-uploads/c09a7a98-7045-4b05-bc0c-b0eab26b4475.png"
    },
    {
      number: 4,
      title: "Enjoy Cleaner Oil, Longer Fry Life",
      description: "Your oil stays cleaner, your food tastes better, and your wallet stays fuller. Change oil less often without sacrificing quality.",
      image: "/lovable-uploads/fe972632-e93f-4d4b-808f-a30c4937f3b7.png"
    }
  ];

  const filterSteps = [
    {
      number: 1,
      title: "Built-In Filtration",
      description: "Our Oil-Max filter systems feature advanced multi-stage filtration designed specifically for cooking oil.",
      image: "/lovable-uploads/a81e4e5c-6d5b-4164-b959-de86f1f630e9.png"
    },
    {
      number: 2,
      title: "Superior Capture Rate",
      description: "The specialized filter media captures particles and impurities more effectively than standard filtration systems.",
      image: "/lovable-uploads/887c55ba-1be0-4b87-bdb5-b343035e789d.png"
    },
    {
      number: 3,
      title: "Easy Maintenance",
      description: "Simple filter replacement and cleaning procedures keep your system running efficiently with minimal downtime.",
      image: "/lovable-uploads/b306df30-43df-4748-9a48-2c53c20e5236.png"
    },
    {
      number: 4,
      title: "Maximum Performance",
      description: "When combined with Sparklaid powder, our filters deliver the ultimate oil cleaning performance for extended oil life.",
      image: "/lovable-uploads/2f8544ac-c71f-4726-b908-17d13cefee0b.png"
    }
  ];

  const faqs = [
    {
      question: "How often should I use Sparklaid?",
      answer: "For best results, use Sparklaid daily or every time you filter your oil. This ensures maximum oil life extension and food quality improvement."
    },
    {
      question: "Is the Oil-Max system compatible with my fryer?",
      answer: "Yes! Sparklaid works with any commercial deep fryer and filtration system. Our Oil-Max filters can be integrated with most existing setups or used as standalone units."
    },
    {
      question: "Is Sparklaid organic and safe?",
      answer: "Absolutely. Sparklaid is 100% organic, FDA recognized, and USDA approved. It contains no harmful chemicals and is completely safe for food preparation."
    },
    {
      question: "How much oil life extension can I expect?",
      answer: "Most customers report extending their oil life by 3-4 times the normal duration when using the complete Oil-Max system. This varies based on what you're frying and how often, but the savings are substantial in all cases."
    },
    {
      question: "Will the Oil-Max system change the taste of my food?",
      answer: "The Oil-Max system improves food taste by removing impurities that cause off-flavors. Your customers will notice crisper, cleaner-tasting fried foods without any residual flavors."
    }
  ];

  return (
    <>
      <HeroSection
        title="🔄 How It Works: The Complete Oil-Max System"
        subtitle="The Oil-Max System combines two powerful components: Sparklaid filtration powder and Oil-Max filter systems. Together, they deliver unmatched oil cleaning performance for commercial kitchens."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* System Overview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Two Components, One Powerful System"
            subtitle="The Oil-Max System uses both Sparklaid powder and our specialized filter systems to maximize oil life and food quality."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sparklaid Powder</h3>
              <p className="text-gray-700">The organic filtration powder that binds to impurities in your fryer oil, making them easier to filter out.</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Oil-Max Filters</h3>
              <p className="text-gray-700">Specialized filter systems designed to capture more particles and work optimally with Sparklaid powder.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Sparklaid Works */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="How Sparklaid Works"
            subtitle="The organic powder that transforms your oil filtration process with a simple 4-step approach."
          />

          {sparkaidSteps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={step.image} 
                  alt={`Step ${step.number}: ${step.title}`} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Oil-Max Filters Work */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="How Oil-Max Filters Work"
            subtitle="Advanced filtration systems engineered to maximize the effectiveness of Sparklaid and extend oil life even further."
          />

          {filterSteps.map((step, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center`}>
              <div className="w-full md:w-1/2">
                <img 
                  src={step.image} 
                  alt={`Filter Step ${step.number}: ${step.title}`} 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Technical Specifications"
            subtitle="Everything you need to know about using the Oil-Max System in your kitchen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sparklaid Usage Guidelines</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use 2-4 oz of Sparklaid powder per 50 lbs of oil</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Oil temperature should be between 325°F - 350°F</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% organic, FDA recognized, and USDA approved</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compatible with all commercial fryers and filtration systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Oil-Max Filter Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-stage filtration technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available in multiple sizes for different kitchen needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy integration with existing fryer setups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manufactured in the USA by Sparkler Filters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about the Oil-Max System."
          />

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Try the Complete Oil-Max System?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Experience the benefits of the complete Oil-Max system in your kitchen and learn how our filters can maximize your oil life extension results.
          </p>
          <CTAButton 
            text="Request a System Quote" 
            link="/contact" 
            variant="quote"
            className="text-lg"
          />
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
