const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");
// const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);
router.get("/users", getAllUsers);

module.exports = router;
