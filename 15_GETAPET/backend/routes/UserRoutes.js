const router = require("express").Router();

const UserController = require("../controllers/UserController");

// middlewares
const verifyToken = require("../helpers/check-token");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/:id", UserController.getUserById);
router.put("/edit/:id", verifyToken, UserController.editUser);

module.exports = router;
