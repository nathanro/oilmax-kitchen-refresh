
import { lazy, Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";

const LazyImage = lazy(() => import("@/components/LazyImage"));

const TrustedBySection = () => {
  const brands = [
    {
      src: "/lovable-uploads/b0da71e3-4baf-41ca-a3a9-0052a6571d25.png",
      alt: "Burger King",
      name: "Burger King"
    },
    {
      src: "/lovable-uploads/5e4184f2-d496-469f-8726-f21f96714dbe.png",
      alt: "Major Donut Chain",
      name: "Major Donut Chain"
    },
    {
      src: "/lovable-uploads/cfdd392f-f156-4534-90f4-e945e4664245.png",
      alt: "Sparkler Filters",
      name: "Sparkler Filters"
    },
    {
      src: "/lovable-uploads/d062a8f0-d468-470a-ab44-9135e4487f2f.png",
      alt: "Restaurant Chain",
      name: "Restaurant Chain"
    }
  ];

  const certifications = [
    {
      src: "/lovable-uploads/8b3f12a8-04f2-4e91-9394-0bcab197b832.png",
      alt: "FDA Recognized",
      title: "FDA Recognized",
      subtitle: "Since 1960s"
    },
    {
      src: "/lovable-uploads/6d64327d-2bb2-4afd-b9e3-2e4e6db37742.png",
      alt: "USDA Approved",
      title: "USDA Approved",
      subtitle: "Since 1960s"
    },
    {
      src: "/lovable-uploads/94dda56b-e179-48ca-971a-b2cfcf05563d.png",
      alt: "Made in USA",
      title: "Made in USA",
      subtitle: "Since 1960s"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <SectionHeading
          title="Trusted By Industry Leaders"
          subtitle="Join over 2,500 satisfied customers that rely on Oil-Max for better oil filtration."
        />
        
        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 min-h-[160px]">
              <div className="flex-1 flex items-center justify-center w-full mb-4">
                <Suspense fallback={<div className="h-24 w-40 bg-gray-200 rounded animate-pulse" />}>
                  <LazyImage 
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-24 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition duration-300"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 160px, 200px"
                  />
                </Suspense>
              </div>
              <span className="text-sm text-gray-700 font-medium text-center">{brand.name}</span>
            </div>
          ))}
        </div>
        
        {/* Certifications */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center bg-white px-8 py-4 rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition duration-300">
              <Suspense fallback={<div className="h-16 w-16 bg-gray-200 rounded animate-pulse mr-4" />}>
                <LazyImage 
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 w-16 object-contain mr-4 flex-shrink-0"
                  loading="lazy"
                  decoding="async"
                  sizes="64px"
                />
              </Suspense>
              <div className="text-left">
                <span className="text-blue-700 font-bold text-lg block">{cert.title}</span>
                <p className="text-blue-600 text-sm">{cert.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
