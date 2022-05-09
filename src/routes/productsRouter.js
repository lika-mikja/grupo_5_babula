const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** Crear y editar un producto***/ 
router.get('/create', productsController.productCreate); 
router.get('/create', productsController.productCreate); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** GET ONE PRODUCT ***/ 
router.get('/shop', productsController.shop);

module.exports = router;