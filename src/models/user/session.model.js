import { Model } from 'sequelize'

export default (sequelize, DataTypes) => {
  class Session extends Model {
    static associate(models) {
      // BelongsTo Relationships
      this.belongsTo(models.user, {
        foreignKey: 'user_id',
        as: 'user'
      })
    }
  }

  Session.init(
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
      refresh_token: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      refresh_token_expires_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      ip_address: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      user_agent: {
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
      modelName: 'session',
      tableName: 'era_sessions',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Session
}
