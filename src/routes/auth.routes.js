const { Router } = require("express");
const { userLogin } = require("../controllers");

const router = Router();
/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Login an existing user
 *     tags:
 *       - Login
 *     requestBody:
 *       description: In order to Login an user that already exists please insert the email and password.(You´ll provided a token which you have to use on the headers for the private requests))
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 email:
 *                   type: string
 *                   example: jordi21@gmail.com
 *                 password:
 *                   type: string
 *                   example: 1234
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
 */
router.post("/auth/login", userLogin);

module.exports = router;
