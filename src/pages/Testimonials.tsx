
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonialCategories = [
    {
      name: "Restaurants",
      testimonials: [
        {
          quote: "Since implementing Oil-Max, our monthly oil expenses have decreased by over 60%. The product pays for itself many times over throughout the year.",
          name: "Michael Johnson",
          title: "Owner, Five Star Burger",
          location: "Chicago, IL",
          image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "Our customers have noticed the difference in our fried foods. They're crispier, tastier, and have a cleaner flavor. Oil-Max has become an essential part of our kitchen operations.",
          name: "Sarah Williams",
          title: "Head Chef, Oceanside Grill",
          location: "Miami, FL",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "We've been using Oil-Max for over 5 years now. It's incredibly simple to use and has saved us thousands of dollars in oil costs. I recommend it to every restaurant owner I know.",
          name: "David Chen",
          title: "Owner, Golden Palace",
          location: "San Francisco, CA",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
        }
      ]
    },
    {
      name: "Food Trucks",
      testimonials: [
        {
          quote: "With limited space and resources in our food truck, Oil-Max has been a game-changer. We change our oil far less frequently while maintaining excellent food quality.",
          name: "Miguel Hernandez",
          title: "Owner, Street Eats Food Truck",
          location: "Austin, TX",
          image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "As a mobile business with tight margins, Oil-Max helps us maximize our profitability while keeping our signature fried items tasting fantastic.",
          name: "Emma Peterson",
          title: "Co-owner, Crispy Wheels",
          location: "Portland, OR",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "The simple 4-step process is perfect for our fast-paced environment. We filter at the end of each day, and our oil lasts weeks instead of days.",
          name: "James Wilson",
          title: "Owner, Fry Guy Mobile",
          location: "Denver, CO",
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop&crop=faces"
        }
      ]
    },
    {
      name: "Franchises",
      testimonials: [
        {
          quote: "After testing Oil-Max in three of our locations, we've now implemented it across all 27 restaurants. The cost savings and consistency in food quality have been remarkable.",
          name: "Robert Anderson",
          title: "Regional Manager, Burger Town",
          location: "Multiple Locations",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "Oil-Max has helped us standardize our oil management practices across all franchise locations. It's simple enough that all staff can follow the process correctly.",
          name: "Jennifer Martinez",
          title: "Operations Director, Chicken Shack Franchises",
          location: "Southeast Region",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=faces"
        },
        {
          quote: "The bulk ordering option makes it easy to supply all our locations. Our franchise owners are thrilled with the cost savings and improved food quality.",
          name: "Thomas Wright",
          title: "Supply Chain Manager, Fry House Franchise Group",
          location: "Nationwide",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces"
        }
      ]
    }
  ];

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
        subtitle="Hear from real businesses that have transformed their operations with Oil-Max."
        backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&h=700&auto=format&fit=crop"
      />

      {/* Featured Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Trusted by over 2,500 kitchens across the country."
          />
          
          <Tabs defaultValue="Restaurants">
            <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto mb-10">
              {testimonialCategories.map((category) => (
                <TabsTrigger key={category.name} value={category.name}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {testimonialCategories.map((category) => (
              <TabsContent key={category.name} value={category.name}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.testimonials.map((testimonial, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-lg transition duration-300">
                      <CardContent className="p-8">
                        <svg className="w-10 h-10 text-primary opacity-30 mb-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                        </svg>
                        <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <Avatar className="w-12 h-12 mr-4">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-gray-800">{testimonial.name}</p>
                            <p className="text-gray-600 text-sm">{testimonial.title}</p>
                            <p className="text-gray-500 text-sm">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
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

      {/* Video Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <SectionHeading
            title="Video Testimonials"
            subtitle="Watch how Oil-Max has transformed these businesses."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black aspect-video rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-white text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-lg">Chef Antonio's Testimonial</p>
                <p className="text-sm text-gray-300">Executive Chef, Italian Bistro</p>
              </div>
            </div>
            <div className="bg-black aspect-video rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-white text-center p-8">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-lg">The Game Day Bar & Grill</p>
                <p className="text-sm text-gray-300">Owner Success Story</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Logos */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeading
            title="Trusted By Industry Leaders"
            subtitle="Join over 2,500 kitchens that rely on Oil-Max for better oil filtration."
          />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Burger King", "Major Donut Chain", "Sparkler Filters", "Restaurant Chain"].map((company, index) => (
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
