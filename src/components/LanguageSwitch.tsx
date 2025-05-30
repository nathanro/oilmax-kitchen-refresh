
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 flex-shrink-0">
      <Languages className="h-3 w-3 md:h-4 md:w-4 text-gray-500 mr-1" />
      <div className="flex rounded-md overflow-hidden border border-input">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`text-xs h-6 md:h-7 px-1.5 md:px-2 rounded-none ${
            language === "en" 
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          EN
        </Button>
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className={`text-xs h-6 md:h-7 px-1.5 md:px-2 rounded-none ${
            language === "es" 
              ? "bg-primary text-primary-foreground" 
              : "hover:bg-accent hover:text-accent-foreground"
          }`}
        >
          ES
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitch;
