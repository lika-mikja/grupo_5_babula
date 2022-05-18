// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Multer config ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + Date.now() + "image" + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** Crear y editar un producto***/ 
router.get('/create', productsController.productCreate); 
router.post('/', upload.single("product-image") , productsController.store); 

router.get('/edit', productsController.productEdit); 

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** GET ONE PRODUCT ***/ 
router.get('/shop', productsController.shop);

module.exports = router;