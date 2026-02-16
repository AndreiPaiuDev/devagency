import { useLanguage } from '../contexts/LanguageContext'
import { translations as ro } from '../translations/ro'
import { translations as en } from '../translations/en'

const translations = {
  ro,
  en
}

export function useTranslation() {
  const { language } = useLanguage()
  
  return translations[language]
}
