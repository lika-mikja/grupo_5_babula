const express = require ("express");
const router = express.Router();

const usersController = require ("../controllers/UsersController");

router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);

// Perfil de Usuario
router.get('/profile', usersController.profile);

module.exports = router;