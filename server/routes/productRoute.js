const express = require("express");
const { createProduct, getAdminProducts } = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getAdminProducts)
router.route("/admin/products/new").post(createProduct);
module.exports = router;