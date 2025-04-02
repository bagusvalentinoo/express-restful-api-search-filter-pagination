import db from '../../models/index.js'
import { logError } from '../../utils/logger.util.js'

const down = async () => {
  try {
    // Connect to the database
    await db.sequelize.authenticate()

    // Drop the database
    await db.sequelize.drop()

    // Close the connection
    await db.sequelize.close()
  } catch (error) {
    logError(error)
  }
}

down()
