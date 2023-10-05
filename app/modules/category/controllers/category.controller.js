const CategoryService = require('../services/category.service')

const index = async (req, res) => {
  await CategoryService.getCategories(req, res)
}

const store = async (req, res) => {
  await CategoryService.createCategory(req, res)
}

const show = async (req, res) => {
  await CategoryService.findCategory(req, res)
}

const update = async (req, res) => {
  await CategoryService.updateCategory(req, res)
}

const destroy = async (req, res) => {
  await CategoryService.deleteCategories(req, res)
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}