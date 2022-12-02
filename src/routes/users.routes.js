const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");
// const authenticate = require("../middlewares/auth.middleware");

const router = Router();
/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: get all users
 *     tags:
 *       - Users
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
 *                     $ref: "#/components/schemas/Users"
 *
 *   post:
 *     summary: create a new user
 *     tags: [Register]
 *     requestBody:
 *       description: In order to create a new User we need you to insert a username, email and a password.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/register'
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
router.get("/users", getAllUsers);
router.post("/users", userRegister);

module.exports = router;
