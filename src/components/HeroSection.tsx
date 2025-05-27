
import CTAButton from "./CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
};

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
}: HeroSectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div
      className="relative bg-cover bg-center pt-32 pb-20 min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/lovable-uploads/8418117e-c143-4222-b8df-ffa3f849465f.png)`,
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8">{subtitle}</p>
          <div className="flex justify-center">
            <CTAButton
              text="Request a Quote"
              link="/contact"
              variant="quote"
              className="text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
