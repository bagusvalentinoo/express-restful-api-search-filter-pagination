import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // HasMany Relationships
      this.hasMany(models.session, {
        foreignKey: 'user_id',
        as: 'sessions'
      })

      this.hasMany(models.account, {
        foreignKey: 'user_id',
        as: 'accounts'
      })

      // BelongsToMany Relationships
      this.belongsToMany(models.role, {
        through: models.userRole,
        foreignKey: 'user_id',
        otherKey: 'role_id',
        as: 'roles'
      })

      this.belongsToMany(models.permission, {
        through: models.userPermission,
        foreignKey: 'user_id',
        otherKey: 'permission_id',
        as: 'permissions'
      })
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      two_factor_enabled_at: {
        type: DataTypes.DATE,
        allowNull: true
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
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'user',
      tableName: 'era_users',
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    }
  )

  return User
}
