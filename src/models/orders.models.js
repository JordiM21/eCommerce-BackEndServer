const db = require("../utils/database");
const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

const Orders = db.define("orders", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	totalPrice: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Orders;
