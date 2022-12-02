const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Ecommerce App",
			version: "1.0.0",
			description: "API que replica un ecommerce funcional",
		},
	},
	apis: [
		"./src/routes/users.routes.js",
		"./src/models/users.models.js",
		"./src/routes/auth.routes.js",
		"./src/routes/products.routes.js",
		"./src/models/carts.models.js",
		"./src/routes/cart.routes.js",
	],
};

// Generamos nuestra documentación en formato JSON
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
	// creamos la ruta para nuestra documentación
	app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
	// Hacemos la documentación en formato JSON
	app.get("api/v1/docs.json", (req, res) => {
		res.setHeader("Content-Type", "application/json");
		res.send(swaggerSpec);
	});
	// mostramos un mensaje en consola para saber que la documentación
	// esta lista
	console.log(
		`Doc V1 disponible en http://localhost:${port}/api/v1/docs`
	);
};

// exportamos swaggerDocs
module.exports = { swaggerDocs };
