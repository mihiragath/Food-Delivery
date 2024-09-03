const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('msdelivery', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
