
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

  const handleQuoteClick = () => {
    if (pathname === '/contact') {
      // Si estamos en la página de contacto, hacer scroll al formulario
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Si no estamos en contact, el Link se encargará de navegar
    closeMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center justify-center space-y-1 flex-shrink-0 min-w-0">
            <LazyImage 
              alt="Oil-Max Logo" 
              src="/lovable-uploads/39ee7bff-3ad3-47ae-878c-d889f0025143.png" 
              className={`${isMobile ? 'h-8 w-16' : 'h-12 w-24'} rounded-md object-contain flex-shrink-0`}
              loading="eager"
              decoding="async"
            />
            <span className={`font-bold text-gray-900 ${isMobile ? 'text-xs leading-tight' : 'text-sm'} whitespace-nowrap text-center`}>
              Cooking Oil Filtration
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <LanguageSwitch />
            <Button 
              asChild={pathname !== '/contact'} 
              variant="default" 
              size="sm" 
              className="bg-cta hover:bg-cta-hover"
              onClick={pathname === '/contact' ? handleQuoteClick : undefined}
            >
              {pathname === '/contact' ? (
                <span>Request a Quote</span>
              ) : (
                <Link to="/contact">Request a Quote</Link>
              )}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
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
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === item.path 
                    ? "text-primary bg-gray-50" 
                    : "text-gray-600 hover:text-primary hover:bg-gray-50"
                }`} 
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
            <div className="mt-4 px-3 pb-2">
              <Button 
                asChild={pathname !== '/contact'}
                variant="default" 
                size="sm" 
                className="w-full bg-cta hover:bg-cta-hover"
                onClick={pathname === '/contact' ? handleQuoteClick : closeMenu}
              >
                {pathname === '/contact' ? (
                  <span>Request a Quote</span>
                ) : (
                  <Link to="/contact">Request a Quote</Link>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
