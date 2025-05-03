/**
 * Contain base common Zod schema to be used in other schemas,
 * to avoid code duplication and make code more readable
 */

import { z } from 'zod'

import {
  getInvalidTypeErrorMessage,
  getRequiredErrorMessage
} from './validation-messages.js'

/**
 * Validate a required string field
 *
 * @param {string} field - The field name
 *
 * @returns {import('zod').ZodString} The Zod string schema
 *
 * @example
 * ```javascript
 * const userSchema = z.object({ name: stringRequiredSchema('name') })
 * ```
 */
export const stringRequiredSchema = field =>
  z
    .string({
      required_error: getRequiredErrorMessage(field),
      invalid_type_error: getInvalidTypeErrorMessage(field)
    })
    .min(1, {
      message: getRequiredErrorMessage(field)
    })
