import dotenv from 'dotenv'
import express from 'express'
import i18nextHttpMiddleware from 'i18next-http-middleware'

import { morganConfig } from './lib/http/morgan.js'
import i18next from './lib/i18n/i18n.js'
import { corsConfig } from './lib/security/cors.js'
import { helmetConfig } from './lib/security/helmet.js'
import { apiLimiter } from './lib/security/rate-limiter.js'
import { errorMiddleware } from './middlewares/error.middleware.js'
import { localizationMiddleware } from './middlewares/localization.middleware.js'
import apiV1Router from './routes/api/v1/api.route.js'

// Load environment variables
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

// Create an Express application
const app = express()

// Middleware to log requests except in test environment
if (process.env.NODE_ENV !== 'test') app.use(morganConfig)

// Middleware to configure CORS
app.use(corsConfig())

// Middleware to set security headers
app.use(helmetConfig())

// Middleware to limit API requests
app.use(apiLimiter)

// Middleware to parse JSON bodies
app.use(express.json())

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }))

// Middleware to handle i18next localization multilingual
app.use(i18nextHttpMiddleware.handle(i18next))

// Middleware to serve static files
app.use(express.static('public'))

// Middleware to handle localization
app.use(localizationMiddleware)

// Routes
app.use('/api/v1', apiV1Router)

// Middleware to handle errors
app.use(errorMiddleware)

// Export the Express application
export default app
