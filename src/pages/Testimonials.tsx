import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldCheck } from "lucide-react";

const Testimonials = () => {
  const caseStudies = [
    {
      title: "Major Donut Chain",
      location: "350+ Locations Nationwide",
      challenge: "High oil costs across hundreds of locations and inconsistent donut quality between stores.",
      solution: "Implemented Oil-Max filtration system across all locations with standardized training.",
      results: [
        "Reduced oil expenditure by 62% company-wide",
        "More consistent product quality across all locations",
        "Estimated annual savings of $1.2M",
        "Improved customer satisfaction scores"
      ],
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop"
    },
    {
      title: "Burger King®",
      location: "Field-Tested Locations",
      challenge: "Seeking ways to optimize operational costs while maintaining strict quality standards.",
      solution: "Field-tested Oil-Max in selected high-volume locations with careful quality monitoring.",
      results: [
        "Extended oil life by over 200%",
        "Maintained or improved food taste and quality",
        "Simplified staff training for oil management",
        "Reduced environmental impact of oil disposal"
      ],
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&h=400&fit=crop"
    }
  ];

  return (
    <>
      <HeroSection
        title="Customer Success Stories"
        subtitle="Join over 2,500 satisfied customers that rely on Oil-Max for better oil filtration."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Trusted By Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Trusted By Proof. Built on Legacy.</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Backed by decades of proven results and trusted by industry leaders nationwide.
            </p>
          </div>

          {/* Usage Statistics */}
          <div className="bg-gradient-to-r from-primary to-oilmax-dark text-white rounded-lg p-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <ShieldCheck className="w-12 h-12 mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold">Used in Over 2,500 Locations Since the 1960s</h3>
              </div>
              <p className="text-lg opacity-90">
                From independent family-owned restaurants to nationally recognized franchises, Oil-Max has been trusted for decades to deliver consistent results in high-volume kitchens.
              </p>
            </div>
          </div>

          {/* Field Testing Results */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Field-Tested by National Chains</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      Burger King® Partner Evaluation
                    </span>
                    <p className="text-sm text-gray-600">2012</p>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The Sparklaid filter aid product met or exceeded the requirements set forth by Burger King Corporation. The powder was tested under live operational conditions and helped improve oil clarity, taste, and extended the usable life of oil in our fryers."
                  </p>
                  <p className="text-sm text-gray-600">— Field Testing Summary</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      National Donut Brand
                    </span>
                    <p className="text-sm text-gray-600">350+ Locations</p>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "We currently use the Oil-Max and Sparklaid systems in every one of our 350+ stores nationwide. Before using the Oil-Max system, we were changing out the oil once per week — now we change it once per month. The savings for us is literally millions of dollars per year."
                  </p>
                  <p className="text-sm text-gray-600">— Franchise Audit</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Real-World Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Real-World Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "After exploring several different options in the creation of FGFT, I have to say without any doubt that I'll put the Oil-Max filtration systems, and envelopes against any system on the market today"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Nathan Moore</p>
                      <p className="text-gray-600 text-sm">Fried Green Fryer Team</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "The difference in our fryer oil was clear. Oil-Max helped us cut our oil changes in half without sacrificing taste. It's become part of our routine."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Operations Manager</p>
                      <p className="text-gray-600 text-sm">National Donut Chain</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 italic mb-4">
                    "Our team uses Oil-Max daily — the instructions are simple, the benefits are obvious, and the results speak for themselves."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Independent Taquería Owner</p>
                      <p className="text-gray-600 text-sm">Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Government Recognition */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Recognized by U.S. Government Agencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">FDA</span>
                  </div>
                  <h4 className="font-semibold mb-2">FDA Certificate of Free Sale</h4>
                  <p className="text-gray-600 text-sm">Verified safe for commercial food operations</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">USDA</span>
                  </div>
                  <h4 className="font-semibold mb-2">USDA-Documented Since the 1960s</h4>
                  <p className="text-gray-600 text-sm">Approved for use in government-supervised facilities</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">GRAS</span>
                  </div>
                  <h4 className="font-semibold mb-2">GRAS Status Certified</h4>
                  <p className="text-gray-600 text-sm">Generally Recognized As Safe under FDA standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Case Studies"
            subtitle="See how major brands have implemented Oil-Max with impressive results."
          />
          
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 last:mb-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-oilmax-light text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      Case Study
                    </span>
                    <h3 className="text-2xl font-bold">{study.title}</h3>
                    <p className="text-gray-600">{study.location}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-primary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sparkler Filters Legacy with Historical Image */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="bg-oilmax-light rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Supported by Sparkler Filters</h3>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Oil-Max is proudly backed by Sparkler Filters — the original inventor of the cooking oil filter and horizontal plate filter system. With nearly 100 years of innovation in industrial liquid filtration and thousands of systems installed globally, Sparkler brings a legacy of dependable engineering right to your kitchen.
              </p>
            </div>
            
            {/* Historical Image */}
            <div className="flex justify-center">
              <div className="max-w-2xl">
                <img 
                  src="/lovable-uploads/4cbd9ec6-2257-41d0-91e9-75b863db496f.png" 
                  alt="Sparkler Filters manufacturing facility since 1965" 
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-center text-gray-600 text-sm mt-4 italic">
                  Sparkler Filters manufacturing facility - Innovating since 1965
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Trusted By Industry Leaders"
            subtitle="Join over 2,500 satisfied customers that rely on Oil-Max for better oil filtration."
          />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <img 
                  src="/lovable-uploads/45c2d7e2-7ff9-4315-adb3-e1268bec0e10.png" 
                  alt="Burger King" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            {["Major Donut Chain", "Sparkler Filters", "Restaurant Chain"].map((company, index) => (
              <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                  <p className="text-lg font-semibold text-gray-700">{company}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">FDA Recognized</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">USDA Approved</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">Made in USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Customers</h2>
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

export default Testimonials;
