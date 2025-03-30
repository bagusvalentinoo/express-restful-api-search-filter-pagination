import { getNamespaces } from '../utils/i18n.util.js'

/**
 * Base path for language files
 */
export const LANGUAGES_DIR = './src/locales'

/**
 * Supported language codes as read-only array
 */
export const SUPPORTED_LANGUAGES = ['en', 'id']

/**
 * Default language code used as fallback
 */
export const DEFAULT_LANGUAGE = 'en'

/**
 * The namespaces
 * List of json files in the locales directory for each supported language those will be used as resource translations
 */
export const NAMESPACES = getNamespaces(SUPPORTED_LANGUAGES, LANGUAGES_DIR)
