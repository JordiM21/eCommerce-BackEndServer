const { UserServices } = require("../services");
const transporter = require("../utils/mailer");

const userRegister = async (req, res, next) => {
	try {
		const newUser = req.body;
		const result = await UserServices.create(newUser);
		//cuando ya crea el usuario saco el id y se lo pongo a cart como user_id
		const { id } = result;
		const cart = await UserServices.createCart(id);
		// res.json({ cart });
		res.status(201).json({ result, cart });
		await transporter.sendMail({
			from: "<jordimantilla21@gmail.com>",
			to: result.email,
			subject: "Welcome to the best chat app ever",
			text: `Hello ${result.firstname}`,
			html: `<h1>Hello ${result.firstname}</h1>`,
		});
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Faltan datos",
		});
	}
};
const getAllUsers = async (req, res, next) => {
	try {
		const offset = req.query.offset ?? 0;
		const limit = req.query.limit ?? 3;
		const users = await UserServices.getAll(offset, limit);
		res.json(users);
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Algo salio mal",
		});
	}
};

module.exports = {
	userRegister,
	getAllUsers,
};
