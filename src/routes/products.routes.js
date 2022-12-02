const { Router } = require("express");
const { getAvailableProducts, createProduct } = require("../controllers");
const authenticate = require("../middlewares/auth.middlewares");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     tags:
 *       - Get Available products
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
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create/Post a product
 *     tags:
 *       - PostProduct
 *     requestBody:
 *       description: In order to post a product you have to send the following information, dont forget to authenticate cause this is a private route
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 name:
 *                   type: string
 *                   example: Tenis Nike Air Force 1
 *                 price:
 *                   type: integer
 *                   example: 50
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
 */

router.get("/products", getAvailableProducts);

router.post("/products", authenticate, createProduct);

module.exports = router;
