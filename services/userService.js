const { error } = require("console");
const User = require("../models/userSchema");

const getUserByData = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    return null; // Handle user not found
  }
  
  if (password === user.password) {
    return user;
  } else {
    return null; // Handle incorrect password
  }
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getAll = async () => {
  try {
    const users = await User.find();
    if (users) {
      return users;
    }
  } catch (err) {}
};

const updateUser = async (id, user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user);
    if (updatedUser) {
      return updatedUser;
    }
  } catch (error) {}
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      return deletedUser;
    }
  } catch (error) {}
};

module.exports = {
  getUserByData,
  getUserById,
  updateUser,
  getAll,
  deleteUser,
};