const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")

const User = db.User;
const usersImagesRoute = path.join(__dirname, '..', '..', 'public', 'images', 'users')


const controller = {
	register: (req, res) => {
		return res.render('./users/userRegisterForm');
	},

	processRegister: (req, res) => {
		db.User.findOne({
			where: { email: req.body.email }
		}).then((userInDB) => {
			if (userInDB) {
				return res.render('./users/userRegisterForm.ejs', {
					errors: {
						"email": {
							"value": "",
							"msg": "Ya hay un usuario registrado con este correo electrónico.",
							"param": "email",
							"location": "body"
						}
					},
					oldData: req.body
				});
			}
			let errors = validationResult(req);
			if (!errors.isEmpty()) {
				if (req.file) {
					let imageName = req.file.filename;
					fs.unlinkSync(path.join(usersImagesRoute, imageName));
				}
				return res.render('./users/userRegisterForm.ejs', { errors: errors.mapped(), oldData: req.body });
			} else {
				db.User.create({
					...req.body,
					avatar: req.file.filename,
					password: bcryptjs.hashSync(req.body.password, 10),
				})
					.then(() => {
						return res.redirect('/user/login');
					})
					.catch((error) => {
						return res.send(error);
					})
			};

		}).catch((error) => {
			console.log(error)
		})
	},

	login: (req, res) => {
		return res.render('./users/userLoginForm');
	},

	processLogin: (req, res) => {
		let errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.render('./users/userLoginForm.ejs', {errorMessages: errors.mapped() });
		} else {
			User.findAll()
				.then(function (allUsers) {
					for (let i = 0; i < allUsers.length; i++) {
						if (req.body.email == allUsers[i].email && bcryptjs.compareSync(req.body.password, allUsers[i].password)) {
							userToLogin = allUsers[i];
							break;
						}
					}
					if (userToLogin == undefined) {
						return res.render("users/userLoginForm.ejs", {
							errors: [{ msg: "Credenciales incorrectas" }],
						})
					}
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
					if (req.body.rememberUser) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
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