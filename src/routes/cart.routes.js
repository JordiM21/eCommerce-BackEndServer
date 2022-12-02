const { Router } = require("express");
const authenticate = require("../middlewares/auth.middlewares");
const {
	addProductToCart,
	getAllCarts,
	deleteProductToCart,
	buyCart,
	getOrders,
} = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{cartId}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add product to Cart
 *     tags:
 *      - AddToCart
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart Id
 *     requestBody:
 *       description: Send product id by body and cart i d by params
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/addToCart"
 *         securitySchemes:
 *           bearerAuth:
 *             type: http
 *             scheme: bearer
 *             bearerFormat: JWT
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   delete:
 *     summary: Delete product from cart
 *     tags: [DeleteFromCart]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart id
 *     requestBody:
 *       description: In order to delete the product from the cart please send the productId in the body and the cartId by params.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/DeleteFromCart'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *   put:
 *     summary: Buy Cart
 *     tags: [BuyCart]
 *     parameters:
 *       - in: path
 *         name: cartId
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: cart id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/BuyCart"
 */

router.post("/cart/:cartId", authenticate, addProductToCart);

router.delete("/cart/:cartId", authenticate, deleteProductToCart);

router.put("/cart/:cartId", authenticate, buyCart);

router.get("/cart", authenticate, getAllCarts);

router.get("/orders", authenticate, getOrders);

module.exports = router;
