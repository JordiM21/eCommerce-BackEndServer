const { Users, Carts } = require("../models");

class UserServices {
	static async create(user) {
		try {
			const result = await Users.create(user);
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async createCart(id) {
		try {
			const cart = await Carts.create({ user_id: id });
			return cart;
		} catch (error) {
			throw error;
		}
	}
	static async getAll(offset, limit) {
		try {
			const result = await Users.findAll({
				offset,
				limit,
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = UserServices;
