import { createWriteStream } from 'fs'

import dotenv from 'dotenv'
import morgan from 'morgan'

import {
  LOG_DIR,
  LOG_REQUEST_FILE_NAME
} from '../../constants/logger.constant.js'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Get the current environment
const env = process.env.NODE_ENV

/**
 * Morgan middleware for logging HTTP requests
 *
 * @example
 * ```javascript
 * app.use(morganConfig)
 * ```
 */
export const morganConfig = morgan(env === 'development' ? 'dev' : 'combined', {
  // Write logs to a file
  stream:
    env === 'production'
      ? createWriteStream(`${LOG_DIR}/${LOG_REQUEST_FILE_NAME}`, {
          flags: 'a'
        })
      : undefined,
  // Skip logging if the response status code is less than 400
  skip: (_req, res) => {
    return env === 'production' && res.statusCode < 400
  }
})
