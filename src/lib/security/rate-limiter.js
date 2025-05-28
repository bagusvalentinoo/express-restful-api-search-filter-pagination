import rateLimit from 'express-rate-limit'

import { t } from '../../lib/i18n/i18n.js'

/**
 * Creates a rate limiter config middleware for Express
 *
 * @param {number} windowMinutes - The time window in minutes for rate limiting
 * @param {number} maxRequests - The maximum number of requests allowed in the time window
 *
 * @returns {import('express').RequestHandler} - The rate limiter middleware request handler
 */
const rateLimiterConfig = (windowMinutes, maxRequests) =>
  rateLimit({
    windowMs: windowMinutes * 60 * 1000, // Time window in milliseconds
    max: maxRequests, // Maximum number of requests
    standardHeaders: true, // Enable the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: () => t('lib.rate_limiter.too_many_requests', { ns: 'errors' }), // Custom error message
    validate: { trustProxy: false } // Disable trust proxy
  })

/**
 * Creates a rate limiter middleware for Express
 *
 * @returns {import('express').RequestHandler} - The rate limiter middleware request handler
 */
export const apiLimiter = rateLimiterConfig(15, 100)
