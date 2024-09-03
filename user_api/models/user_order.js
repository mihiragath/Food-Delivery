const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_order', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    User_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    User_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    User_address: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    Order_time_type: {
      type: DataTypes.ENUM('now','later'),
      allowNull: true
    },
    Status: {
      type: DataTypes.ENUM('order placed','order confirmed'),
      allowNull: true
    },
    User_order_number: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    Instruction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Is_delivered: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Is_completed: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Total_time: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Sub_total: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Delivery_charge: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Paking_charge: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Other_charges: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Total: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    User_rating: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    User_comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Product_rating: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Product_comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cancel_reason_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Cancel_reason_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Cancel_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Cancel_by: {
      type: DataTypes.ENUM('user','admin'),
      allowNull: true
    },
    Cancel_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cancel_refund_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Cancel_refund_by: {
      type: DataTypes.ENUM('user','admin'),
      allowNull: true
    },
    Cancel_refund_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Cancel_refund_paid: {
      type: DataTypes.ENUM('yes','no'),
      allowNull: true
    },
    Site_refund_amount: {
      type: DataTypes.FLOAT(10,2),
      allowNull: true
    },
    Issue_reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Issue_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    User_credited: {
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
    tableName: 'user_order',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
