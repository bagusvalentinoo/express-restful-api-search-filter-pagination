import { existsSync, readdirSync } from 'fs'

/**
 * Get all namespace names from locales directory
 *
 * @param {string[]} supportedLanguages - The supported languages
 *
 * @returns {string[]} All namespace names
 */
const getNamespaces = (
  supportedLanguages,
  baseLanguagePath = './src/locales'
) => {
  // Map over supported languages and collect namespaces
  const allNamespaces = supportedLanguages.flatMap(language => {
    const languagePath = `${baseLanguagePath}/${language}`

    // Check if the language directory exists
    if (!existsSync(languagePath)) return []

    const files = readdirSync(languagePath)
      .filter(file => file.endsWith('.json')) // Filter only JSON files
      .map(file => file.replace(/\.json$/, '')) // Remove the `.json` extension

    // Read all JSON files in the directory
    return files
  })

  // Deduplicate and sort the namespaces
  return Array.from(new Set(allNamespaces)).sort()
}

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
