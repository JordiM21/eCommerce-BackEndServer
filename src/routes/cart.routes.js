const { Router } = require("express");
const {
	addProductToCart,
	getAllCarts,
	deleteProductToCart,
	buyCart,
	getOrders,
} = require("../controllers");

const router = Router();

router.post("/cart/:cartId", addProductToCart);

router.delete("/cart/:cartId", deleteProductToCart);

router.put("/cart/:cartId", buyCart);

router.get("/cart", getAllCarts);

router.get("/orders", getOrders);

module.exports = router;
