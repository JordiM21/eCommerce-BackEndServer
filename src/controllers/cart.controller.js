const { CartServices } = require("../services");

const getAllCarts = async (req, res, next) => {
	try {
		const carts = await CartServices.getAllCarts();
		res.json({ carts });
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};

const addProductToCart = async (req, res, next) => {
	try {
		const { cartId } = req.params;
		const { productId, quantity } = req.body;
		const products = await CartServices.add(
			cartId,
			productId,
			quantity
		);
		res.json(products);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};
const deleteProductToCart = async (req, res, next) => {
	try {
		const { cartId } = req.params;
		const { productId } = req.body;
		const product = await CartServices.delete(cartId, productId);
		res.json(product);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};
const buyCart = async (req, res, next) => {
	try {
		const { cartId } = req.params;
		const cart = await CartServices.buy(cartId);
		res.json(cart);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};
const getOrders = async (req, res, next) => {
	try {
		const orders = await CartServices.getOrders();
		res.json(orders);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};
module.exports = {
	addProductToCart,
	getAllCarts,
	deleteProductToCart,
	buyCart,
	getOrders,
};
