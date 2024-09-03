const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_favourite_product', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    User_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Deal_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Is_favourite: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: true
    },
    Is_expired: {
      type: DataTypes.ENUM('yes','no'),
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
    tableName: 'user_favourite_product',
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
