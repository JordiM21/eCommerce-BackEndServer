const { userRegister, getAllUsers } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const {
	getAvailableProducts,
	createProduct,
} = require("./products.controllers");
const {
	addProductToCart,
	deleteProductToCart,
	getAllCarts,
	getOrders,
	buyCart,
} = require("./cart.controller");

module.exports = {
	createProduct,
	getAvailableProducts,
	userRegister,
	getAllUsers,
	userLogin,
	addProductToCart,
	getAllCarts,
	deleteProductToCart,
	buyCart,
	getOrders,
};
