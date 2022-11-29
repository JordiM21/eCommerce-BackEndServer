const db = require("../utils/database");
const { DataTypes } = require("sequelize");
// const bcrypt = require("bcrypt");

const Products = db.define("products", {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		defaultValue: 1,
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING,
		defaultValue: "Available",
		allowNull: false,
	},
	img: {
		type: DataTypes.STRING,
		allowNull: true,
	},
});

module.exports = Products;
