const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const usersController = require("../controllers/UsersController");

// Middlewares
const uploadFile = require("../middlewares/multerUserMiddleware");
const validations = require("../middlewares/validateRegisterMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// Formulario y proceso de registro
/* router.get("/register", guestMiddleware, usersController.register); */
router.get("/register", usersController.register);
router.post(
  "/register",
  uploadFile.single("avatar"),
  validations,
  usersController.processRegister
);

// Formulario y proceso login
router.get("/login", usersController.login);
router.post("/login", usersController.processLogin);

// Perfil de Usuario
router.get("/profile", authMiddleware, usersController.profile);

// Logout
router.get("/logout", usersController.logout);

module.exports = router;
