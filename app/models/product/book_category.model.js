const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class BookCategory extends Model { }

  BookCategory.init(
    {
      book_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'books',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      }
    },
    {
      sequelize,
      modelName: 'BookCategory',
      tableName: 'book_categories',
      timestamps: false
    }
  )

  return BookCategory
}