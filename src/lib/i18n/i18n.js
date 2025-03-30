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
  fallbackLng: DEFAULT_LANGUAGE,
  preload: SUPPORTED_LANGUAGES,
  ns: NAMESPACES,
  lng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: true
  },
  backend: {
    loadPath: `${LANGUAGES_DIR}/{{lng}}/{{ns}}.json`
  }
})

// Export the t function
export const { t } = i18next

// Export the i18next instance
export default i18next
