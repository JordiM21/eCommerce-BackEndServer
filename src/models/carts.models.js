const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     addToCart:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           example: 1
 *         quantity:
 *           type: string
 *           example: 1
 *     DeleteFromCart:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: jordimantilla21@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *     BuyCart:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: jordimantilla21@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *
 *     GetCart:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: jordimantilla21@gmail.com
 *         password:
 *           type: string
 *           example: 1234
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 */

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
