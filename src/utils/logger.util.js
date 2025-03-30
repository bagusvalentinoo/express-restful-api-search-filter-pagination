import logger from '../lib/logger/winston.js'

/**
 * Log error message with stack trace
 *
 * @param {Error} error - The error object.
 * @param {object} context - The context object.
 *
 * @returns {void}
 *
 * @example
 * ```javascript
 ** try {
 *   // ...
 * } catch (error) {
 *   logError(error)
 * }
 * ```
 *
 * @example
 * ```javascript
 * logError(error, {
 *   url: req.originalUrl,
 *   method: req.method
 * })
 * ```
 */
export const logError = (error, context) => {
  if (error instanceof Error)
    logger.error(error.message, {
      ...context,
      stack: error.stack
    })
  else if (typeof error === 'string')
    logger.error(error, {
      ...context
    })
  else
    logger.error('Unknown error', {
      ...context
    })
}

/**
 * Logs an info message with context information
 *
 * @param {string} message - The message to log
 * @param {Object} context - Additional context information to include in the log
 *
 * @returns {void}
 *
 * @example
 * ```javascript
 * logInfo(`Database successfully connected`)
 * ```
 */
export const logInfo = (message, context = {}) => logger.info(message, context)

/**
 * Logs a debug message with context information
 *
 * @param {string} message - The message to log
 * @param {Object} context - Additional context information to include in the log
 *
 * @returns {void}
 *
 * @example
 * ```javascript
 * logDebug(`Database successfully connected`)
 * ```
 */
export const logDebug = (message, context = {}) =>
  logger.debug(message, context)

/**
 * Logs a warning message with context information
 *
 * @param {string} message - The message to log
 * @param {Object} context - Additional context information to include in the log
 *
 * @returns {void}
 *
 * @example
 * ```javascript
 * logWarn(`Database successfully connected`)
 * ```
 * */
export const logWarn = (message, context = {}) => logger.warn(message, context)

// Export the logger instance as default
export default logger
