const db = require("../utils/database");
const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

const Carts = db.define("carts", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	totalPrice: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
});

module.exports = Carts;
