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
   * @param {number} _statusCode - HTTP status code.
   * @param {string} message - Error message.
   */
  constructor(_statusCode, message) {
    super(message)
  }
}
