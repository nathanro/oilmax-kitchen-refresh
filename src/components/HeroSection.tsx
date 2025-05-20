
import CTAButton from "./CTAButton";

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
      </div>
    </div>
  );
};

export default HeroSection;
