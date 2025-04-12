import i18next from 'i18next'
import Backend from 'i18next-fs-backend'

import {
  DEFAULT_LANGUAGE,
  LANGUAGES_DIR,
  NAMESPACES,
  SUPPORTED_LANGUAGES
} from '../../constants/i18n.constant.js'

// Initialize i18next
i18next.use(Backend).init({
  fallbackLng: DEFAULT_LANGUAGE, // Default language
  preload: SUPPORTED_LANGUAGES, // Supported languages
  ns: NAMESPACES, // Namespaces
  lng: DEFAULT_LANGUAGE, // Default language
  supportedLngs: SUPPORTED_LANGUAGES, // Supported languages
  interpolation: {
    escapeValue: true
  },
  backend: {
    loadPath: `${LANGUAGES_DIR}/{{lng}}/{{ns}}.json` // Load language files
  }
})

// Export the t function
export const { t } = i18next

// Export the i18next instance
export default i18next
