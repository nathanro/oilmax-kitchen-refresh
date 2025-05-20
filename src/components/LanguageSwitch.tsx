
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-2 py-1 h-auto"
      >
        <span className="mr-1">🇺🇸</span> EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="px-2 py-1 h-auto"
      >
        <span className="mr-1">🇪🇸</span> ES
      </Button>
    </div>
  );
};

export default LanguageSwitch;
