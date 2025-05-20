
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d28e5e5c-c9f2-428f-a6ed-beed274d2ecb.png" 
              alt="Oil-Max Logo" 
              className="h-12" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.home}
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.howItWorks}
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.benefits}
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.products}
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.testimonials}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              {t.nav.contact}
            </Link>
            <LanguageSwitch />
            <Button className="bg-cta hover:bg-cta-hover text-white">
              {t.nav.getSample}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="flex flex-col space-y-3 px-4 py-5">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.home}
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.howItWorks}
          </Link>
          <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.benefits}
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.products}
          </Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.testimonials}
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </Link>
          <Button className="bg-cta hover:bg-cta-hover text-white w-full" onClick={() => setIsOpen(false)}>
            {t.nav.getSample}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
