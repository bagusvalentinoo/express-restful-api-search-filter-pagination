import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class RolePermission extends Model {}

  RolePermission.init(
    {
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      },
      permission_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        },
        onUpdate: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'rolePermission',
      tableName: 'era_role_permissions',
      underscored: true,
      timestamps: false
    }
  )

  RolePermission.removeAttribute('id')

  return RolePermission
}
