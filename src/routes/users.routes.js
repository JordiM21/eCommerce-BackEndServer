const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");
// const authenticate = require("../middlewares/auth.middleware");

const router = Router();
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: See the active users
 *     tags:
 *       - Get All Users
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
 *     summary: Create a new User using email, username and password
 *     tags:
 *      - Register User
 *     requestBody:
 *       description: Send the following information to create a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: Jordi21
 *               email:
 *                 type: string
 *                 example: jordi21@gmail.com
 *               password:
 *                 type: string
 *                 example: 1234
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
 *
 */
router.get("/users", getAllUsers);
router.post("/users", userRegister);

module.exports = router;
