const { convertToUpperCase, convertToLowerCase } = require('./string.util')

const orderBy = (query) => {
  const { sort_by, sort_dir } = query
  const validSortDir = ['ASC', 'DESC']
  const normalizedSortDir = validSortDir.includes(sort_dir) ? convertToUpperCase(sort_dir) : 'DESC'

  return sort_by ? [[convertToLowerCase(sort_by), normalizedSortDir]] : [['created_at', 'DESC']]
}


module.exports = { orderBy }