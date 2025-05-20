
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  // Benefit cards data
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "4x Longer Oil Life",
      description: "Save thousands by extending your oil's lifespan up to 4x longer than normal."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      title: "Better Tasting Food",
      description: "Clean oil means improved food quality, better taste, and higher customer satisfaction."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "100% Organic",
      description: "FDA & USDA recognized organic filtration powder compatible with all commercial fryers."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Easy To Use",
      description: "No special equipment or training needed. Simple 4-step process that anyone can follow."
    }
  ];

  // Trusted by logos
  const trustedBy = [
    { name: "Burger King", logo: "https://via.placeholder.com/120x80?text=Burger+King" },
    { name: "Major Donut Chain", logo: "https://via.placeholder.com/120x80?text=Donut+Chain" },
    { name: "Sparkler Filters", logo: "https://via.placeholder.com/120x80?text=Sparkler" },
    { name: "Restaurant Chain", logo: "https://via.placeholder.com/120x80?text=Restaurant" },
  ];

  return (
    <>
      <HeroSection
        title="Better Oil. Better Food. Bigger Margins."
        subtitle="Trusted in over 2,500 kitchens since the 1960s."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Quick Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Why Choose Oil-Max?"
            subtitle="Our organic oil filtration system extends the life of your fryer oil while improving food quality and taste."
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
            title="Simple 4-Step Process"
            subtitle="Oil-Max is incredibly easy to use with any commercial fryer system."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Sprinkle', 'Bind', 'Filter', 'Fry'].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{step}</h3>
                <p className="text-gray-600">
                  {index === 0 && "Apply Oil-Max powder to hot oil."}
                  {index === 1 && "Oil-Max binds to impurities in the oil."}
                  {index === 2 && "Filter oil through any filtration system."}
                  {index === 3 && "Enjoy cleaner oil and better-tasting food."}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center">
              Learn more about how Oil-Max works
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
            title="What Our Customers Say"
            subtitle="Hear from restaurant owners and kitchen staff who use Oil-Max every day."
          />
          
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col items-center text-center">
              <svg className="w-12 h-12 text-primary opacity-50 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
              <p className="text-lg text-gray-700 mb-6">
                "Since switching to Oil-Max, we've reduced our oil costs by over 40% and our customers have noticed the improvement in food quality. It's simple to use and the results speak for themselves."
              </p>
              <div>
                <p className="font-semibold text-gray-800">Michael Johnson</p>
                <p className="text-gray-600">Owner, Five Star Burger</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/testimonials" className="text-primary hover:text-oilmax-dark font-medium inline-flex items-center">
              Read more testimonials
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
            title="Trusted By Industry Leaders"
            subtitle="Join over 2,500 kitchens that rely on Oil-Max for better oil filtration."
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
              <img src="https://via.placeholder.com/40x40?text=FDA" alt="FDA Recognized" className="mr-2" />
              <span className="text-gray-700 font-medium">FDA Recognized</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src="https://via.placeholder.com/40x40?text=USDA" alt="USDA Approved" className="mr-2" />
              <span className="text-gray-700 font-medium">USDA Approved</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
              <img src="https://via.placeholder.com/40x40?text=USA" alt="Made in USA" className="mr-2" />
              <span className="text-gray-700 font-medium">Made in USA</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-oilmax-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Extend Your Oil Life?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who are saving money and improving their food quality with Oil-Max.
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

export default Index;
