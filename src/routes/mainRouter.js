const express = require ("express");
const router = express.Router();

const mainController= require ("../controllers/mainControllers");

router.get ("/", mainController.index);
router.get ("/product/:id", mainController.detalle);

module.exports = router;
