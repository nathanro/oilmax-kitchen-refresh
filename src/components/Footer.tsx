
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
          {/* Company Info */}
          <div className="space-y-4">
            <div className={`flex items-center ${isMobile ? 'flex-col space-y-2' : 'space-x-3'}`}>
              <LazyImage 
                src="/lovable-uploads/d28e5e5c-c9f2-428f-a6ed-beed274d2ecb.png" 
                alt="Oil-Max Logo" 
                className={`${isMobile ? 'h-16 w-40' : 'h-12 w-32'} rounded-md bg-white p-2`}
                loading="lazy"
                decoding="async"
              />
              <span className={`font-bold text-white ${isMobile ? 'text-center text-sm leading-tight' : 'text-lg whitespace-nowrap'}`}>
                Cooking Oil Filtration
              </span>
            </div>
            <p className="text-gray-400 max-w-xs text-center md:text-left">
              Better Oil. Better Food. Bigger Margins. Extending fryer oil life since the 1960s.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.map(item => <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>101 North Loop 336 East<br />Conroe, Texas, USA 77301</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(936) 756-4471</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@oil-max.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400">{t.footer.copyright}</p>
            <p className="text-gray-400 text-sm mt-2 text-center md:text-left">Part of the Sparkler Filters Family | Built in the USA | Real Support, Real People</p>
            <p className="text-gray-500 text-xs mt-2">
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
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center">
            <div className="flex space-x-6 mb-4 md:mb-0 md:mr-8">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
