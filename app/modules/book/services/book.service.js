const BookResource = require('../resources/book.resource')
const response = require('../../../utils/response.util')
const { Sequelize, sequelize, Op, Book, Category, BookCategory } = require('../../../models/index')
const { orderBy } = require('../../../utils/query.util')

const getBooks = async (req, res) => {
  try {
    const sortBy = orderBy(req.query)
    const { search } = req.query
    const { limit, offset } = response.pagination(req.query.page, req.query.limit)

    const responsePayloadBook = {
      limit: limit,
      offset: offset,
      order: sortBy,
      include: [
        {
          model: Category,
          through: { attributes: [] },
          attributes: ['id', 'title']
        }
      ],
      distinct: true,
    }

    if (search) {
      responsePayloadBook.where = {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${search}%`
            }
          },
          {
            author: {
              [Op.like]: `%${search}%`
            }
          },
          {
            publisher: {
              [Op.like]: `%${search}%`
            }
          },
          {
            isbn: {
              [Op.like]: `%${search}%`
            }
          },
          Sequelize.where(
            Sequelize.cast(Sequelize.col('Book.publication_year'), 'varchar'),
            { [Op.like]: `%${search}%` }
          ),
          Sequelize.where(
            Sequelize.cast(Sequelize.col('Book.number_of_pages'), 'varchar'),
            { [Op.like]: `%${search}%` }
          )
        ]
      }
    }

    const books = await Book.findAndCountAll(responsePayloadBook)

    const paginationBooks = response.paginationResponse(
      books,
      req.query.page,
      limit,
      'books',
      BookResource.collection(books.rows, 1)
    )

    return response.success(res, 200, 'Data Successfully Loaded', paginationBooks)
  } catch (error) {
    console.log(error)
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const createBook = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      publication_year: req.body.publication_year,
      isbn: req.body.isbn,
      number_of_pages: req.body.number_of_pages
    }, { returning: true, transaction: t })

    if (req.body.categories) await book.setCategories(req.body.categories, { transaction: t })

    await t.commit()

    const bookCreated = await Book.findByPk(book.id, {
      include: {
        model: Category,
        through: { attributes: [] },
        attributes: ['id', 'title']
      }
    })

    return response.success(res, 201, 'Data Successfully Created', new BookResource(bookCreated), 'book')
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const findBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.param, {
      include: {
        model: Category,
        through: { attributes: [] },
        attributes: ['id', 'title']
      }
    })

    if (!book) response.throwNewError(400, 'Oops, Book Not Found')

    return response.success(res, 200, 'Data Successfully Loaded', new BookResource(book), 'book')
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const updateBook = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const book = await Book.findByPk(req.params.param, {
      include: {
        model: Category,
        through: { attributes: [] },
        attributes: ['id', 'title']
      }
    })

    if (!book) response.throwNewError(400, 'Oops, Book Not Found')

    await book.update({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      publication_year: parseInt(req.body.publication_year),
      isbn: req.body.isbn,
      number_of_pages: parseInt(req.body.number_of_pages)
    }, { returning: true, transaction: t })

    if (req.body.categories) await book.setCategories(req.body.categories, { transaction: t })

    await t.commit()

    const updatedBook = await Book.findByPk(book.id, {
      include: {
        model: Category,
        through: { attributes: [] },
        attributes: ['id', 'title']
      }
    })

    return response.success(res, 200, 'Data Successfully Updated', new BookResource(updatedBook), 'book')
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const deleteBooks = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const books = await Book.findAll({
      where: {
        id: req.body.ids
      }
    })

    if (books.length === 0) response.throwNewError(400, 'Oops, Book Not Found')

    books.forEach(async (book) => {
      await BookCategory.destroy({
        where: {
          book_id: book.id
        }
      }, { transaction: t })
    })

    await Book.destroy({
      where: {
        id: req.body.ids
      }
    }, { transaction: t })

    return response.success(res, 200, 'Data Successfully Deleted')
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  getBooks,
  createBook,
  findBook,
  updateBook,
  deleteBooks
}