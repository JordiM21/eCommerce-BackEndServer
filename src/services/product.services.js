const { Products } = require("../models");

class ProductServices {
	static async getAll(offset, limit) {
		try {
			const result = await Products.findAll({
				offset,
				limit,
			});
			return result;
		} catch (error) {
			throw error;
		}
	}
	static async create(product) {
		try {
			const result = await Products.create(product);
			return result;
		} catch (error) {
			throw error;
		}
	}
}

module.exports = ProductServices;
