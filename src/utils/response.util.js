/**
 * Utility function to send a successful HTTP response to clients
 *
 * @param {import('express').Response} res - The Express response object
 * @param {object} options - The response options
 * @param {number} options.statusCode - The HTTP status code
 * @param {string} options.message - The response message
 * @param {object} [options.data=null] - The response data
 *
 * @returns {import('express').Response}
 *
 * @example
 * ```javascript
 * responseSuccess(res, {
 *   statusCode: 200,
 *   message: 'Successfully retrieved data',
 *   data: { id: 1, name: 'John Doe' }
 * })
 * ```
 */
export const responseSuccess = (res, { statusCode, message, data = null }) =>
  res.status(statusCode).json({
    status: 'success',
    message,
    data
  })

/**
 * Utility function to send an error HTTP response to clients
 *
 * @param {import('express').Response} res - The Express response object
 * @param {object} options - The response options
 * @param {number} options.statusCode - The HTTP status code
 * @param {string} options.message - The response message
 * @param {object|null} [options.errors=null] - The response errors
 *
 * @returns {import('express').Response}
 *
 * @example
 * ```javascript
 * responseError(res, {
 *   statusCode: 400,
 *   message: 'Bad Request',
 *   errors: null
 * })
 * ```
 *
 * @example
 * ```javascript
 * responseError(res, {
 *   statusCode: 401,
 *   message: 'Unauthorized',
 *   errors: null
 * })
 * ```
 *
 * @example
 * ```javascript
 * responseError(res, {
 *   statusCode: 403,
 *   message: 'Forbidden',
 *   errors: null
 * })
 * ```
 *
 * @example
 * ```javascript
 * responseError(res, {
 *   statusCode: 422,
 *   message: 'Entity validation failed',
 *   errors: [
 *     { field: 'name', message: 'Name is required' },
 *     { field: 'email', message: 'Email is required' }
 *   ]
 * })
 * ```
 *
 * @example
 * ```javascript
 * responseError(res, {
 *   statusCode: 500,
 *   message: 'Internal Server Error',
 *   errors: null
 * })
 */
export const responseError = (res, { statusCode, message, errors = null }) =>
  res.status(statusCode).json({
    status: 'error',
    message,
    errors
  })
