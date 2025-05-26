import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: 1,
      title: t.howItWorks.steps.sprinkle.name,
      description: t.howItWorks.steps.sprinkle.description,
      image: "/lovable-uploads/97005545-76a4-4e86-b001-9673343f5b44.png"
    },
    {
      number: 2,
      title: t.howItWorks.steps.bind.name,
      description: t.howItWorks.steps.bind.description,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=500&auto=format&fit=crop"
    },
    {
      number: 3,
      title: t.howItWorks.steps.filter.name,
      description: t.howItWorks.steps.filter.description,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=500&auto=format&fit=crop"
    },
    {
      number: 4,
      title: t.howItWorks.steps.fry.name,
      description: t.howItWorks.steps.fry.description,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&h=500&auto=format&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "How often should I use Oil-Max?",
      answer: "For best results, use Oil-Max daily or every time you filter your oil. This ensures maximum oil life extension and food quality improvement."
    },
    {
      question: "Is Oil-Max compatible with my fryer?",
      answer: "Yes! Oil-Max works with any commercial deep fryer and filtration system. It's not equipment-specific and requires no special setup or installation."
    },
    {
      question: "Is Oil-Max organic and safe?",
      answer: "Absolutely. Oil-Max is 100% organic, FDA recognized, and USDA approved. It contains no harmful chemicals and is completely safe for food preparation."
    },
    {
      question: "How much oil life extension can I expect?",
      answer: "Most customers report extending their oil life by 3-4 times the normal duration. This varies based on what you're frying and how often, but the savings are substantial in all cases."
    },
    {
      question: "Will Oil-Max change the taste of my food?",
      answer: "Oil-Max improves food taste by removing impurities that cause off-flavors. Your customers will notice crisper, cleaner-tasting fried foods without any residual flavors."
    }
  ];

  return (
    <>
      <HeroSection
        title={t.howItWorks.title}
        subtitle={t.howItWorks.subtitle}
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Process Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title={t.howItWorks.title}
            subtitle={t.howItWorks.subtitle}
          />

          {steps.map((step, index) => (
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

      {/* Video Demonstration */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="See Oil-Max in Action"
            subtitle="Watch how easy it is to implement Oil-Max in your kitchen."
          />

          <div className="max-w-4xl mx-auto bg-black aspect-video rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-white text-center p-8">
              <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-lg">Video Demonstration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Technical Specifications"
            subtitle="Everything you need to know about using Oil-Max in your kitchen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Usage Guidelines</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use 2-4 oz of Oil-Max powder per 50 lbs of oil</span>
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
                  <span>Filter daily for best results</span>
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
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% organic composition</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available in 40 lb containers and bulk options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>FDA recognized and USDA approved</span>
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
            subtitle="Everything you need to know about Oil-Max."
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

export default HowItWorks;
