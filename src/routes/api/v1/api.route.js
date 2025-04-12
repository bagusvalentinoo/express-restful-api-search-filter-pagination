import { Router } from 'express'

import ApiControllers from '../../../controllers/api/api.controller.js'

// Create API V1 Router
const apiV1Router = Router()

// Welcome API
apiV1Router.get('/', ApiControllers.index)

// Export default API V1 Router
export default apiV1Router
