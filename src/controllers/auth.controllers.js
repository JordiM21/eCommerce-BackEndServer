const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
	try {
		// email y password
		const credentials = req.body;
		const result = await AuthServices.authenticate(credentials);
		if (result) {
			const { id, username, email, password } = result.result;
			const user = { id, username, email, password };
			const token = AuthServices.genToken(user);
			user.token = token;
			res.json({ ...user });
		} else {
			res.status(400).json({
				message: "Información inválida",
			});
		}
	} catch (error) {
		next({
			status: 400,
			errorContent: error,
			message: "Email o contraseña inválida",
		});
	}
};

module.exports = {
	userLogin,
};
