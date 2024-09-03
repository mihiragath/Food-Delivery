const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Setting: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: true
    },
    Status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deleted_by: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
