import { t } from '../../lib/i18n/i18n.js'
import { responseSuccess } from '../../utils/response.util.js'

/**
 * Handles a GET request to welcome API /
 *
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 * @param {import('express').NextFunction} next - The Express next function.
 *
 * @returns {import('express').Response}
 *
 * @example
 * ```javascript
 * app.get('/', ApiControllers.index)
 * ```
 */
const index = async (_req, res, next) => {
  try {
    // Return success response with dynamic message
    return responseSuccess(res, {
      statusCode: 200,
      message: t('welcome_success', { ns: 'common' }),
      data: null
    })
  } catch (error) {
    // Forward error to next middleware or error middleware
    next(error)
  }
}

// Export default ApiController
export default {
  index
}
