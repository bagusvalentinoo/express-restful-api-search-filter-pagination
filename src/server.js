import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

import app from './app.js'
import { logInfo } from './utils/logger.util.js'

// Get the port from environment variables
const PORT = Number(process.env.APP_PORT)

// Start the server
app.listen(PORT, () => {
  logInfo(`Server running on http://localhost:${PORT}`)
})
