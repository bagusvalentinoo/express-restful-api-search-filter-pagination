import { readdirSync, statSync } from 'fs'
import { basename, dirname, join } from 'path'
import { fileURLToPath } from 'url'

import dotenv from 'dotenv'
import { DataTypes, Sequelize } from 'sequelize'

import { logDebug, logError } from '../utils/logger.util.js'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Configure Sequelize instance, I'm use DB Credentials method, you can use other methods (e.g., DB URL, etc.)
const sequelize = new Sequelize({
  database: process.env.DB_NAME, // Your database name
  username: process.env.DB_USERNAME, // Your database username
  password: process.env.DB_PASSWORD, // Your database password
  host: process.env.DB_HOST, // Your database host
  port: process.env.DB_PORT || 5432, // Your database port (optional, default is 5432)
  dialect: 'postgres', // Your database dialect (e.g., 'mysql', 'postgres', etc.)
  logging:
    process.env.NODE_ENV === 'development'
      ? (...msg) => logDebug(...msg)
      : false, // Disable logging in production
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

const db = {}

/**
 * Reads models from the specified directory
 *
 * @param {string} dir - The directory to read models from
 *
 * @returns {void}
 */
const readModels = dir => {
  const entries = readdirSync(dir)

  entries.forEach(entry => {
    const fullPath = join(dir, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) readModels(fullPath)
    else if (entry.slice(-3) === '.js' && entry !== basename(__filename)) {
      import(fullPath)
        .then(model => {
          if (model && model.default) {
            const namedModel = model.default(sequelize, DataTypes)

            db[namedModel.name] = namedModel
          }
        })
        .catch(error => logError(`Error loading model at ${fullPath}:`, error))
    }
  })
}

// Read models
readModels(__dirname)

// Associate models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) db[modelName].associate(db)
})

db.sequelize = sequelize

export default db
