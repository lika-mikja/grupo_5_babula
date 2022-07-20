const express = require('express');
const router = express.Router();
const { check,validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { application } = require('express');
const bcryptRounds = 10;


router.post('/register', [
    check('title')
        .exists()   
        .isLength({min:5}) 
        .withMessage('Inserte el nombre del producto'),
    check('description')
        .exists()
        .isLength({min:20})
        .withMessage('Inserte una descripcion'),
    check('img')
        .exists()
        .escape()
        .withMessage('Inserte una imagen')
/* Comprueba que requiere entrada de archivo */
        .custom((value, { req }) => {
    if (!req.file) throw new Error("Formato no disponible");
    return true;
}),
    
  ]);