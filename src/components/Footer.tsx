
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/d28e5e5c-c9f2-428f-a6ed-beed274d2ecb.png"
                alt="Oil-Max Logo"
                className="h-16"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              {language === 'en' 
                ? 'Oil-Max is an organic fryer oil filtration system designed to extend oil life and improve food quality in commercial kitchens.' 
                : 'Oil-Max es un sistema orgánico de filtración de aceite de freidora diseñado para prolongar la vida útil del aceite y mejorar la calidad de los alimentos en cocinas comerciales.'}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-gray-300 hover:text-white">
                  {t.nav.benefits}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  {t.nav.products}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{language === 'en' ? 'Contact Us' : 'Contáctenos'}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                  {language === 'en' 
                    ? '1234 Industry Way, Commerce, CA 90001' 
                    : '1234 Industry Way, Commerce, CA 90001'}
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">(800) 555-OILMAX</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">info@oil-max.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t.footer.copyright}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white">
              {t.footer.links.privacy}
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white">
              {t.footer.links.terms}
            </Link>
            <Link to="/contact" className="text-gray-400 text-sm hover:text-white">
              {t.footer.links.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
