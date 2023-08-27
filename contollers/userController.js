const userService = require("../services/userService");
const userSchema = require("../models/userSchema");

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("Something went wrong -> getUserById"); // change
  }
};

const getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await userService.getUserByEmail(email);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(400).send(null);
    }
  } catch (err) {
    res.status(400).send("Something went wrong -> getUserByEmail");
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send("Something went wrong -> getAllUsers");
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id, user } = req.body;
    const updatedUser = await userService.updateUser(id, user);
    if (!updatedUser) {
      res.status(400).json({ error: "Invalid email format." });
    }
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(400).send("Something went wrong -> updateUser");
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.body;
  try {
    const user = await userService.deleteUser(id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("Something went wrong -> deleteUser");
  }
};

const createUser = async (req, res, next) => {
    const { email , password } = req.body;
    try {
      const user = new userSchema({
        email,
        password
      })
      user.save()
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send("Something went wrong -> deleteUser");
    }
  };

module.exports = {
  updateUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  deleteUser,
  createUser,
};