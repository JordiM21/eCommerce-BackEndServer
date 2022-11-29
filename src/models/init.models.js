const {
	Users,
	Carts,
	Orders,
	ProductInCart,
	Products,
	productInOrder,
} = require("./index");
const ProductInOrder = require("./productInOrder.models");

//cambie el nombre de los alias (tenía en todos userId), no me dejaba poner los mismos entonces los cambié pero se siguen manteniendo en el diagram ER
//OJO removimos la propiedad userId porque era el mismo nombre para todos los modelos y no dejaba usar alias iguales en las relaciones, por eso los removimos de los modelos y colocamos nuevos alias con nuevos nombres
const initModels = () => {
	//1 user --- M products
	Users.hasMany(Products, {
		as: "item",
		foreignKey: "customer_id",
	});
	Products.belongsTo(Users, {
		as: "customer",
		foreignKey: "customer_id",
	});
	//1 user --- 1 cart
	Users.hasOne(Carts, {
		as: "cart",
		foreignKey: "user_id",
	});
	Carts.belongsTo(Users, {
		as: "owner",
		foreignKey: "user_id",
	});
	//1 user --- M orders
	Users.hasMany(Orders, {
		as: "order",
		foreignKey: "client_id",
	});
	Orders.belongsTo(Users, {
		as: "client",
		foreignKey: "client_id",
	});
	//ADITIONAL RELATIONS
	//1 cart --- M ProductInCart
	Carts.hasMany(ProductInCart, {
		foreignKey: "cartId",
	});
	ProductInCart.belongsTo(Carts, {
		foreignKey: "cartId",
	});
	//1ProductInCart -- 1Product
	ProductInCart.belongsTo(Products);
	Products.hasMany(ProductInCart);

	//1order -- M ProductInOrder
	Orders.hasMany(ProductInOrder, {
		foreignKey: "orderId",
	});
	ProductInOrder.belongsTo(Orders, {
		foreignKey: "orderId",
	});
	//1ProductInOrder -- 1 Product
	ProductInOrder.belongsTo(Products);
	Products.hasMany(ProductInOrder);
};

module.exports = initModels;
