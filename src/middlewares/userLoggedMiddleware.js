	/*const User = require('../models/User');*/
	const db = require("../database/models");
	const sequelize = db.sequelize;
	const User = db.User

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.body;
	console.log("emailCookie", emailInCookie)
	let userFromCookie = User.findAll({where: { email: "adrianocarrieri.dg@gmail.com" }});
	

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;