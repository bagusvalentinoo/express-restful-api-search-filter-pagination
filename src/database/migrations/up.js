import db from '../../models/index.js'
import { logError } from '../../utils/logger.util.js'

const up = async () => {
  try {
    // Connect to the database
    await db.sequelize.authenticate()

    // Migrate the database
    await db.sequelize.sync({ alter: true })

    // Close the connection
    await db.sequelize.close()
  } catch (error) {
    logError(error)
  }
}

up()
