const express = require('express')
const router = express.Router()
const BookController = require('../controllers/book.controller')

router.get('/', async (req, res) => {
  await BookController.index(req, res)
})

router.post('/', async (req, res) => {
  await BookController.store(req, res)
})

router.get('/:param', async (req, res) => {
  await BookController.show(req, res)
})

router.put('/:param', async (req, res) => {
  await BookController.update(req, res)
})

router.delete('/', async (req, res) => {
  await BookController.destroy(req, res)
})

module.exports = router