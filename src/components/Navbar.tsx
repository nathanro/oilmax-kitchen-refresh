
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useMobile } from "@/hooks/use-mobile";
import LazyImage from "@/components/LazyImage";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const t = translations[language];

  const navItems = [
    { title: t.nav.home, path: "/" },
    { title: t.nav.howItWorks, path: "/how-it-works" },
    { title: t.nav.benefits, path: "/benefits" },
    { title: t.nav.products, path: "/products" },
    { title: t.nav.testimonials, path: "/testimonials" },
    { title: t.nav.contact, path: "/contact" }
  ];

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo - Responsive layout */}
          <Link to="/" className={`flex items-center ${isMobile ? 'flex-col justify-center' : 'space-x-3'}`}>
            <LazyImage 
              alt="Oil-Max Logo" 
              src="/lovable-uploads/39ee7bff-3ad3-47ae-878c-d889f0025143.png" 
              className={`${isMobile ? 'h-6 w-20 mb-1' : 'h-12 w-40'} rounded-md object-contain`}
              loading="eager"
              decoding="async"
            />
            <span className={`font-bold text-gray-900 ${isMobile ? 'text-xs text-center leading-tight whitespace-nowrap' : 'text-lg whitespace-nowrap'}`}>
              {isMobile ? 'Cooking Oil Filtration' : 'Cooking Oil Filtration'}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-gray-600"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            <Button asChild variant="default" size="sm" className="bg-cta hover:bg-cta-hover">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden space-x-2 items-center">
            <LanguageSwitch />
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && isMobile && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.path 
                    ? "text-primary bg-gray-50" 
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`} 
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <Button 
                asChild 
                variant="default" 
                size="sm" 
                className="w-full bg-cta hover:bg-cta-hover" 
                onClick={closeMenu}
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
