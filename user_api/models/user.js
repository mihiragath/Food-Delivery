const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    User_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    First_Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Last_Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_email_verified: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    Auth_key: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    Password_reset_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Total_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Pincode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Slug: {
      type: DataTypes.STRING(200),
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
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "User_id" },
        ]
      },
    ]
  });
};
