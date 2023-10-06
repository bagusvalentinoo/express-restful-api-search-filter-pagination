const CategoryResource = require('../resources/category.resource')
const response = require('../../../utils/response.util')
const { Sequelize, sequelize, Op, Category, BookCategory } = require('../../../models/index')
const { orderBy } = require('../../../utils/query.util')

const getCategories = async (req, res) => {
  try {
    const sortBy = orderBy(req.query)
    const { search } = req.query
    const { limit, offset } = response.pagination(req.query.page, req.query.limit)

    const responsePayloadCategory = {
      limit: limit,
      offset: offset,
      order: sortBy,
      attributes: [
        'id',
        'title',
        'description',
        [
          Sequelize.literal(`(
            SELECT COUNT(*)
            FROM "book_categories" AS "BookCategory"
            INNER JOIN "books" AS "Book" ON "Book"."id" = "BookCategory"."book_id"
            WHERE "BookCategory"."category_id" = "Category"."id"
          )`),
          'book_count'
        ]
      ]
    }

    if (search) {
      responsePayloadCategory.where = {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${search}%`
            }
          },
          {
            description: {
              [Op.like]: `%${search}%`
            }
          }
        ]
      }
    }

    const categories = await Category.findAndCountAll(responsePayloadCategory)

    const paginationCategories = response.paginationResponse(
      categories,
      req.query.page,
      limit,
      'categories',
      categories.rows
    )

    return response.success(res, 200, 'Data Successfully Loaded', paginationCategories)
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const createCategory = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const category = await Category.create({
      title: req.body.title,
      description: req.body.description
    }, { transaction: t })

    await t.commit()

    return response.success(res, 201, 'Data Successfully Created', new CategoryResource(category), 'category')
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const findCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.param)

    if (!category) response.throwNewError(400, 'Oops, Category Not Found')

    return response.success(res, 200, 'Data Successfully Loaded', new CategoryResource(category), 'category')
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const updateCategory = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const category = await Category.findByPk(req.params.param)

    if (!category) response.throwNewError(400, 'Oops, Category Not Found')

    const updatedCategory = await category.update({
      title: req.body.title,
      description: req.body.description
    }, { transaction: t })

    await t.commit()

    return response.success(res, 200, 'Data Successfully Updated', new CategoryResource(updatedCategory), 'category')
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const deleteCategories = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const categories = await Category.findAll({
      where: {
        id: req.body.ids
      }
    })

    if (categories.length === 0) response.throwNewError(400, 'Oops, Category Not Found')

    categories.forEach(async (category) => {
      await BookCategory.destroy({
        where: {
          category_id: category.id
        }
      }, { transaction: t })
    })

    await Category.destroy({
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
  getCategories,
  createCategory,
  findCategory,
  updateCategory,
  deleteCategories
}