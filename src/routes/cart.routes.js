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
 * /api/v1/cart:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Get Products in Cart
 *     requestBody:
 *       description: all products you have in cart
 *       required: false
 *       content:
 *         application/json:
 *           securitySchemes:
 *             bearerAuth:
 *               type: http
 *               scheme: bearer
 *               bearerFormat: JWT
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
 *
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
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 1
 *               quantity:
 *                 type: string
 *                 example: 1
 *           securitySchemes:
 *             bearerAuth:
 *               type: http
 *               scheme: bearer
 *               bearerFormat: JWT
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
 *     security:
 *       - bearerAuth: []
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
 *              type: object
 *              properties:
 *                productId:
 *                  type: string
 *                  example: 1
 *           securitySchemes:
 *             bearerAuth:
 *               type: http
 *               scheme: bearer
 *               bearerFormat: JWT
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
 *     security:
 *       - bearerAuth: []
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
 *     requestBody:
 *       description: In order to buy the cart send the cartId by params.
 *       required: true
 *       content:
 *         application/json:
 *           securitySchemes:
 *             bearerAuth:
 *               type: http
 *               scheme: bearer
 *               bearerFormat: JWT
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
 * /api/v1/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Get Orders
 *     requestBody:
 *       description: All orders you've made (history)
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *           securitySchemes:
 *             bearerAuth:
 *               type: http
 *               scheme: bearer
 *               bearerFormat: JWT
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
 */

router.post("/cart/:cartId", authenticate, addProductToCart);

router.delete("/cart/:cartId", authenticate, deleteProductToCart);

router.put("/cart/:cartId", authenticate, buyCart);

router.get("/cart", authenticate, getAllCarts);

router.get("/orders", authenticate, getOrders);

module.exports = router;
