const BookService = require('../services/book.service')

const index = async (req, res) => {
  await BookService.getBooks(req, res)
}

const store = async (req, res) => {
  await BookService.createBook(req, res)
}

const show = async (req, res) => {
  await BookService.findBook(req, res)
}

const update = async (req, res) => {
  await BookService.updateBook(req, res)
}

const destroy = async (req, res) => {
  await BookService.deleteBooks(req, res)
}

module.exports = {
  index,
  store,
  show,
  update,
  destroy
}