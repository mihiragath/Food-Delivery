const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    Address_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Phone_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    User_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    User_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Address_detail: {
      type: DataTypes.TEXT,
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
    tableName: 'address',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Address_id" },
        ]
      },
    ]
  });
};
