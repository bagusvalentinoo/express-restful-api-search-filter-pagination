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
