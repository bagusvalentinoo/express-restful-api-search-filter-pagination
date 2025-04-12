import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      // BelongsTo Relationships
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }

  Account.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'era_users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      account_id: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      provider_id: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      access_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
      },
      refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
      },
      id_token: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true
      },
      access_token_expires_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      refresh_token_expires_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      scope: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      password: {
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
      }
    },
    {
      sequelize,
      modelName: 'account',
      tableName: 'era_accounts',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Account
}
