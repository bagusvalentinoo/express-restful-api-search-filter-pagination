/**
 * Validates data against a Zod schema
 *
 * @param {import('zod').ZodType} schema - Zod schema to validate against
 * @param {T} data - Data to validate
 *
 * @returns {T} Validated data
 *
 * @throws {import('zod').ZodError} When validation fails
 *
 * @example
 * ```javascript
 * const userSchema = z.object({ name: z.string() })
 * const data = validate(userSchema, { name: 'John' })
 * ```
 */
export const validate = (schema, data) => schema.parse(data)

/**
 * Custom format Zod error
 *
 * @param {import('zod').ZodIssue[]} issues - Zod Issues
 *
 * @returns {Array} Custom Zod error response
 *
 * @example
 * ```javascript
 * const errors = customFormatZodError(error.issues)
 * ```
 */
export const customFormatZodError = issues =>
  issues.map(issue => {
    return {
      field: issue.path.join('.'),
      message: issue.message
    }
  })
