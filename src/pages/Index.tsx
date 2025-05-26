import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Benefit cards data
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t.benefits.cards.longerOil.title,
      description: t.benefits.cards.longerOil.description
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: t.benefits.cards.betterTaste.title,
      description: t.benefits.cards.betterTaste.description
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: t.benefits.cards.organic.title,
      description: t.benefits.cards.organic.description
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t.benefits.cards.easyUse.title,
      description: t.benefits.cards.easyUse.description
    }
  ];

  // Trusted by logos with real image URLs
  const trustedBy = [
    { name: "Burger King", logo: "/lovable-uploads/b0da71e3-4baf-41ca-a3a9-0052a6571d25.png" },
    { name: "Major Donut Chain", logo: "/lovable-uploads/5e4184f2-d496-469f-8726-f21f96714dbe.png" },
    { name: "Sparkler Filters", logo: "/lovable-uploads/cfdd392f-f156-4534-90f4-e945e4664245.png" },
    { name: "Restaurant Chain", logo: "/lovable-uploads/restaurant-logo.png" },
  ];

  return (
    <>
      <HeroSection
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        backgroundImage="/lovable-uploads/27e087fd-7df8-4336-8c0f-0e54e1224105.png"
      />

      {/* Quick Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title={t.benefits.title}
            subtitle={t.benefits.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition duration-300">
                <CardContent className="pt-6 flex flex-col items-center text-center p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title={t.howItWorks.title}
            subtitle={t.howItWorks.subtitle}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: t.howItWorks.steps.sprinkle.name, desc: t.howItWorks.steps.sprinkle.description },
              { step: t.howItWorks.steps.bind.name, desc: t.howItWorks.steps.bind.description },
              { step: t.howItWorks.steps.filter.name, desc: t.howItWorks.steps.filter.description },
              { step: t.howItWorks.steps.fry.name, desc: t.howItWorks.steps.fry.description }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{item.step}</h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center">
              {t.howItWorks.learnMoreLink}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-primary opacity-50 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
              <p className="text-lg text-gray-700 mb-6">
                {t.testimonials.featuredQuote}
              </p>
              <div>
                <p className="font-semibold text-gray-800">{t.testimonials.featuredName}</p>
                <p className="text-gray-600">{t.testimonials.featuredPosition}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/testimonials" className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center">
              {t.testimonials.readMoreLink}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title={t.trustedBy.title}
            subtitle={t.trustedBy.subtitle}
          />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedBy.map((company, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                <img src={company.logo} alt={company.name} className="h-16 object-contain" />
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src="/lovable-uploads/fda-logo.png" alt="FDA Recognized" className="h-10 w-10 object-contain mr-2" />
              <span className="text-gray-700 font-medium">{t.trustedBy.certifications.fda}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src="/lovable-uploads/usda-logo.png" alt="USDA Approved" className="h-10 w-10 object-contain mr-2" />
              <span className="text-gray-700 font-medium">{t.trustedBy.certifications.usda}</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src="/lovable-uploads/usa-logo.png" alt="Made in USA" className="h-10 w-10 object-contain mr-2" />
              <span className="text-gray-700 font-medium">{t.trustedBy.certifications.usa}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton 
              text={t.cta.sampleButton} 
              link="/contact" 
              variant="sample" 
              className="text-lg"
            />
            <CTAButton 
              text={t.cta.quoteButton} 
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

export default Index;
