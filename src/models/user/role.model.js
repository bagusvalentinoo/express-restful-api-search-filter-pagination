import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // BelongsToMany Relationships
      this.belongsToMany(models.user, {
        through: models.userRole,
        foreignKey: 'role_id',
        otherKey: 'user_id',
        as: 'users'
      })

      this.belongsToMany(models.permission, {
        through: models.rolePermission,
        foreignKey: 'role_id',
        otherKey: 'permission_id',
        as: 'permissions'
      })
    }
  }

  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(50),
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
      modelName: 'role',
      tableName: 'era_roles',
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at'
    }
  )

  return Role
}
