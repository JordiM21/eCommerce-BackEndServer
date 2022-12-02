const { Router } = require("express");
const { getAvailableProducts, createProduct } = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

router.get("/products", getAvailableProducts);

router.post("/products", authenticate, createProduct);

module.exports = router;
