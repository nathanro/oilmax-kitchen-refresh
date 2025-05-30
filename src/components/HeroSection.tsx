
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroSection = ({ title, subtitle, backgroundImage, children }: HeroSectionProps) => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-r from-primary to-oilmax-dark text-white">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: `url(${backgroundImage})` }} 
        />
      )}
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
