import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class UserRole extends Model {}

  UserRole.init(
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
      role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    },
    {
      sequelize,
      modelName: 'userRole',
      tableName: 'era_user_roles',
      underscored: true,
      timestamps: false
    }
  )

  UserRole.removeAttribute('id')

  return UserRole
}
