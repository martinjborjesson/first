import { languages } from "@/languages";
import { Language } from "@/types/types";
import { getLocales } from "expo-localization";
import { createContext, useEffect, useState } from "react";

type LanguageContextType = {
  currentLanguage: (typeof languages)[Language];
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: languages["sv-SE"],
  setLanguage: () => { }
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentKey, setCurrentKey] = useState<Language>("sv-SE");

  useEffect(() => {
    const initialLanguage = getLocales()[0].languageTag as Language;
    if (initialLanguage && languages[initialLanguage]) {
      setCurrentKey(initialLanguage);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentKey(language);
  }

  const value: LanguageContextType = {
    currentLanguage: languages[currentKey],
    setLanguage
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}