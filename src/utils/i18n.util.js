import { existsSync, readdirSync } from 'fs'

/**
 * Retrieves the namespaces from the locales directory.
 *
 * @param {string[]} supportedLanguages - The supported languages
 *
 * @returns {string[]} An array of unique, sorted namespace names.
 */
export const getNamespaces = (
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
 * Parses the language header to get the primary language.
 *
 * @param {string} header - The language header string.
 *
 * @returns {string | null} The primary language code or null if no language is found.
 */
export const parseLanguageHeader = header => {
  // Check if header is not a string or is empty
  if (!header || typeof header !== 'string' || header.trim() === '') return null

  // Split the header by commas and map over the languages
  const languages = header
    .split(',')
    .map(lang => {
      const [code] = lang.split(';')
      return code?.trim().toLowerCase()
    })
    .filter(Boolean)

  // Return the first language if there are any, otherwise return null
  return languages.length > 0 ? languages[0] : null
}
