const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         firstname:
 *           type: string
 *           example: Jordi
 *         lastname:
 *           type: string
 *           example: Mantilla
 *         email:
 *           type: string
 *           example: jordimantilla21@gmail.com
 *     register:
 *       type: object
 *.        properties:
 *           username:
 *             type: string
 *             example: Jordi2002
 *           email:
 *             type: string
 *             example: jordi2002@gmail.com
 *           password:
 *             type: string
 *             example: 1234
 *     Login:
 *       type: object
 *         properties:
 *           email:
 *             type: string
 *             example: jordimantilla21@gmail.com
 *           password:
 *             type: string
 *             example: 1234
 */
const Users = db.define(
	"users",
	{
		id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			},
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		hooks: {
			beforeCreate: (users, options) => {
				const { password } = users;
				const hash = bcrypt.hashSync(password, 8); // devuelve las contraseña en un hash (encriptada)
				users.password = hash;
			},
		},
	}
);

module.exports = Users;
