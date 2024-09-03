const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('banner', {
    Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Total_click: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Visit_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    End_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Priority_index: {
      type: DataTypes.INTEGER,
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
    tableName: 'banner',
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
