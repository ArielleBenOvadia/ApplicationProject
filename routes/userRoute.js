const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.patch("/update", userController.updateUser);
router.delete("/delete", userController.deleteUser);
router.post("/create",userController.createUser);

module.exports = router;