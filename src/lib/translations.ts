
import { Language } from "@/context/LanguageContext";

export const translations: Record<Language, {
  // Common navigation
  nav: {
    home: string;
    howItWorks: string;
    benefits: string;
    products: string;
    testimonials: string;
    contact: string;
    getSample: string;
  };
  // Hero section
  hero: {
    title: string;
    subtitle: string;
  };
  // Benefits section
  benefits: {
    title: string;
    subtitle: string;
    cards: {
      longerOil: {
        title: string;
        description: string;
      };
      betterTaste: {
        title: string;
        description: string;
      };
      organic: {
        title: string;
        description: string;
      };
      easyUse: {
        title: string;
        description: string;
      };
    };
  };
  // How it works section
  howItWorks: {
    title: string;
    subtitle: string;
    learnMoreLink: string;
    steps: {
      sprinkle: {
        name: string;
        description: string;
      };
      bind: {
        name: string;
        description: string;
      };
      filter: {
        name: string;
        description: string;
      };
      fry: {
        name: string;
        description: string;
      };
    };
  };
  // Testimonials section
  testimonials: {
    title: string;
    subtitle: string;
    readMoreLink: string;
    featuredQuote: string;
    featuredName: string;
    featuredPosition: string;
  };
  // Trusted by section
  trustedBy: {
    title: string;
    subtitle: string;
    certifications: {
      fda: string;
      usda: string;
      usa: string;
    };
  };
  // CTA section
  cta: {
    title: string;
    subtitle: string;
    sampleButton: string;
    quoteButton: string;
  };
  // Footer
  footer: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
}> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      benefits: "Benefits",
      products: "Products",
      testimonials: "Testimonials",
      contact: "Contact",
      getSample: "Get a Free Sample"
    },
    hero: {
      title: "Better Oil. Better Food. Bigger Margins.",
      subtitle: "Trusted in over 2,500 kitchens since the 1960s."
    },
    benefits: {
      title: "Why Choose Oil-Max?",
      subtitle: "Our organic oil filtration system extends the life of your fryer oil while improving food quality and taste.",
      cards: {
        longerOil: {
          title: "4x Longer Oil Life",
          description: "Save thousands by extending your oil's lifespan up to 4x longer than normal."
        },
        betterTaste: {
          title: "Better Tasting Food",
          description: "Clean oil means improved food quality, better taste, and higher customer satisfaction."
        },
        organic: {
          title: "100% Organic",
          description: "FDA & USDA recognized organic filtration powder compatible with all commercial fryers."
        },
        easyUse: {
          title: "Easy To Use",
          description: "No special equipment or training needed. Simple 4-step process that anyone can follow."
        }
      }
    },
    howItWorks: {
      title: "Simple 4-Step Process",
      subtitle: "Oil-Max is incredibly easy to use with any commercial fryer system.",
      learnMoreLink: "Learn more about how Oil-Max works",
      steps: {
        sprinkle: {
          name: "Sprinkle",
          description: "Apply Oil-Max powder to hot oil."
        },
        bind: {
          name: "Bind",
          description: "Oil-Max binds to impurities in the oil."
        },
        filter: {
          name: "Filter",
          description: "Filter oil through any filtration system."
        },
        fry: {
          name: "Fry",
          description: "Enjoy cleaner oil and better-tasting food."
        }
      }
    },
    testimonials: {
      title: "What Our Customers Say",
      subtitle: "Hear from restaurant owners and kitchen staff who use Oil-Max every day.",
      readMoreLink: "Read more testimonials",
      featuredQuote: "Since switching to Oil-Max, we've reduced our oil costs by over 40% and our customers have noticed the improvement in food quality. It's simple to use and the results speak for themselves.",
      featuredName: "Michael Johnson",
      featuredPosition: "Owner, Five Star Burger"
    },
    trustedBy: {
      title: "Trusted By Industry Leaders",
      subtitle: "Join over 2,500 kitchens that rely on Oil-Max for better oil filtration.",
      certifications: {
        fda: "FDA Recognized",
        usda: "USDA Approved",
        usa: "Made in USA"
      }
    },
    cta: {
      title: "Ready to Extend Your Oil Life?",
      subtitle: "Join thousands of satisfied customers who are saving money and improving their food quality with Oil-Max.",
      sampleButton: "Get a Free Sample",
      quoteButton: "Request a Quote"
    },
    footer: {
      copyright: "© 2025 Oil-Max. All rights reserved.",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      howItWorks: "Cómo Funciona",
      benefits: "Beneficios",
      products: "Productos",
      testimonials: "Testimonios",
      contact: "Contacto",
      getSample: "Obtener Muestra Gratis"
    },
    hero: {
      title: "Mejor Aceite. Mejor Comida. Mayores Márgenes.",
      subtitle: "De confianza en más de 2,500 cocinas desde los años 60."
    },
    benefits: {
      title: "¿Por Qué Elegir Oil-Max?",
      subtitle: "Nuestro sistema orgánico de filtración de aceite prolonga la vida útil del aceite de su freidora y mejora la calidad y el sabor de los alimentos.",
      cards: {
        longerOil: {
          title: "Aceite Dura 4 Veces Más",
          description: "Ahorre miles extendiendo la vida útil de su aceite hasta 4 veces más que lo normal."
        },
        betterTaste: {
          title: "Comida Con Mejor Sabor",
          description: "El aceite limpio significa mejor calidad de comida, mejor sabor y mayor satisfacción del cliente."
        },
        organic: {
          title: "100% Orgánico",
          description: "Polvo de filtración orgánico reconocido por FDA y USDA, compatible con todas las freidoras comerciales."
        },
        easyUse: {
          title: "Fácil de Usar",
          description: "No se necesita equipo especial ni capacitación. Proceso simple de 4 pasos que cualquiera puede seguir."
        }
      }
    },
    howItWorks: {
      title: "Proceso Simple de 4 Pasos",
      subtitle: "Oil-Max es increíblemente fácil de usar con cualquier sistema de freidora comercial.",
      learnMoreLink: "Aprenda más sobre cómo funciona Oil-Max",
      steps: {
        sprinkle: {
          name: "Espolvorear",
          description: "Aplique el polvo Oil-Max al aceite caliente."
        },
        bind: {
          name: "Adherir",
          description: "Oil-Max se adhiere a las impurezas del aceite."
        },
        filter: {
          name: "Filtrar",
          description: "Filtre el aceite a través de cualquier sistema de filtración."
        },
        fry: {
          name: "Freír",
          description: "Disfrute de aceite más limpio y comida con mejor sabor."
        }
      }
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Escuche a los dueños de restaurantes y al personal de cocina que usan Oil-Max todos los días.",
      readMoreLink: "Leer más testimonios",
      featuredQuote: "Desde que cambiamos a Oil-Max, hemos reducido nuestros costos de aceite en más del 40% y nuestros clientes han notado la mejora en la calidad de los alimentos. Es simple de usar y los resultados hablan por sí mismos.",
      featuredName: "Michael Johnson",
      featuredPosition: "Propietario, Five Star Burger"
    },
    trustedBy: {
      title: "Confiado Por Líderes de la Industria",
      subtitle: "Únase a más de 2,500 cocinas que confían en Oil-Max para una mejor filtración de aceite.",
      certifications: {
        fda: "Reconocido por FDA",
        usda: "Aprobado por USDA",
        usa: "Fabricado en EE.UU."
      }
    },
    cta: {
      title: "¿Listo para Extender la Vida de su Aceite?",
      subtitle: "Únase a miles de clientes satisfechos que están ahorrando dinero y mejorando la calidad de sus alimentos con Oil-Max.",
      sampleButton: "Obtener Muestra Gratis",
      quoteButton: "Solicitar Cotización"
    },
    footer: {
      copyright: "© 2025 Oil-Max. Todos los derechos reservados.",
      links: {
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contáctenos"
      }
    }
  }
};
