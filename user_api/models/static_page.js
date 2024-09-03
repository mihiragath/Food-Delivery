const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('static_page', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Title: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Section: {
      type: DataTypes.STRING(200),
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
    tableName: 'static_page',
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
