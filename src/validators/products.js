const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { application } = require("express");
const bcryptRounds = 10;
const db = require("../database/models");

const User = db.User;

const validateRegister = [
  check("title")
    .exists()
    .withMessage('Inserte un nombre')
    .isLength({ min: 5 })
    .withMessage("Inserte un nombre de al menos 5 caracteres"),
  check("description")
    .exists()
    .withMessage("Inserte una descripcion")
    .isLength({ min: 20 })
    .withMessage('Inserte una descripcion de al menos 20 caracteres'),
  check("img")
    .exists()
    .escape()
    .withMessage("Inserte una imagen")
    /* Comprueba que requiere entrada de archivo */
    .custom((value, { req }) => {
      if (!req.file) throw new Error("Formato no disponible");
      return true;
    }),
]);
