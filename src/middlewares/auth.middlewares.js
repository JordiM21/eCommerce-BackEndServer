const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req, res, next) => {
	const bearerToken = req.headers.authorization;
	console.log(bearerToken);
	if (bearerToken) {
		const token = bearerToken.split("Bearer ")[1];
		try {
			const decoded = jwt.verify(
				token,
				process.env.SECRET,
				"HS512"
			);
			next();
		} catch (error) {
			next({
				status: 400,
				errorContent: error,
				message: "Invalid Token",
			});
		}
	} else {
		next({
			status: 400,
			errorContent: error,
			message: "TOKEN DOESN'T FOUND, INSERT IT AND PLEASE TRY AGAIN",
		});
	}
};

module.exports = authenticate;
