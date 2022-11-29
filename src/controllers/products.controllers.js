const { ProductServices } = require("../services");

const getAvailableProducts = async (req, res, next) => {
	try {
		const offset = req.query.offset ?? 0;
		const limit = req.query.limit ?? 3;
		const products = await ProductServices.getAll(offset, limit);
		res.json(products);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};
const createProduct = async (req, res, next) => {
	try {
		const product = req.body;
		const products = await ProductServices.create(product);
		res.json(products);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};

module.exports = { getAvailableProducts, createProduct };
