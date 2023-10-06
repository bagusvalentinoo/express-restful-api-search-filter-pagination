const express = require('express')
const router = express.Router()
const categoryRoute = require('../../modules/category/routes/category.route')
const bookRoute = require('../../modules/book/routes/book.route')

router.use('/categories', categoryRoute)
router.use('/books', bookRoute)

module.exports = router