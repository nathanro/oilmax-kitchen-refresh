
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
              Home
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium">
              How It Works
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium">
              Benefits
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary font-medium">
              Products
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-primary font-medium">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact
            </Link>
            <Button className="bg-cta hover:bg-cta-hover text-white">
              Get a Free Sample
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
            Home
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            How It Works
          </Link>
          <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            Benefits
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            Testimonials
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Button className="bg-cta hover:bg-cta-hover text-white w-full" onClick={() => setIsOpen(false)}>
            Get a Free Sample
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
