import { LanguageContext } from "@/providers/language-provider";
import { useContext } from "react";

export function useLanguage() {
  return useContext(LanguageContext).currentLanguage;
}

export function useSetLanguage() {
  return useContext(LanguageContext).setLanguage;
}