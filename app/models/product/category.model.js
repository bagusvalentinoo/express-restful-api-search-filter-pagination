const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Category extends Model {
    static associate(models) {
      this.belongsToMany(models.Book, {
        through: models.BookCategory,
        foreignKey: 'category_id',
        otherKey: 'book_id'
      })
    }
  }

  Category.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Title is required'
          },
          notEmpty: {
            msg: 'Title is required'
          }
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Description is required'
          },
          notEmpty: {
            msg: 'Description is required'
          }
        }
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
      sequelize,
      modelName: 'Category',
      tableName: 'categories',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Category
}