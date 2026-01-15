import { createContext } from "react";
import { translation } from "../../constants/translations";

type Language = "es" | "en";

export interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof translation.es;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
