const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sub_category', {
    sub_categoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Category_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Display_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Slug: {
      type: DataTypes.STRING(500),
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
    tableName: 'sub_category',
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
