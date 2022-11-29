const db = require("../utils/database");
const { Users, Products } = require("../models");
const initModels = require("../models/init.models");

initModels();

const users = [
	{
		username: "maria",
		email: "maria@gmail.com",
		password: "1234",
	},
	{
		username: "carlos",
		email: "carlos@gmail.com",
		password: "1234",
	},
	{
		username: "diego",
		email: "diego@gmail.com",
		password: "1234",
	},
];

const products = [
	{
		name: "T-Shirt",
		price: 5,
	},
	{
		name: "Shoes",
		price: 10,
	},
	{
		name: "Belt",
		price: 2,
	},
];

db.sync({ force: true }).then(() => {
	console.log("Sincronizando...");
	//borramos porque cuando creamos el user desde acá no crea el cart
	// users.forEach(async (user) => await Users.create(user));
	setTimeout(() => {
		products.forEach(
			async (product) => await Products.create(product)
		);
	}, 100);
	console.log("plantación exitosa");
});
