import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class UserPermission extends Model {}

  UserPermission.init(
    {
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      permission_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'permissions',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'userPermission',
      tableName: 'era_user_permissions',
      underscored: true,
      timestamps: false
    }
  )

  UserPermission.removeAttribute('id')

  return UserPermission
}
