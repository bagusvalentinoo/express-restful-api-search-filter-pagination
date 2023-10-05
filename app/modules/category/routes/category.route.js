const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category.controller')

router.get('/', async (req, res) => {
  await CategoryController.index(req, res)
})

router.post('/', async (req, res) => {
  await CategoryController.store(req, res)
})

router.get('/:param', async (req, res) => {
  await CategoryController.show(req, res)
})

router.put('/:param', async (req, res) => {
  await CategoryController.update(req, res)
})

router.delete('/', async (req, res) => {
  await CategoryController.destroy(req, res)
})

module.exports = router