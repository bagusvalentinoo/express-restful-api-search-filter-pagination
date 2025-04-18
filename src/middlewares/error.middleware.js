import { ZodError } from 'zod'

import { t } from '../lib/i18n/i18n.js'
import { FormattedResponseError } from '../utils/formatted-response-error.util.js'
import { logError } from '../utils/logger.util.js'
import { responseError } from '../utils/response.util.js'
import { customFormatZodError } from '../utils/validation.util.js'

/**
 * Handles errors and sends a formatted error response.
 *
 * @param {Error} error - The error object.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} _next - The next middleware function.
 *
 * @returns {import('express').Response}
 */
export const errorMiddleware = (error, req, res, _next) => {
  let statusCode = 500 // Default status code
  let message = t('http.default', { ns: 'errors' }) // Default error message with dynamic message language
  let errors = null // Default errors

  if (error instanceof FormattedResponseError) {
    ;({ statusCode, message } = error) // Set the status code and message
  }

  // Check if the error is an instance of ZodError
  if (error instanceof ZodError) {
    statusCode = 422 // Set the status code
    message = t('http.422', { ns: 'errors' }) // Set the message for ZodError validation error with dynamic message language
    errors = customFormatZodError(error.issues) // Set the errors for ZodError validation error
  }

  // Log the all error except ZodError validation error
  if (!(error instanceof ZodError))
    logError(error, {
      method: req.method,
      url: req.originalUrl
    })

  // Send error response
  return responseError(res, {
    statusCode,
    message,
    errors
  })
}
