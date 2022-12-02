const { Products, Carts, ProductInCart, Orders } = require("../models");

class CartServices {
	static async getAllCarts() {
		try {
			const cart = await Carts.findAll({
				attributes: ["id", "totalPrice"],
				include: [
					{
						model: ProductInCart,
						attributes: [
							"productId",
							"quantity",
							"price",
						],
						include: [
							{
								model: Products,
								attributes: [
									"id",
									"name",
									"price",
									"status",
									"img",
								],
							},
						],
					},
				],
			});
			return cart;
		} catch (error) {
			throw error;
		}
	}
	static async add(cartId, productId, quantity) {
		try {
			const cart = await Carts.findOne({
				where: { id: cartId },
			});
			if (cart) {
				//si existe buscamos el producto por su id nuevamente para ver si existe
				const result = await Products.findOne({
					where: { id: productId },
				});
				//si pasa los dos filtros creamos el product en el modelo ProductInCart
				if (result) {
					//tomamos el precio y el status de el producto encontrado en el modelo para asignarlo junto con los valores obtenidos
					const { price, status } = result;
					const product =
						await ProductInCart.create({
							cartId,
							productId,
							quantity,
							price,
							status,
						});
					const carts = await Carts.findOne({
						where: { id: cartId },
						include: {
							model: ProductInCart,
						},
					});
					let total = 0;
					carts.productInCarts.forEach(
						(element) => {
							total +=
								element.price *
								element.quantity;
						}
					);
					await Carts.update(
						{ totalPrice: total },
						{ where: { id: cartId } }
					);
					return true;
				} else {
					//será null porque no encontró producto
					return result;
				}
			} else {
				//este será un null porque no encontró el carro
				return cart;
			}
		} catch (error) {
			throw error;
		}
	}
	static async delete(cartId, productId) {
		try {
			const cart = await Carts.findOne({
				where: { id: cartId },
			});
			if (cart) {
				//si existe buscamos el producto por su id nuevamente para ver si existe
				const result = await Products.findOne({
					where: { id: productId },
				});
				//si pasa los dos filtros creamos el product en el modelo ProductInCart
				if (result) {
					const product =
						await ProductInCart.destroy({
							where: { productId },
						});
					//hacemos otro findOne para traer la info ACTUALIZADA
					const carts = await Carts.findOne({
						where: { id: cartId },
						include: {
							model: ProductInCart,
						},
					});

					let total = 0;
					carts.productInCarts.forEach(
						(element) => {
							total +=
								element.price *
								element.quantity;
						}
					);
					await Carts.update(
						{ totalPrice: total },
						{ where: { id: cartId } }
					);
					return true;
				} else {
					//será null porque no encontró producto
					return result;
				}
			} else {
				//este será un null porque no encontró el carro
				return cart;
			}
		} catch (error) {
			throw error;
		}
	}
	static async buy(cartId) {
		try {
			//buscamos el carrito si existe
			const cart = await Carts.findOne({
				where: { id: cartId },
			});
			const { totalPrice } = cart;
			const orders = await Orders.create({
				totalPrice,
				status: "Purchased,",
			});

			await ProductInCart.destroy({ where: { cartId } });
			return orders;

			//luego tenemos toda la info en cart, le asignamos esta info a un nuevo modelo ORDER
			//igualamos este cart a [] así queda vacío y podemos seguir añadiendo products
		} catch (error) {
			throw error;
		}
	}
	static async getOrders() {
		try {
			const orders = await Orders.findAll();
			return orders;
		} catch (error) {
			throw erro;
		}
	}
	// static async getAll(offset, limit) {
	// 	try {
	// 		const result = await Products.findAll({
	// 			offset,
	// 			limit,
	// 		});
	// 		return result;
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }
}

module.exports = CartServices;
