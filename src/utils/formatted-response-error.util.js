/**
 * Class representing a formatted response error.
 *
 * @example
 * ```javascript
 * throw new FormattedResponseError(400, 'Oops, data not found')
 * ```
 */
export class FormattedResponseError extends Error {
  /**
   * Creates an instance of FormattedResponseError.
   *
   * @param {number} statusCode - HTTP status code.
   * @param {string} message - Error message.
   */
  constructor(statusCode, message) {
    super(message)
    this.statusCode = statusCode
  }
}
