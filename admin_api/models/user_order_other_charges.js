const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_order_other_charges', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    User_order_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Store_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Type: {
      type: DataTypes.ENUM('flat','percentage'),
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Order_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Value_amount: {
      type: DataTypes.FLOAT(10,2),
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
    tableName: 'user_order_other_charges',
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
