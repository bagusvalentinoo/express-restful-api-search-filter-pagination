/**
 * Class representing a formatted response error
 *
 * @example
 * ```javascript
 * throw new FormattedResponseError(400, 'Oops, data not found')
 * ```
 */
export class FormattedResponseError extends Error {
  /**
   * Creates an instance of FormattedResponseError
   *
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {boolean} [shouldLog=false] - Whether to log this error
   */
  constructor(statusCode, message, shouldLog = false) {
    super(message)
    this.statusCode = statusCode
    this.shouldLog = shouldLog
  }
}
