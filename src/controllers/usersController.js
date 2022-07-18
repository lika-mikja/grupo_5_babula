
const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require("../database/models")
const sequelize = db.sequelize;
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
		const {firstName, lastName, email, password, roleId} = req.body
		let checkRoleId ;
		if (roleId == "Admin"){
			return checkRoleId = 1
		}else {
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
			firstName ,
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
		
	} ,
	
	login: (req, res) => {
		return res.render('./users/userLoginForm');
	},
	loginProcess: async (req, res) => {
		let email = req.body.email
		console.log(email)
		let userToLogin = await User.findAll({where: {email: req.body.email}})
		console.log(userToLogin)
		if (userToLogin) {
			let password = req.body.password
			let isOkThePassword = bcryptjs.compareSync(password, userToLogin[0].password);

			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if (req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
				}
				return res.redirect('/');
			}
			return res.render('./users/userLoginForm', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		}
		return res.render('./users/userLoginForm', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
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