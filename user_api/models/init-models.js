var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _admin_user = require("./admin_user");
var _banner = require("./banner");
var _cancel_reason = require("./cancel_reason");
var _category = require("./category");
var _contact_us = require("./contact_us");
var _general_setting = require("./general_setting");
var _menage_module = require("./menage_module");
var _product = require("./product");
var _static_page = require("./static_page");
var _status = require("./status");
var _sub_category = require("./sub_category");
var _user = require("./user");
var _user_favourite_product = require("./user_favourite_product");
var _user_order = require("./user_order");
var _user_order_other_charges = require("./user_order_other_charges");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var admin_user = _admin_user(sequelize, DataTypes);
  var banner = _banner(sequelize, DataTypes);
  var cancel_reason = _cancel_reason(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var contact_us = _contact_us(sequelize, DataTypes);
  var general_setting = _general_setting(sequelize, DataTypes);
  var menage_module = _menage_module(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var static_page = _static_page(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var sub_category = _sub_category(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_favourite_product = _user_favourite_product(sequelize, DataTypes);
  var user_order = _user_order(sequelize, DataTypes);
  var user_order_other_charges = _user_order_other_charges(sequelize, DataTypes);


  return {
    address,
    admin_user,
    banner,
    cancel_reason,
    category,
    contact_us,
    general_setting,
    menage_module,
    product,
    static_page,
    status,
    sub_category,
    user,
    user_favourite_product,
    user_order,
    user_order_other_charges,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
