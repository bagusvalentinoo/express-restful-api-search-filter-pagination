import cors from 'cors'

import {
  CORS_ALLOWED_HEADERS,
  CORS_ALLOWED_METHODS,
  CORS_ORIGINS
} from '../../constants/security.constant.js'
import { t } from '../../lib/i18n/i18n.js'

/**
 * Configures the CORS middleware for the application
 *
 * @returns - An Express middleware function configured with CORS settings
 *
 * @example
 * ```javascript
 * app.use(corsConfig())
 * ```
 */
export const corsConfig = () =>
  cors({
    origin: (origin, callback) => {
      // Allow specific origins
      if (
        origin === null ||
        origin === undefined ||
        origin === '' ||
        CORS_ORIGINS.includes(origin) ||
        process.env.NODE_ENV === 'development'
      )
        callback(null, true)
      else
        callback(new Error(() => t('lib.cors.not_allowed', { ns: 'errors' })))
    },
    methods: [...CORS_ALLOWED_METHODS], // Allow specific HTTP methods
    allowedHeaders: [...CORS_ALLOWED_HEADERS], // Allow specific headers
    credentials: true, // Enable credentials
    maxAge: 600, // Set the maximum age of preflight requests
    preflightContinue: false, // Disable preflight
    optionsSuccessStatus: 204 // Set the status code for successful OPTIONS requests
  })
