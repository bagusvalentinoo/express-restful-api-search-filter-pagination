import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      // BelongsToMany Relationships
      this.belongsToMany(models.role, {
        through: models.rolePermission,
        foreignKey: 'permission_id',
        otherKey: 'role_id',
        as: 'roles'
      })

      this.belongsToMany(models.user, {
        through: models.userPermission,
        foreignKey: 'permission_id',
        otherKey: 'user_id',
        as: 'users'
      })
    }
  }

  Permission.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      description: {
        type: DataTypes.STRING(255),
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
      modelName: 'permission',
      tableName: 'era_permissions',
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    }
  )

  return Permission
}
