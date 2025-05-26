
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </div>
  );
};

export default HeroSection;
