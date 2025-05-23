
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-xs h-8"
    >
      {language === "en" ? "ES" : "EN"}
    </Button>
  );
};

export default LanguageSwitch;
