import dotenv from 'dotenv'

import app from './app.js'
import { logInfo } from './utils/logger.util.js'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Get the port from environment variables
const PORT = Number(process.env.APP_PORT)

// Start the server
app.listen(PORT, () => {
  logInfo(`Server running on http://localhost:${PORT}`)
})
