const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/category/:category", productController.getProductByCategory);
router.get("/:name", productController.getProductById);
router.patch("/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);
router.post("/create",productController.createProduct);

module.exports = router;