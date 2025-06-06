import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import TrustedBySection from "@/components/TrustedBySection";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { Quote } from "lucide-react";

// Lazy load heavy components
const LazyImage = lazy(() => import("@/components/LazyImage"));

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

  return (
    <>
      {/* Hero Section with Enhanced Logo Display */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" 
          style={{
            backgroundImage: "url('/lovable-uploads/27e087fd-7df8-4336-8c0f-0e54e1224105.png')"
          }} 
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          {/* Large Logo Display - Critical image with next-gen support */}
          <div className="mb-8">
            <Suspense fallback={<div className="h-52 w-72 mx-auto bg-white/20 rounded-lg animate-pulse" />}>
              <LazyImage 
                src="/lovable-uploads/d28e5e5c-c9f2-428f-a6ed-beed274d2ecb.png" 
                alt="Oil-Max Logo" 
                className="h-52 w-72 mx-auto rounded-lg bg-white/90 p-4 shadow-2xl" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 240px, 288px"
              />
            </Suspense>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center">
            <CTAButton text="Request a Quote" link="/contact" variant="quote" className="text-lg px-8 py-4" />
          </div>
        </div>
      </section>

      {/* Quick Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading title={t.benefits.title} subtitle={t.benefits.subtitle} />
          
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
            title="How Sparklaid Works" 
            subtitle="Our organic filtration powder integrates seamlessly with your existing fryer system." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: t.howItWorks.steps.sprinkle.name,
                desc: t.howItWorks.steps.sprinkle.description
              },
              {
                step: t.howItWorks.steps.bind.name,
                desc: t.howItWorks.steps.bind.description
              },
              {
                step: t.howItWorks.steps.filter.name,
                desc: t.howItWorks.steps.filter.description
              },
              {
                step: t.howItWorks.steps.fry.name,
                desc: t.howItWorks.steps.fry.description
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{item.step}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/how-it-works" 
              className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center"
            >
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
          <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-primary opacity-50 mb-4" />
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
            <Link 
              to="/testimonials" 
              className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center"
            >
              {t.testimonials.readMoreLink}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Industry Leaders Section */}
      <TrustedBySection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            {t.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <CTAButton text="Request a Quote" link="/contact" variant="quote" className="text-lg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
