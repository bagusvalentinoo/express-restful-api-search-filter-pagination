import { changeLanguage } from 'i18next'

/**
 * Parse Accept-Language header to get primary language
 *
 * @param {string} header - Accept-Language header value
 *
 * @returns {string | null} Primary language code or null if none found
 */
const parseLanguageHeader = header => {
  // Check if header is not a string or is empty
  if (!header || typeof header !== 'string' || header.trim() === '') return null

  // Split the header by commas and map over the languages
  const languages = header
    .split(',')
    .map(lang => {
      const [code] = lang.split(';')
      return code.trim().toLowerCase()
    })
    .filter(Boolean)

  // Return the first language if there are any, otherwise return null
  return languages.length > 0 ? languages[0] : null
}

/**
 * Middleware to handle request localization
 *
 * @param {import('express').Request} req - Express request object
 * @param {import('express').Response} _res - Express response object
 * @param {import('express').NextFunction} next - Express next function
 *
 * @example
 * ```javascript
 * app.use(localizationMiddleware)
 * ```
 */
export const localizationMiddleware = (req, _res, next) => {
  // Ensure headerLang is explicitly checked for null or undefined
  const headerLang = req.headers['accept-language']
  const languageFromHeader =
    typeof headerLang === 'string' && headerLang.trim() !== ''
      ? parseLanguageHeader(headerLang.trim())
      : null

  // Ensure queryLang is explicitly checked for null or undefined
  const queryLang = req.query.lang
  const languageFromQuery =
    typeof queryLang === 'string' && queryLang.trim() !== ''
      ? queryLang.trim().toLowerCase()
      : null

  // Use nullish coalescing operator (??) for safer fallback handling
  const language = languageFromHeader ?? languageFromQuery ?? 'en'

  changeLanguage(language)
    .then(() => next())
    .catch(error => next(error))
}
