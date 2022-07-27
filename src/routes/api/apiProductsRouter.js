// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Api Controller Require ************
const apiProductsController = require("../../controllers/api/apiProductsController");



/*** GET ALL PRODUCTS ***/
router.get("/", apiProductsController.allData);

/*** Create and edit products ***/
//router.get("/create", authMiddleware, productsController.productCreate);

/*router.post(
  "/",
  uploadFile.single("product_image"),
  // validations1,
  productsController.store
);

/*** EDIT ONE PRODUCT ***/
/*router.get("/edit/:id", authMiddleware, productsController.productEdit);
router.patch("/edit/:id", uploadFile.single("img"), productsController.update);

/*** GET ONE PRODUCT ***/
/*router.get("/detail/:id", productsController.detail);

/*** DELETE ONE PRODUCT***/
/*router.delete("/delete/:id", productsController.destroy);

/*** GET ONE PRODUCT ***/
/*router.get("/shop", productsController.shop);*/

module.exports = router;
