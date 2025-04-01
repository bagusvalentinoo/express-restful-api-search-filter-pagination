import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

/**
 * Base path for log files
 */
export const LOG_DIR = './logs'

/**
 * The level of the logs
 */
export const LOG_LEVEL =
  process.env.NODE_ENV === 'production' ? 'info' : 'debug'

/**
 * Name of the main log file
 */
export const LOG_MAIN_FILE_NAME = 'application.log'

/**
 * Name of the request log file
 */
export const LOG_REQUEST_FILE_NAME = 'access.log'

/**
 * The maximum size of the log file
 */
export const LOG_MAX_FILE_SIZE = 5242880 // 5MB

/**
 * The maximum number of log files
 */
export const LOG_MAX_FILES = 5
