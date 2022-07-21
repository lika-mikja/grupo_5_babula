const path = require("path");
const { body } = require("express-validator");
const db = require("../database/models");

const User = db.User;

const validateRegister = [
  body("firstName")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Ingrese un nombre con mas de 2 carateres"),
  body("lastName")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Ingrese un nombre con mas de 2 carateres"),
  // body("email")
  //   .notEmpty()
  //   .withMessage("Tienes que escribir un correo electrónico")
  //   .bail()
  //   .isEmail()
  //   .withMessage("Debes escribir un formato de correo válido")
  //   .custom((email) => {
  //     /* Chequea que el mail sea unico */
  //     const value = User.isEmailInUse(email);
  //     if (value) {
  //       throw new Error("Este email ya se encuentra registrado");
  //     }
  //   }),
  body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .escape(),
  body("roleId").notEmpty().withMessage("Tienes que elegir un categoría"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validateRegister;
