const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Book extends Model {
    static associate(models) {
      this.belongsToMany(models.Category, {
        through: models.BookCategory,
        foreignKey: 'book_id',
        otherKey: 'category_id'
      })
    }
  }

  Book.init(
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
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Author is required'
          },
          notEmpty: {
            msg: 'Author is required'
          }
        }
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Publisher is required'
          },
          notEmpty: {
            msg: 'Publisher is required'
          }
        }
      },
      publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Publication year is required'
          },
          notEmpty: {
            msg: 'Publication year is required'
          },
          is: {
            args: /^[0-9]+$/,
            msg: 'Publication year must be a number'
          }
        }
      },
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'ISBN is required'
          },
          notEmpty: {
            msg: 'ISBN is required'
          }
        }
      },
      number_of_pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Number of pages is required'
          },
          notEmpty: {
            msg: 'Number of pages is required'
          },
          is: {
            args: /^[0-9]+$/,
            msg: 'Number of pages must be a number'
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
      modelName: 'Book',
      tableName: 'books',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Book
}