// importar los modelos
// exportarlos

// Agrupar todos los modelos para encontrarlos en una
// sola direccion
const Users = require("./users.models");
const Products = require("./products.models");
const Carts = require("./carts.models");
const ProductInCart = require("./productInCart.models");
const Orders = require("./orders.models");
const productInOrder = require("./productInOrder.models");

module.exports = {
	Users,
	Products,
	Carts,
	ProductInCart,
	Orders,
	productInOrder,
};
