const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { application } = require("express");
const bcryptRounds = 10;

router.post("/register", [
  check("firstName")
    .exists() /* devulve un True si existe */
    .isLength({ min: 2 }) /* arregla un largo con un minimo */
    .withMessage("Inserte un Nombre"),
  check("lastName")
    .exists()
    .isLength({ min: 2 })
    .withMessage("Inserte un Nombre"),
  check("password")
    .escape() /* codifica la cadena para que pueda transmitirse por cualquier red que admita ASCII*/
    .exists()
    .isLength({ min: 8 })
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    .withMessage(
      "El password debe contener 1 Mayuscula, minuscula,un numero y un caracter especial"
    ),
  check("email")
    .exists()
    .isEmail()
    .normalizeEmail() /* Normaliza los email, los vuelve en minuscula */
    .trim() /*Elimina espacio en blanco*/
    .custom(async (email) => {
      /* Chequea que el mail sea unico */
      const value = await isEmailInUse(email);
      if (value) {
        throw new Error("Este email ya se encuentra registrado");
      }
    })
    .withMessage("Inserte un email valido"),
  check("avatar")
    .exists()
    .escape()
    .withMessage("Inserte una imagen")
    /* Comprueba que requiere entrada de archivo */
    .custom((value, { req }) => {
      if (!req.file) throw new Error("Formato no disponible");
      return true;
    }),
]);
