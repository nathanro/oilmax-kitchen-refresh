
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import { useMobile } from "@/hooks/use-mobile";
import LanguageSwitch from "./LanguageSwitch";
import LazyImage from "./LazyImage";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const isMobile = useMobile();
  
  const navigation = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.howItWorks, href: "/how-it-works" },
    { name: t.nav.benefits, href: "/benefits" },
    { name: t.nav.products, href: "/products" },
    { name: t.nav.testimonials, href: "/testimonials" },
    { name: t.nav.contact, href: "/contact" }
  ];
  
  const legal = [
    { name: t.footer.links.privacy, href: "#" },
    { name: t.footer.links.terms, href: "#" },
    { name: t.footer.links.contact, href: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info - Mejorado para mobile */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <LazyImage 
                src="/lovable-uploads/d28e5e5c-c9f2-428f-a6ed-beed274d2ecb.png" 
                alt="Oil-Max Logo" 
                className={`${isMobile ? 'h-12 w-32' : 'h-16 w-40'} rounded-md bg-white p-2 object-contain`}
                loading="lazy"
                decoding="async"
              />
              <span className={`font-bold text-white text-center md:text-left ${isMobile ? 'text-sm leading-tight' : 'text-base'}`}>
                Cooking Oil Filtration
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left max-w-xs mx-auto md:mx-0">
              Better Oil. Better Food. Bigger Margins. Extending fryer oil life since the 1960s.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Mejorado para mobile */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex flex-col md:flex-row md:items-start items-center">
                <svg className="w-5 h-5 mb-1 md:mb-0 md:mt-1 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-center md:text-left">101 North Loop 336 East<br />Conroe, Texas, USA 77301</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-center">
                <svg className="w-5 h-5 mb-1 md:mb-0 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(936) 756-4471</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-center">
                <svg className="w-5 h-5 mb-1 md:mb-0 md:mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@oil-max.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Mejorado para mobile */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-gray-400 text-sm text-center md:text-left">{t.footer.copyright}</p>
              <p className="text-gray-400 text-xs text-center md:text-left leading-relaxed">Part of the Sparkler Filters Family | Built in the USA | Real Support, Real People</p>
              <p className="text-gray-500 text-xs text-center md:text-left">
                powered by{" "}
                <a 
                  href="https://publiexpert.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-colors"
                >
                  PubliExpert LLC
                </a>
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-xs"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
