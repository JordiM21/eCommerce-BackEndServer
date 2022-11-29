const { Router } = require("express");
const { getAvailableProducts, createProduct } = require("../controllers");

const router = Router();

router.get("/products", getAvailableProducts);

router.post("/products", createProduct);

module.exports = router;
