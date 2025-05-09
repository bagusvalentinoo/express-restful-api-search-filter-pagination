import { readdirSync, statSync } from 'fs'
import { basename, dirname, join } from 'path'
import { fileURLToPath } from 'url'

import dotenv from 'dotenv'
import { DataTypes, Sequelize } from 'sequelize'

import { logDebug, logError } from '../utils/logger.util.js'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Configure Sequelize instance, I'm use DB Credentials method, you can use other methods (e.g., DB URL, etc.)

// If you use DB URL
// const sequelize = new Sequelize(process.env.DB_URL)

// If you use DB Credentials
const sequelize = new Sequelize({
  database: process.env.DB_NAME, // Your database name
  username: process.env.DB_USERNAME, // Your database username
  password: process.env.DB_PASSWORD, // Your database password
  host: process.env.DB_HOST, // Your database host
  port: process.env.DB_PORT || 5432, // Your database port (optional, default is 5432)
  dialect: process.env.DB_DIALECT, // Your database dialect (e.g., 'mysql', 'postgres', etc.)
  logging:
    process.env.NODE_ENV === 'development' ? msg => logDebug(msg) : false, // Disable logging in production
  pool: {
    max: parseInt(process.env.DB_POOL_MAX) || 5, // Maximum number of connections (optional, default is 5)
    min: parseInt(process.env.DB_POOL_MIN) || 0, // Minimum number of connections (optional, default is 0)
    acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000, // Maximum time (in milliseconds) to wait for a connection (optional, default is 30000)
    idle: parseInt(process.env.DB_POOL_IDLE) || 10000 // Maximum time (in milliseconds) a connection can be idle before being released (optional, default is 10000)
  },
  dialectOptions:
    process.env.DB_HOST !== 'localhost'
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        } // Enable SSL for non-local connections
      : {}
})

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const db = {
  sequelize,
  Sequelize
}

/**
 * Recursively finds all model files in directory
 *
 * @param {string} dirPath - Directory to scan
 *
 * @returns {string[]} - Array of file paths
 */
const findModelFiles = dirPath =>
  // Find all model files in directory
  readdirSync(dirPath).reduce((files, file) => {
    // Get full path of file
    const fullPath = join(dirPath, file)
    // Check if file is directory
    const isDirectory = statSync(fullPath).isDirectory()

    // If directory, recursively find model files
    if (isDirectory) return [...files, ...findModelFiles(fullPath)]
    // Skip index.js and non-JS files
    if (
      file === 'index.js' ||
      file === basename(__filename) ||
      !file.endsWith('.js')
    )
      return files

    // Add model file to list
    return [...files, fullPath]
  }, [])

/**
 * Load and initialize models
 *
 * @returns {Promise<void>}
 */
const initializeModels = async () => {
  // Get all model files
  const modelFiles = findModelFiles(__dirname)

  // Load and initialize models
  for (const filePath of modelFiles) {
    try {
      // Import model
      const modelModule = await import(filePath)

      // Check if default export exists
      if (modelModule?.default) {
        // Create model
        const model = modelModule.default(sequelize, DataTypes)

        // Add model to database
        db[model.name] = model
      }
    } catch (error) {
      // Log error and throw
      logError(`Error loading model at ${filePath}:`, error)
      throw error
    }
  }

  // Setup associations after all models are loaded
  Object.values(db)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => {
      model.associate(db)
      sequelize.modelManager.addModel(model)
    })
}

initializeModels()

// Export default database
export default db
