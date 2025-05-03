import { t } from '../lib/i18n/i18n.js'

/**
 * Get required error message
 *
 * @param {string} field - The field name
 *
 * @returns {string} The required error message in dynamic message language
 *
 * @example
 * ```javascript
 * z.string({ required_error: getRequiredErrorMessage('name') })
 * ```
 */
export const getRequiredErrorMessage = field =>
  t('required', { ns: 'validation', field })

/**
 * Get invalid type error message
 *
 * @param {string} field - The field name
 *
 * @returns {string} The invalid type error message in dynamic message language
 *
 * @example
 * ```javascript
 * z.string({ invalid_type_error: getInvalidTypeErrorMessage('name') })
 * ```
 */
export const getInvalidTypeErrorMessage = field =>
  t('invalid_type', { ns: 'validation', field })
