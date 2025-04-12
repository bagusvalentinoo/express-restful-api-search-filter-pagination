import db from '../../models/index.js'
import { logError } from '../../utils/logger.util.js'

const up = async () => {
  try {
    // Connect to the database
    await db.sequelize.authenticate()

    /**
     * Note:
     *
     * Make sure the order of the tables is correct, especially for those with relationships.
     * For example, the `accounts` table has a foreign key `user_id` referencing the `users` table.
     * So, it is important to define the `users` table first before the `accounts` table.
     */

    // Migrate the tables
    await db.user.sync({ alter: true })
    await db.account.sync({ alter: true })
    await db.session.sync({ alter: true })
    await db.emailVerification.sync({ alter: true })
    await db.passwordReset.sync({ alter: true })

    // Close the connection
    await db.sequelize.close()
  } catch (error) {
    logError(error)
  }
}

up()
