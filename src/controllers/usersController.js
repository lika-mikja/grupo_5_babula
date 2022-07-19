const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")
/*
const User = require('../models/User');
*/
const User = db.User;
const usersImagesRoute = path.join(__dirname, '..', '..', 'public', 'images', 'users')


const controller = {
	register: (req, res) => {
		return res.render('./users/userRegisterForm');
	},
	processRegister: async (req, res) => {
		const resultValidation = validationResult(req);
		const { firstName, lastName, email, password, roleId } = req.body
		let checkRoleId;
		if (roleId == "Admin") {
			return checkRoleId = 1
		} else {
			checkRoleId = 2
		}
		const avatar = req.file.filename
		if (resultValidation.errors.length > 0) {
			return res.render('./users/userRegisterForm', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		/*let userInDB = User.findAll({where: { email: req.body.email }});
		if (userInDB) {
			return res.render('./users/userRegisterForm', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}*/

		await User.create({
			firstName,
			lastName,
			email,
			password: bcryptjs.hashSync(password, 10),
			roleId: checkRoleId,
			avatar,
		})
			.then(() => {
				res.redirect('/users/login')
			})
			.catch(error => res.send(error))
	},

	login: (req, res) => {
		return res.render('./users/userLoginForm');
	},

	loginProcess: (req, res) => {
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			let cssSheets = ["login"];
			let title = "Inicio de sesión";
			return res.render("users/login.ejs", { cssSheets, title, errorMessages: errors.mapped() });
		} else {
			User.findAll()
				.then(function (allUsers) {
					let usuarioALoguearse;
					for (let i = 0; i < allUsers.length; i++) {
						if (req.body.email == allUsers[i].email && bcryptjs.compareSync(req.body.password, allUsers[i].password)) {
							usuarioALoguearse = allUsers[i];
							break;
						}
					}
					if (usuarioALoguearse == undefined) {
						let customError = {
							"password": {
								"value": "",
								"msg": "Las credenciales no son válidas",
								"param": "email",
								"location": "body"
							}
						}
						let cssSheets = ["login"];
						let title = "Inicio de sesión";
						return res.render("users/login.ejs", { cssSheets, title, errorMessages: customError });
					}
					delete usuarioALoguearse.password;
					req.session.userLogged = usuarioALoguearse;
					if (req.body.rememberUser) {
						console.log("Se guarda la cookie")
						res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 * 24 * 365 })
					}
					res.redirect('/');
				})
		}
	},

	profile: (req, res) => {
		return res.render('./users/userProfile', {
			user: req.session.userLogged
		});
	},
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;