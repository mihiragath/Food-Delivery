const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_user', {
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_key: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password_reset_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    }
  }, {
    sequelize,
    tableName: 'admin_user',
    timestamps: true,
    paranoid: true
  });
};
