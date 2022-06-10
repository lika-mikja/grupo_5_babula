const express = require("express");
const router = express.Router();

const usersController = require("../controllers/UsersController");

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario y proceso login
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);

// Formulario y proceso de registro
router.get('/register', guestMiddleware, usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;